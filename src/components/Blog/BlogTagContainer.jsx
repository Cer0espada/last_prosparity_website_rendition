import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../firebaseApp';
// import {QueryForTag} from './components/Controller';
import { useViewport } from '../Utilities/index'
import BlogMods from './components/BlogMods';

const BlogTagContainer = ({ tagName, addedClass, category, trending }) => {

    // const [results, setResults] = useState([]);
    const [things, setThings] = useState([]);
    const { width } = useViewport();
    //adjust for width


    const QueryForTag = async (query) => {

        let results = []

        db.collection('posts')
            .where("blogTags", "array-contains", query)
            .onSnapshot((querySnapshot) => {
                querySnapshot.forEach((doc) => results.push(doc.data()));
                setThings(results)
            })
    }

    const QueryForCategoryAndTag = async (query, category) => {
        let results = []

        db.collection('posts')
            .where("blogCategoryURL", "==", category)
            .where("blogTags", "array-contains", query)
            .onSnapshot((querySnapshot) => {
                querySnapshot.forEach((doc) => results.push(doc.data()));
                console.log(results)

                setThings(results)
                console.log(things)
            })

        console.log(things);
    }

    const GetAllPosts = async () => {

        let results = []

        db.collection('posts')
            .limit(5)
            .onSnapshot((querySnapshot) => {
                querySnapshot.forEach((doc) => results.push(doc.data()))
            })
        console.log(results)
        setThings(results)
    }

    useEffect(() => {

        if (category && !trending) QueryForCategoryAndTag(tagName, category)

        if (!category && !trending) QueryForTag(tagName)

        if (trending) GetAllPosts()
        //results only show up on scroll click 

        console.log(things)
    }, [])

    /////////////////InlineStylingComponent
    ///Justification --> Inline Styling is justified to move the container by a dynamic numerical amount, which is changed based on a range of values instead of a definate set of values

    ////////////Modification Notice 
    /// Note that this component makes use of both responsive css and react/javascript, please check both
    //SCSS and logic when modifying this page
    // const maxContainerWidth = ((posts.length-1)*-275) //maxWidth:`${maxContainerWidth}`}

    const [x, setX] = useState(0);

    const PostLengthCompensator = (posts) => {
        if (posts.length < 3) return 2

        return 3
    }

    // subtracting from the length to determine how many blogMod widths to move , and how many we want to display at a time
    const goLeft = () => (x === 0 ? setX(-275 * (things.length - PostLengthCompensator(things))) : setX(x + 275));

    //things.length was used so the input can be dynamic
    const goRight = () => (x === -275 * (things.length - PostLengthCompensator(things))) ? setX(0) : setX(x - 275);

    const [clicked, setClicked] = useState(false);

    return (
        <section className={`click-to-scroll-tag-containers ${addedClass && addedClass}`}>

            <div className="click-to-scroll-tag--heading-container">
                {/* dynamically displays a hastag on the title/ heading */}
                {trending ? <h2 className="click-to-scroll-tag--heading">{tagName}</h2> : <h2 className="click-to-scroll-tag--heading">#{tagName}</h2>}

                <div onClick={() => setClicked(prevState => !prevState)} className="click-to-scroll-tag--see-all-container">
                    {/* displays page like view of the different blogs */}
                    {clicked ?
                        (!width < 600) ?
                            <i className="click-to-scroll-tag--see-all__icon fas fa-chevron-down"></i> : ""
                        :
                        (width < 600) ?
                            // nested terniary operator in order to change routes on a smaller screen
                            <Link to={"/blog"}><button className="click-to-scroll-tag--see-all">See All</button></Link>
                            :
                            <button className="click-to-scroll-tag--see-all">See All</button>
                    }
                </div>

            </div>


            {/* <div className="click-to-scroll-overlay-first"> */}

            <section
                // if clicked then displays a grid and removes transformation
                className={clicked ? `click-to-scroll-tag--post-container active` : `click-to-scroll-tag--post-container inactive`}
                style={{ transform: clicked ? `none` : `translateX(${x}px)` }}>

                {

                    things.map((item, index) =>
                        <BlogMods
                            key={index}
                            title={item.title}
                            author={item.author}
                            authorImg={item.authorImg}
                            description={item.description}
                            date={item.formattedDate}
                            category={item.blogCategory}
                            imgSrc={item.imgPath}
                            titleLink={item.titleLink}
                        />
                    )
                }

                {
                    (things.length === 0) ?
                        <>
                            <div className="click-to-scroll-tag__message-container">
                                <p className="click-to-scroll-tag__message"> Hey there!, we're currently generating some new content &mdash; come back soon for more updates! </p>
                            </div>
                        </>
                        :
                        ""
                }




            </section>

            {!clicked &&
                <>
                    {/* doesn't display cursors if the amount of posts is less than 3 or width is less than 600 */}

                    {(!(things.length <= 3) || (width > 600)) &&
                        <>
                            <button className="click-to-scroll-sliders" id="goLeft" onClick={goLeft}>
                                <i className="click-to-scroll-sliders__icon fas fa-chevron-left"></i>
                            </button>
                            <button className="click-to-scroll-sliders" id="goRight" onClick={goRight}>
                                <i className="click-to-scroll-sliders__icon fas fa-chevron-right"></i>
                            </button>
                        </>
                    }
                </>
            }
            {/* //creating an overlay to cut off excess overflow */}

            {/* </div>     */}
            <hr className="click-to-scroll-tag__hr blog-hr" />

        </section>

    )
}

export default BlogTagContainer;