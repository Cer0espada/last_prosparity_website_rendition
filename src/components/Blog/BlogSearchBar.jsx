import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../firebaseApp';
import { useViewport, useOutsideClick } from '../Utilities';
import BlogModsMini from './components/BlogModsMini';
// import {MainSearch} from './components/Controller'
const BlogSearchBar = ({ backArrow }) => {


    const [clicked, setClicked] = useState(null);
    const [searchedTerm, setSearchedTerm] = useState("");
    const [results, setResults] = useState([])
    const [open, setOpen] = useState(false)

    const { width } = useViewport();

    const searchRef = useRef()
    const dropDownSearchRef = useRef()
    const dropDownRef = useRef()

    //useLayoutEffect ?? 

    const handleIconClick = () => {
        searchRef.current.focus()
        // console.log(clicked, 'changed')
    }

    const handleSearchChange = (event) => {
        setSearchedTerm(event.target.value)
    }

    const MainSearch = async (query) => {
        let searchResults = []
        const q1 = db.collection('posts')
            .where("titleSearchIndex", "array-contains", query)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    searchResults.push(doc.data())
                })
            })

        const q2 = db.collection('posts')
            .orderBy("title")
            .where("descSearchIndex", "array-contains", query)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    results.push(doc.data())
                })
            })

        const q3 = db
            .collection('posts')
            .orderBy('imgCaption')
            .where("imgCaption", ">=", query)
            .where("imgCaption", "<=", query + '\uf8ff')
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    results.push(doc.data())
                })
            })
      

        await Promise.all([q1, q2, q3])
        setResults(searchResults)

    }

    useEffect(() => {
        if (searchedTerm && !results.length) {
            MainSearch(searchedTerm)
            setOpen(true)


        }
        else {
            // MainSearch(searchedTerm)
            const timeOutId = setTimeout(() => MainSearch(searchedTerm), 500);

            return () => {
                clearTimeout(timeOutId)
         
            }
        }




    }, [searchedTerm])

    return (
        <div className="blog-home-page__search-container">
            <div className={`blog-home-page__search--content-container ${backArrow ? 'backArrow' : ""}`}>

                {backArrow && <Link to={"/blog"}><div className="blog-home-page__search--back-container">
                    <i className="search--back-icon fas fa-arrow-left"></i>
                    <p className="search--back-icon-text">Back to Home</p>
                </div></Link>}

                <div className="blog-home-page__search--function-container">
                    <i onClick={() => setClicked(prevState => !prevState)} className="blog-home-page__search--icon fas fa-search" ></i>
                    <input
                        onChange={(event) => handleSearchChange(event)}
                        className="blog-home-page__search--input"
                        type="text"
                        name=""
                        placeholder="Try 'passive income'..."
                        ref={searchRef}
                        id="" />
                    <div ref={dropDownSearchRef} className="blog-home-page__search-ref">
                        <nav ref={dropDownRef} className={`blog-home-page search-drop-down-container ${results ? 'active' : 'inactive'}`}>
                            {searchedTerm &&
                                results.map((item, index) =>

                                    <BlogModsMini
                                        key={index}
                                        addedClass="blog-home-page search-drop-down__items"
                                        title={item.title}
                                        author={item.author}
                                        description={item.description}
                                        date={item.date}
                                        category={item.blogCategory}
                                        imgSrc={item.imgPath}
                                        titleLink={item.titleLink}
                                    />

                                )}

                        </nav>
                    </div>
                </div>
            </div>

            <hr className="blog-home-page__search--hr" />
        </div>
    )
}

export default BlogSearchBar;