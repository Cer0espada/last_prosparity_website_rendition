import React,{useState, useEffect} from 'react';
import {useLocation, Link} from 'react-router-dom'
import {Helmet} from 'react-helmet';
// import sanitize,{sanitizeHtml, defaults} from 'sanitize-html';
import SanitizedHTML from 'react-sanitized-html';

// custom componets 
import {useViewport} from '../Utilities';

import MailingList from '../MailingList'
import MainHeader from '../Mobile/MainHeader';
import BlogTagContainer from './BlogTagContainer';
import {db, analytics} from '../../firebaseApp';

//photos
// import ashley from '../../img/prosparettes/ashley.jpg'
// import money from '../../img/posts/money.jpg';
import { set } from 'lodash';
const BlogPage = () => {
    const [post, setPost] = useState("");
    const [id, setId] = useState("")
   
    const {width} = useViewport();
    
    let location = useLocation();
    const titleLink = location.pathname.split("/blog/").slice(-1)[0];
    //check memory leak in location.pathname
    // console.log(location.pathname)
    
    let homepage = '';
    // 'http://www.theprosparityproject.org'

    let currentpage = homepage + location.pathname;

    const urlEncode = (text) => {
        let finalString = []
        const splitArray = text.split("")

    
           return splitArray.map((item,index) => {
            switch(item){
                case "!":
                    return finalString[index]= "%2"
                case "#":
                    return finalString[index]="%23"
                case "$":
                    return finalString[index]="%24"
                case "&":
                    return finalString[index]="%26"
                case "'":
                    return finalString[index]="%27"
                case "(":
                    return finalString[index]="%28"
                case ")":
                    return finalString[index]="%29"
                case "*":
                    return finalString[index]="%2A"
                case "+":
                    return finalString[index]="%2B"
                case ",":
                    return finalString[index]="%2C"
                case "/":
                    return finalString[index]="%2F"
                case ":":
                    return finalString[index]="%3A"
                case ";":
                    return finalString[index]="%B"
                case "=":
                    return finalString[index]="%3D"
                case "?":
                    return finalString[index]="%3F"
                case "@":
                    return finalString[index]="%40"
                case "[":
                    return finalString[index]="%5B"
                case "]":
                    return finalString[index]="%5D"
                default:
                    return finalString[index]=item
                    
                 }
                }).join("")
        }

    const facebookShareHandler = (title, description, caption, picture) => {
        // info from https://css-tricks.com/simple-social-sharing-links/
        let url = `https://www.facebook.com/sharer.php?u${currentpage}&title=${urlEncode(title)}&description=${urlEncode(description)}&caption=${urlEncode(caption)}&picture=${picture}`
        return url
    }

    const twitterShareHandler = (title, hashtags) => {

        //text = title of blog post
        //hashtags = hashtages needed to use in post -- no more than 3 because of the 140 char limit

        let url = `https://twitter.com/intent/tweet?${homepage}${location.pathname}&text=${urlEncode(title)}&${hashtags}`

        return url
    }

    const LinkedinShareHandler = (title,summary) => {
       let mini=true //mini- value must always be true 
        //title- url encoded title to use 
        //url-charmax 1024
        //summary -- url encoded description you want to use 
        //source--  The url-encoded source of the content (e.g. your website or application name)
        let url = `https://www.linkedin.com/shareArticle?mini=${mini}&url=${homepage}&title=${urlEncode(title.toLowerCase())}&summary=${urlEncode(summary.toLowerCase())}&=source=${currentpage}`

        return url
    }
    let uuid =""
    const QueryForBlogTitleLink = async(titleLink) =>{
        let results =[]
        let ids =[]
        db.collection('posts')
        .where("titleLink", "==", titleLink)
        .onSnapshot((querySnapshot) => {
        querySnapshot.forEach(async (doc) => {
            results.push(doc.data())
            uuid =results[0].uuid
            setId(results[0].uuid)
            //  setId(doc.id)
        });

        setPost(results[0])
        // setId(ids[0].uuid)
        // setId(docId)
        // console.log(docId[0])
        console.log(results[0])
        
    })

    } 
    

    // const UpdateViews = async(id) => {

    //     var currentPost = db.collection('post').where("uuid", "==", id).get();
    //     console.log(currentPost)
    //     analytics.logEvent(`blog_page ${post.id} visited`)
    //     const increment = firebase.firestore.FieldValue.increment(1);

    //     return currentPost.update({
    //         views: increment
    //     }).catch((error) => console.error( "error updating document:", error))
    // }

    const getFullMonthDate = (string) => {

        const FullMonthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        
        const splitDate =  string.split("/")

        let month = splitDate[0]-1 
        const day = (splitDate[1].length < 2)? `0${splitDate[1]}`: splitDate[1] 
        const year = splitDate[2]

        month = FullMonthArr[month]

        return `${month} ${day}, ${year}`

    }

    const blogPageView = async() => {

            analytics.logEvent("blog_pageviewed", {
                page: titleLink
            })
        }

        //default tags to sanitize 
        const defaults = {
                        allowedTags: [
            "address", "article", "aside", "footer", "header", "h1", "h2", "h3", "h4",
            "h5", "h6", "hgroup", "main", "nav", "section", "blockquote", "dd", "div",
            "dl", "dt", "figcaption", "figure", "hr", "li", "main", "ol", "p", "pre",
            "ul", "a", "abbr", "b", "bdi", "bdo", "br", "cite", "code", "data", "dfn",
            "em", "i", "kbd", "mark", "q", "rb", "rp", "rt", "rtc", "ruby", "s", "samp",
            "small", "span", "strong", "sub", "sup", "time", "u", "var", "wbr", "caption",
            "col", "colgroup", "table", "tbody", "td", "tfoot", "th", "thead", "tr", "img"
            ],
            disallowedTagsMode: 'discard',
            allowedAttributes: {
            a: [ 'href', 'name', 'target' ],
            // We don't currently allow img itself by default, but this
            // would make sense if we did. You could add srcset here,
            // and if you do the URL is checked for safety
            img: [ 'src' ]
            },
            // Lots of these won't come up by default because we don't allow them
            selfClosing: [ 'img', 'br', 'hr', 'area', 'base', 'basefont', 'input', 'link', 'meta' ],
            // URL schemes we permit
            allowedSchemes: [ 'http', 'https', 'ftp', 'tel' ],
            allowedSchemesByTag: {},
            allowedSchemesAppliedToAttributes: [ 'href', 'src', 'cite' ],
            allowProtocolRelative: true,
            enforceHtmlBoundary: false
        }

    
    useEffect(() => {
        QueryForBlogTitleLink(titleLink)
        blogPageView()
        
    },[])

    return(
        <>
    
        <Helmet>
            <title>{`${post.seoTitle} | ${post.blogCategory}`}</title>
             <meta property="og:title" content={post.title} />
              <meta property="og:image" content={post.imgPath} />
              <meta property="og:description" content={post.description} />
        </Helmet>
    
        <main className="blog-page-container">
            <MainHeader 
                    title="Blog"
                    text="Check out interviews, articles and news written and curated by us"
                    />
                <section className="blog-page__content-container">
                    <article className="blog-page__current-article">
                    <div className="blog-page__header-grid">
                    <Link to={`/blog/topic/${post.blogCategoryURL}`} className={post.blogCategoryURL}><h2 className={`blog-page__header-grid--category ${post.blogCategoryURL}`}>{post.blogCategory}</h2></Link>
                    <h1 className="blog-page__header-grid--heading-main"> {post.title}</h1>
                    <p className="blog-page__header-grid--subheading">{post.description}</p>

                     
                        <div className="blog-page__header-grid--author-container">
                            <div className="blog-page__header-grid--author-container__img-container">
                                <img src={post.authorImg} alt="" className="blog-page__header-grid--author-container__img"/>
                            </div>
                            {(width <600)
                                ?
                                    <p className="blog-page__header-grid--author-container__name">{post.author} <br/> {(post.formattedDate)}</p>
                                    :
                                    <p className="blog-page__header-grid--author-container__name">{post.author} {(post.formattedDate)}</p>
                            }
                        </div>

                        <div className="blog-page__header-grid--social-media-container">
                            {/* {post &&
                                <>
                                    <a href={LinkedinShareHandler(post.title, post.description)} ><i className="blog-page__header-grid--social-media-container__icons fab fa-linkedin"></i></a>
                                    
                                    <a href={twitterShareHandler(post.title, post.blogtags)} ><i className="blog-page__header-grid--social-media-container__icons fab fa-twitter"></i></a>
                                    
                                    <a href={facebookShareHandler(post.title, post.description, post.imgCaption, post.imgPath)} ><i className="blog-page__header-grid--social-media-container__icons fab fa-facebook"></i></a>
                                </>
                                } */}
                          
                            {/* // <a href={} ><i className="blog-page__header-grid--social-media-container__icons fas fa-external-link-alt"></i></a> */}
                        </div>
                        

                    </div>
                    <figure className="blog-page__main-img-container">
                        <img src={post.imgPath} alt="" className="blog-page__main-img"/>
                            <figcaption>{post.imgCaption}</figcaption>
                    </figure>
                        <br />
                        <br />
                        {/* <h1 className="blog-page__written-content-heading">This is a title</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore qui possimus culpa? Expedita magni earum mollitia voluptas aliquam commodi ea harum ratione, nostrum voluptates fugiat ipsa ducimus asperiores porro repudiandae.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore cum sint corrupti repellendus eaque. Sapiente expedita minima eum quaerat maiores esse, possimus et excepturi minus dolor quidem, est numquam consectetur.</p>
                        
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aut accusantium veritatis velit eaque, fugiat similique suscipit illum, delectus alias consequatur vel soluta voluptatum praesentium porro consectetur non sequi hic.</p>

                        <h1 className="blog-page__written-content-heading">This is a title</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore qui possimus culpa? Expedita magni earum mollitia voluptas aliquam commodi ea harum ratione, nostrum voluptates fugiat ipsa ducimus asperiores porro repudiandae.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore cum sint corrupti repellendus eaque. Sapiente expedita minima eum quaerat maiores esse, possimus et excepturi minus dolor quidem, est numquam consectetur.</p>
                        
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aut accusantium veritatis velit eaque, fugiat similique suscipit illum, delectus alias consequatur vel soluta voluptatum praesentium porro consectetur non sequi hic.</p>

                        <h1 className="blog-page__written-content-heading">This is a title</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore qui possimus culpa? Expedita magni earum mollitia voluptas aliquam commodi ea harum ratione, nostrum voluptates fugiat ipsa ducimus asperiores porro repudiandae.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore cum sint corrupti repellendus eaque. Sapiente expedita minima eum quaerat maiores esse, possimus et excepturi minus dolor quidem, est numquam consectetur.</p>
                        
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aut accusantium veritatis velit eaque, fugiat similique suscipit illum, delectus alias consequatur vel soluta voluptatum praesentium porro consectetur non sequi hic.</p> */}
                        <div className="quill-text">
                            <SanitizedHTML
                        allowedAttributes={defaults.allowedAttributes}
                        allowedTags={defaults.allowedTags}
                        html={post.HTMLtext}

                        />
                        </div>
                        
                </article>

                <section className="blog-page__bottom-container">

               
                <div className="blog-page__tags-container">
                    <h2 className="blog-page__tags-container--heading">Tags</h2>
                    <div className="blog-page__tags-container__content-container">
                        {post &&
                        
                            post.blogTags.map((item, index) => 
                            
                                <Link to={`/blog/search/${item}`}><p key={index} className="blog-page__tags-container--tags ">#{item}</p></Link>
                            )}
                        
                    </div>
                    <hr></hr>
                </div>

                <div className="blog-page__comments-container">
                    <h2 className="blog-page__comments-container--heading">Comments</h2>
                    <div className="blog-page__comments-container__content-container">
                        {/* <p className="blog-page__comments-container--comments 1">#sometag</p>
                        <p className="blog-page__comments-container--comments 2">#someothertag</p>
                        <p className="blog-page__comments-container--comments 3">#someothercoollookingtag</p>
                        <p className="blog-page__comments-container--comments 4">#poetbutdidntknowit</p> */}

                        <p className="blog-page__comments-container--not-here">This feature is comming soon! <br/> We can't wait to hear your response!</p>
                    </div>
                    <hr/>
                </div>
                    <BlogTagContainer tagName="Trending" trending={true}  />
                </section>

                <div className="mailing-list-component">
                        <MailingList />
                </div>

            </section>
        </main>
        </>
    )
}

export default BlogPage; 