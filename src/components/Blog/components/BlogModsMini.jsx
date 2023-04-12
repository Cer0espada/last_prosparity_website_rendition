import React from 'react';
import { Link } from 'react-router-dom';


const BlogModsMini = ({ addedClass, imgSrc, category, title, description, author, date, titleLink, blogCategoryURL }) => {

    const truncate = (desc) => {
        if (desc.length < 56) return desc
        // console.log(desc.length)
        return desc.slice(0, 56) + '...'
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
            case "Prosp(a)rity":
                return "prosparity"
            default:
                return
        }
    }

    return (
        <Link to={`/blog/${titleLink}`} className={(addedClass) ? addedClass : ""}>
            <div className="blog-mods-mini-container">
                <div className="blog-mods-mini__content-container">

                    <figure className="blog-mods-mini__img-container">
                        <img src={imgSrc} alt="" className="blog-mods-mini__img" />
                    </figure>

                    <div className="blog-mods-mini__text-container">
                        <div className="blog-mods-mini__text-container--heading-container">
                            <h2 className={`blog-mods-mini__text-container--heading-container__blog-category ${toggleClass(category)}`}>{category}</h2>
                            <h2 className="blog-mods-mini__text-container--heading-container__blog-heading regular">{truncate(title)}</h2>
                        </div>


                        <p className="blog-mods-mini__text-container--author-info">{`${author} | ${date}`}</p>

                    </div>

                </div>
            </div>
        </Link>
    )

}

export default BlogModsMini;