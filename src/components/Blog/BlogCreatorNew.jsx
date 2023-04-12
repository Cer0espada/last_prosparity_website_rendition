import React, { useState, useEffect, useCallback, useContext } from 'react';
import ReactQuill from 'react-quill';
import Helmet from 'react-helmet';
import QuillToolBox, { modules, formats } from './QuillEditorToolBox'
import MainHeader from '../Mobile/MainHeader';
import QuillToolBar from './QuillEditorToolBox';
import { v4 as uuidv4, v4 } from 'uuid';
// import TagInput from './components/TagInput';
import NewTags from './components/NewTags';
import { TagContext } from './context/TagContext';
import { db } from '../../firebaseApp';
// import QuillEditor from './QuillEditor';

import 'react-quill/dist/quill.snow.css';
//firebase firestore
import {
    CreateAuthor,
    CreateBlogPost,
    UploadImage,
    UploadAuthorImage,
    UpdateBlogPost,
    UpdateAuthorWithBlogPost,
    UpdateBlogWithAuthor
} from './components/Controller';


const BlogCreatorNew = () => {
    let today = () => {
        let day = new Date()
        return day.toLocaleDateString()
    }
    //Context State 
    const [blogTags, setBlogTags] = useState([]);

    /////Local State
    /////////////////////////////Form Input State 

    //author state
    const [author, setAuthor] = useState("Ashley Wells");
    const [authorId, setAuthorId] = useState("");

    const [category, setCategory] = useState("Financial Literacy");
    const [title, setTitle] = useState("");
    const [titleLower, setTitleLower] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState(today())
    const [seoTitle, setSeoTitle] = useState("");
    //img state
    const [image, setImage] = useState(null);
    const [imageName, setImageName] = useState("");
    const [imagePreview, setImagePreview] = useState("");
    const [imageCaption, setImageCaption] = useState("");

    /////author img state
    const [authorImage, setAuthorImage] = useState(null);
    const [authorImageName, setAuthorImageName] = useState("");
    const [authorImagePreview, setAuthorImagePreview] = useState("");

    const [quillInfo, setQuillInfo] = useState("");
    const [submit, setSubmit] = useState("");
    // Error State
    const [error, setError] = useState(false)


    const formHandler = (state) => {

        if (state.trim() === "") return "Cannot have empty forms"


        if (state.trim().length < 5) return "Probably want to add more words to this"


    }

    const toTitleCase = (str) => {

        const exceptions = ["and", "the", "a", "an", "for", "to", "but", "at", "by", "is", "it", "of"];
        const splitString = str.toLowerCase().trim().split(" ")
        const newString = []
        splitString.forEach(word => {
            if (exceptions.includes(word)) return newString.push(word)
            console.log(word)
            word.toString().replace(
                /\w\S*/g,
                (txt) => newString.push(txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase())
            )

        })

        return newString.join(" ");
    }
    const handleTitle = (event) => {
        setTitle(toTitleCase(event.target.value).trim())

        //usememo or usecallback possibly 
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setTitleLower(title.toLowerCase())
        setSubmit(
            {
                author: author,
                category: category,
                title: title,
                description: description,
                date: date,
                quillDelta: quillInfo,
                tags: blogTags
            }
        )
        console.log(author)
        console.log(submit)

        let authorImageURL = await UploadAuthorImage(authorImage, authorImageName);

        let downloadURL = await UploadImage(image, imageName);

        console.log(downloadURL)

        let first_name = author.split(" ")[0]
        let last_name = author.split(" ")[1]

        let blog_uuid = ""
        let author_uuid = ""

        const createIndex = (words) => {

            words = words.trim().split(" ")
            let listIndex = []
            for (let i = 0; i < words.length; i++) {
                for (let y = 1; y < words[i].length; y++) {
                    listIndex.push(words[i].substr(0, y + 1).toLowerCase())
                }
            }

            return listIndex++
        }


        CreateAuthor(first_name, last_name, new Date(), authorImageURL)
        const authorRef = await db.collection('authors').where("first_name", "==", first_name).where("last_name", "==", last_name).get()
        console.log(authorRef)

        console.log(authorRef.docs)
        const author_id = authorRef.docs[0].id
        console.log(author_id)

        CreateBlogPost(
            quillInfo.value,
            author,
            author_id,
            authorImageURL,
            category,
            description,
            date,
            title,
            title.toLowerCase(),
            seoTitle,
            imageCaption,
            downloadURL,
            blogTags,
            createIndex(title),
            createIndex(description),
            blog_uuid
        )

        const blogRefTitle = await db.collection('posts').where("titleLower", "==", title.toLowerCase()).get()
        const blogRefDesc = await db.collection('posts').where('description', "==", description).get()

        const blogRef = await Promise.all([blogRefTitle, blogRefDesc])

        console.log(blogRef)
        const blog_id = blogRefDesc.docs[0].id
        console.log(blog_id)
        
        //    console.log(blog_id)

        UpdateAuthorWithBlogPost(author_id, blog_id);
        // UpdateBlogWithAuthor(blog_id, author_id);

        //updates with ids image path references 
        // UpdateBlogPost(blogId, authorId, quillInfo.value, title, imageUrl)
        //     console.log(" past create Update Blog Post")
    }



    const handleMainUploadImage = (event) => {
        setImage(event.target.files[0])
        setImagePreview(URL.createObjectURL(event.target.files[0]))
        setImageName(event.target.files[0].name)
        // console.log(imageName)

    }

    const handleAuthorUploadImage = (event) => {
        setAuthorImage(event.target.files[0])
        setAuthorImagePreview(URL.createObjectURL(event.target.files[0]))
        setAuthorImageName(event.target.files[0].name)
        // console.log(imageName)

    }

    const getQuillDelta = useCallback((value, delta, source, editor) => {
        setQuillInfo({ value: value, delta: delta, source: source })
    }, [])

    useEffect(() => {
        console.log(blogTags)
    }, [blogTags])

    return (
        <>
            <>
                {/* <Helmet>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/quill/1.3.7/quill.core.css"/>
        </Helmet> */}
            </>

            <TagContext.Provider value={{ blogTags, setBlogTags }} >

                <main className="blog-page-creator-container">

                    <MainHeader
                        title="Blog"
                        text="Check out interviews, articles, and news written and curated by us"
                    />
                    <section className="blog-page-creator__content-container">
                        <form action="" className="blog-page-creator__form">
                            <label htmlFor="">Who is Editing / Creating this blog?</label>
                            <select
                                onChange={(event) => setAuthor(event.target.value)}
                                name="author" id="author-select">
                                <option value="Ashley Wells">Ashley Wells</option>
                                <option value="Eberechukwu Etike">Eberechukwu Etike</option>
                                <option value="Jackie Ho">Jackie Ho</option>
                                <option value="Kate DeBaun-Fee">DeBaun-Fee</option>
                                <option value="Lee Morgan">Lee Morgan</option>
                                <option value="Liv Gorman">Liv Gorman</option>
                                <option value="OgaOluwa Ajiboso">OgaOluwa Ajiboso</option>
                            </select>

                            <label htmlFor="">What category is this blog for ?</label>
                            <select
                                onChange={(event) => setCategory(event.target.value)}
                                name="categoryPicker" id="category-picker">
                                <option value="Financial Literacy">Financial Literacy</option>
                                <option value="Black Female Excellence">Black Female Excellence</option>
                                <option value="Happening Now">Happening Now</option>
                                <option value="Education">Education</option>
                                <option value="Prosparity">Prosparity</option>
                            </select>

                            <label htmlFor=""> What is the title of the Post ?</label>
                            <input
                                onChange={(event) => handleTitle(event)}
                                name="Title" type="text" placeholder="Some Fancy Blog Title" />
                            {/* <p className="error-is-present">Something went wrong here   </p> */}
                            <label htmlFor=""> What is the description of your Post ?</label>
                            <input
                                onChange={(event) => setDescription(event.target.value)}
                                name="description" type="text" placeholder="Some Fancy Blog Description" />
                            <label htmlFor=""> What tags should we apply to this ?</label>
                            {/* <TagInput /> */}

                            <label htmlFor="">Three Word Title for SEO</label>
                            <input
                                onChange={(event) => setSeoTitle(event.target.value)}
                                name="seoTitle" type="text" placeholder="Black Lives Matter" />

                            < NewTags />
                            <label htmlFor="">What date should this post be published?</label>
                            <input
                                onChange={(event) => setDate(event.target.value)}
                                name="blogDate" type="date" placeholder={"1/1/2021"} />
                            <label htmlFor="">Select the image that you would like to use as a thumbnail for the main blog page, you can insert other images through the editor</label>
                            <input
                                onChange={(event) => handleMainUploadImage(event)}
                                name="mainImage" type="file" accept="image/png, image/jpeg, image/gif" />
                            {image && <img src={imagePreview} alt="uploaded pic" className="blog-page-creator__form--main-image-preview" />}
                            <label htmlFor="">Select the image that you would like to use as a thumbnail for the your profile page in the document</label>
                            <input
                                onChange={(event) => handleAuthorUploadImage(event)}
                                name="authorImage" type="file" accept="image/png, image/jpeg, image/gif" />
                            {
                                authorImage &&
                                <div className="blog-page-creator__form--author-image-preview-container">
                                    <img src={authorImagePreview} alt="uploaded pic" className="blog-page-creator__form--author-image-preview" />
                                </div>
                            }

                            <label htmlFor="">Please input the main image caption into the form</label>
                            <input
                                onChange={(event) => setImageCaption(event.target.value)}
                                name="mainImagecaption" type="text" />




                            <section className="blog-page-draft-container">
                                <QuillToolBar />
                                <ReactQuill
                                    // value={change.value}
                                    onChange={getQuillDelta}
                                    placeholder={"Writing is fun"}
                                    style={{ height: `60vh` }}
                                    theme="snow"
                                    modules={modules}
                                    formats={formats}
                                />
                                {/* <QuillEditorSmall/> */}

                                {/* <QuillEditor /> */}
                            </section>

                            <button onClick={(event) => handleSubmit(event)} className="color-primary-light-button">Submit</button>
                        </form>
                    </section>
                    <script src="//cdn.quilljs.com/1.3.6/quill.min.js"></script>
                </main>
            </TagContext.Provider>
        </>
    )

}

export default BlogCreatorNew;