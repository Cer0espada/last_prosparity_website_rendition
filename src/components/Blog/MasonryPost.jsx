import React from 'react';
import { Overlay } from 'react-bootstrap';
import { categoryColors } from './styles'

const MasonryPost = ({ post, tagsOnTop }) => {

    const windowWidth = window.innerWidth;
    const imageBackground = (windowWidth > 900) ? { backgroundImage: `url("${require(`../../img/posts/${post.image}`)}")` } : imageBackground

    const style = { ...imageBackground, ...post.style }
    return (
        <a href={post.link} style={style} className="masonry-post overlay">
            <div className="image-text" style={{ justifyContent: tagsOnTop ? 'space-between' : 'flex-end' }}>
                <div className="image-text-subcontainer">
                    <div className="tags-container">
                        {
                            post.categories.map((tag, index) => (
                                <span key={index} className="tag" style={{ backgroundColor: categoryColors[tag] }}>
                                    {tag.toUpperCase()}
                                </span>
                            ))
                        }
                    </div>
                    <h2 className="image-title">{post.title}</h2>
                    <span className="image-date">{post.date}</span>
                </div>
            </div>
        </a>
    )
}

export default MasonryPost;