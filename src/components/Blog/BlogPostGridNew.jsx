import React, { useState, useEffect, useMemo, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { useViewport } from '../Utilities';
import BlogMods from './components/BlogMods';
import BlogModsMini from './components/BlogModsMini';
import DropDown from './components/DropDown';
import { db } from '../../firebaseApp';
import { BlogGridContext } from './context/BlogGridContext';
import { Pagination } from 'antd';


const BlogPostGridNew = ({ title, SearchPage, SearchedTag, Topic }) => {

    let location = useLocation();

    const [pageSize, setPageSize] = useState(6);
    const [current, setCurrent] = useState(1);
    const [posts, setPosts] = useState([])
    const [filteredPosts, setFilteredPosts] = useState("")

    const { sorted, filtered, setSearchedPosts } = useContext(BlogGridContext)

    const { width } = useViewport();
    // const posts = [
    //         <BlogMods></BlogMods>,
    //         <BlogMods></BlogMods>,
    //         <BlogMods></BlogMods>,
    //         <BlogMods></BlogMods>,
    //         <BlogMods></BlogMods>,
    //         <BlogMods></BlogMods>
    //     ]

    const titleArray = [
        { name: "All Categories", classed: "regular" },
        { name: "Happening Now", classed: "happening-now" },
        { name: "Financial Literacy", classed: "financial-literacy" },
        { name: "Black Female Excellence", classed: "black-female-excellence" },
        { name: "Education", classed: "education" },
        { name: "Prosparity", classed: "prosparity" },
    ]

    const sortByArray = [
        { name: "Recent", classed: "regular" },
        { name: "Trending", classed: "regular" }
    ]

    const ChangeInitialContextState = (context, arr) => {

        const to = 0

        switch (context) {
            case 'Financial Literacy':
                return [arr[0], arr[2]] = [arr[2], arr[0]];
            case 'Happening Now':
                return [arr[0], arr[1]] = [arr[1], arr[0]];
            case 'Black Female Excellence':
                return [arr[0], arr[3]] = [arr[3], arr[0]];
            case 'Education':
                return [arr[0], arr[4]] = [arr[4], arr[0]];
            case 'prosparity':
                return [arr[0], arr[5]] = [arr[5], arr[0]];
            default:
                return arr
        }
    }


    let ChangeIndex = (array, indexA, indexB) => {

        let from = array[indexA]
        let to = array[indexB]

        const tempArr = array

        tempArr[indexA] = to
        tempArr[indexB] = from

        return tempArr

    }



    const paginatedPosts = useMemo(() => {
        const lastIndex = current * pageSize
        const firstIndex = lastIndex - pageSize

        return posts.slice(firstIndex, lastIndex)
    }, [current, pageSize, posts])

    const GetAllPosts = async () => {

        let results = []

        db.collection('posts')
            // .orderBy("date")
            .onSnapshot((querySnapshot) => {
                querySnapshot.forEach((doc) => results.push(doc.data()));
                setPosts(results)
                setFilteredPosts(results)
                console.log(results)
            })

    };

    const QueryByCategory = async (query) => {
        let results = []
        db.collection('posts')
            .where("blogCategory", "==", query)
            .orderBy('created_At')
            .onSnapshot((querySnapshot) => {
                querySnapshot.forEach((doc) => results.push(doc.data()));
                setPosts(results)
                setFilteredPosts(results)
                console.log(results)
            })
    }

    const QueryForTag = async (query) => {

        let results = []

        db.collection('posts')
            .where("blogTags", "array-contains", query)
            .onSnapshot((querySnapshot) => {
                querySnapshot.forEach((doc) => results.push(doc.data()));
                console.log(results)
                setPosts(results)
                setSearchedPosts(results)
            })

    }

    const QueryForTagAndCategory = async (tag, category) => {
        let results = []

        db.collection('posts')
            .where("blogTags", "array-contains", tag)
            .where("blogCategory", "==", category)
            .onSnapshot((querySnapshot) => {
                querySnapshot.forEach((doc) => results.push(doc.data()));
                console.log(results)
                setPosts(results)
                setSearchedPosts(results)
            })
    }

    // const handleFiltering = (filtered, sorted) => {
    //     //need to complete recent and trending

    //     switch(filtered){
    //         case "All Categories":
    //             return posts
    //         case "Happening Now":
    //              setFilteredPosts(posts.filter(item => item.blogCategory !=="Happening Now"))
    //         case "Financial Literacy":
    //              setFilteredPosts(posts.filter(item => item.blogCategory !=="Financial Literacy"))
    //         case "Black Female Excellence":
    //              setFilteredPosts(posts.filter(item => item.blogCategory !=="Black Female Excellence"))
    //         case "Education":
    //              setFilteredPosts(posts.filter(item => item.blogCategory !=="Education"))
    //         case "Prosparity":
    //              setFilteredPosts(posts.filter(item => item.blogCategory !=="Prosparity"))
    //         default:
    //             return
    //     }
    // }

    useEffect(() => {
        window.scroll({
            bottom: 1000,
            left: 0,
            behavior: "smooth"
        })
    }, [current, pageSize])

    useEffect(() => {
        console.log(filtered)
        console.log(sorted)
    }, [sorted, filtered])


    useEffect(() => {

        if (!SearchPage) GetAllPosts()

        if (SearchPage) QueryForTag(SearchedTag)


    }, [location.key])
    //location.key controls for changing the dynamic route in the homepage // a work around hack 
    //for refreshing the page in react -router

    useEffect(() => {

        if (filtered === "All Categories" && !SearchPage) GetAllPosts();

        if (filtered === "All Categories" && SearchPage) QueryForTag(SearchedTag);

        if (filtered !== "All Categories" && !SearchPage) QueryByCategory(filtered);

        if (filtered !== "All Categories" && SearchPage) QueryForTagAndCategory(SearchedTag, filtered);
    }, [filtered, sorted])




    return (

        <section className="blog-home-page__all-blog-posts-container">

            <div className="blog-home-page__all-blog-posts--top-container">

                <h2 className="blog-home-page__all-blog-posts--main-heading">{title}</h2>
                {/* terniary operator displays context state on topic page */}
                <div className="blog-dropdown-container">Filtered by: <DropDown filteredBool={true} DropDownArray={titleArray} title="All Categories" addedClass="blog-dropdown filtered" /></div>
                <div className="blog-dropdown-container">Sort By: <DropDown sortedBool={true} DropDownArray={sortByArray} title="Recent" addedClass="blog-dropdown sorted" /></div>
            </div>

            <section className="blog-home-page__all-blog-posts--grid-container">
                {
                    (width > 600) ?

                        paginatedPosts.map((item, index) => (
                            <BlogMods
                                key={index}
                                addedClass=""
                                title={item.title}
                                author={item.author}
                                authorImg={item.authorImg}
                                description={item.description}
                                date={item.formattedDate}
                                category={item.blogCategory}
                                imgSrc={item.imgPath}
                                titleLink={item.titleLink}
                            />
                        ))
                        :
                        paginatedPosts.map((item, index) => (
                            <BlogModsMini
                                key={index}
                                addedClass="blog-home-page blog-mods-mini-link-container"
                                title={item.title}
                                author={item.author}
                                authorImg={item.authorImg}
                                description={item.description}
                                date={item.formattedDate}
                                category={item.blogCategory}
                                imgSrc={item.imgPath}
                                titleLink={item.titleLink}
                            />
                        ))


                }

                {posts.length === 0 &&
                    <>
                        <div className="click-to-scroll-tag__message-container">
                            <p className="click-to-scroll-tag__message"> Hey there!, we're currently generating some new content &mdash; come back soon for more things related to prosp(a)rity! </p>
                        </div>
                    </>
                }

                <div className="pagination-container">
                    <Pagination
                        simple
                        showSizeChanger
                        onShowSizeChange={setPageSize}
                        pageSize={pageSize}
                        total={posts.length}
                        defaultCurrent={current}
                        onChange={setCurrent}
                    />
                </div>

            </section>
        </section>

    )
}

export default BlogPostGridNew;