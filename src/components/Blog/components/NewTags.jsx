import React, { useState, useContext } from 'react';
import { TagContext } from '../context/TagContext'

const NewTags = () => {

    const { blogTags, setBlogTags } = useContext(TagContext)
    const [tags, setTags] = useState([
        "defeatingdisparity",
        "financialliteracy",
        "postgrad",
        "university",
        "enteringtheworkforce",
        "disparity",
        "health",
        "loans",
        "tuesdaytipoftheday",
        "wellness",
        "studentdebt",
        "interviews",
        "financialliteracyfridays",
        "postgrad",
        "highereducation",
        "university",
        "enteringtheworkforce",
        "studentdebt",
        "tuesdaytipoftheday"
    ])
    // const [selectedTags, setSelectedTags] = useState([])

    const handleClickedTag = (item) => {

        setTags(tags.filter(selected => selected !== item))
        setBlogTags(prevState => [...prevState, item])

        // console.log(item)
        // console.log(tags)
        // console.log(selectedTags)
    }

    const handleSelectedClickedTag = (item) => {

        setBlogTags(blogTags.filter(selected => selected !== item))
        setTags(prevState => [...prevState, item])
    }


    return (
        <div className="blog-page-creator__form--tags-main-container">

            <div className="blog-page-creator__form--tags-top-container">
                {tags.map((item, index) => <p onClick={() => handleClickedTag(item)} key={index}>{`#${item}`} &#x2716;</p>)}
            </div>

            <div className="blog-page-creator__form--tags-bottom-container">
                {blogTags.map((item, index) => <p onClick={() => handleSelectedClickedTag(item)} key={index}> {`#${item}`}  &#x2716;</p>)}
            </div>

        </div>
    )
}

export default NewTags; 