import React from 'react';
import { Link } from 'react-router-dom';
import lights from '../../../img/posts/lights.jpg'
import ashley from '../../../img/prosparettes/ashley.jpg';

const BlogMods = ({ addedClass, imgSrc, category, title, description, author, authorImg, date, titleLink }) => {

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
        <Link to={`/blog/${titleLink}`} className={`blog-mods-container ${addedClass && addedClass}`}>
            <div className="blog-mods__content-container">
                <figure className="blog-mods__img-container">
                    <img src={imgSrc} className="blog-mods__img" />
                    <div className="blog-mods__fig-caption-container-first">
                        <div className="blog-mods__fig-caption-container-second">
                            <figcaption className={`blog-mods__fig-caption ${toggleClass(category)}`}>{category}</figcaption>
                        </div>
                    </div>


                </figure>
                <div className="blog-mods__bottom-container">

                    <h1 className="blog-mods__main-heading">{truncate(title)}</h1>
                    <p className="blog-mods__subheading">{truncate(description)}</p>

                    <div className="blog-mods__author-container">

                        <div className="blog-mods__author-container--img-container">
                            <img src={authorImg} alt="" className="blog-mods__author-container--img" />
                        </div>

                        <p className="blog-mods__author-container--caption"> {author} <br />{date}</p>
                    </div>

                </div>
            </div>
        </Link>
    )
}

export default BlogMods;