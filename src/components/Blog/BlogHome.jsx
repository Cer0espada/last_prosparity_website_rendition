import React from 'react';
import PostMasonry from './PostMasonry';

import trending from './Mocks/trending';
import featured from './Mocks/featured';
import MasonryPost from './MasonryPost';



const trendingConfig = {
    1: {
        gridArea: '1/2/3/3',
    }
}

const featuredConfig = {
    0: {
        gridArea: "1/1/2/3",
        height: "300px"
    },
    1: {
        height: '300px'

    },
    2: {
        height: "630px",
        marginLrgy: "30px",
        width: "630px",
    }
}

const mergeStyles = (posts, config) => {
    posts.forEach((post, index) => {
        post.style = config[index]
    })
}

mergeStyles(trending, trendingConfig);
mergeStyles(featured, featuredConfig);

const lastFeatured = featured.pop();

const BlogHome = () => {
    return (
        <div className="blog-container">
            <section className="blog-home blog-content-container">
                <div className="row">
                    <h1 className="blog-home__row-featured--heading">Featured Posts</h1>
                    <section className="featured-posts-container">
                        <PostMasonry posts={featured} columns={2} tagsOnTop={true} />
                        <MasonryPost post={lastFeatured} tagsOnTop={true} />
                    </section>
                    <h1 className="blog-home__row-treanding--heading">Trending Posts</h1>
                    <PostMasonry post={trending} columns={3} />
                </div>
            </section>
        </div>
    );
}

export default BlogHome;