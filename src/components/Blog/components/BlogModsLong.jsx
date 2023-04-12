import React from 'react';
import { Link } from 'react-router-dom';
import lights from '../../../img/posts/lights.jpg'
import ashley from '../../../img/prosparettes/ashley.jpg';

const BlogModsLong = ({ addedClass, imgSrc, category, title, description, author, authorImg, date, titleLink }) => {

    const truncate = (desc) => {
        if (desc.length < 56) return desc
        // console.log(desc.length)
        return `${desc.slice(0, 56)}...`
    }

    const toggleClass = (category) => {
        switch (category) {
            case "Happening Now":
                return "happening-now"
            case "Financial Literacy":
                return "financial-literacy"
            case "Education":
                return "education"
            case "Black Female Excellence":
                return "black-female-excellence"
            case "Prosparity":
                return "prosparity"
            default:
                return
        }
    }

    return (
        <Link to={`/blog/${titleLink}`} className={`blog-mods-long-container ${addedClass && addedClass}`}>
            <div className="blog-mods-long__content-container">
                <figure className="blog-mods-long__img-container">
                    <img src={imgSrc} className="blog-mods-long__img" />
                </figure>

                <div className="blog-mods-long__right-container">
                    <h2 className={`blog-mods-long__category--heading ${toggleClass(category)}`}>{category}</h2>


                    <h1 className="blog-mods-long__main-heading">{truncate(title)}</h1>
                    <p className="blog-mods-long__subheading">{description}</p>

                    <div className="blog-mods-long__author-container">

                        <div className="blog-mods-long__author-container--img-container">
                            <img src={authorImg} alt="" className="blog-mods-long__author-container--img" />
                        </div>

                        <p className="blog-mods-long__author-container--caption"> {author} <br />{date}</p>
                    </div>
                </div>

            </div>
        </Link>
    )
}

export default BlogModsLong;