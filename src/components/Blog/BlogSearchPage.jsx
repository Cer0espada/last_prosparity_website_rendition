import React, { useState, useEffect } from 'react';
import { useLocation, useHistory, Link } from 'react-router-dom';

import BlogSearchBar from './BlogSearchBar';
import BlogTagContainer from './BlogTagContainer';
import BlogPostGridNew from './BlogPostGridNew';
import BlogMods from './components/BlogMods';

import MainHeader from '../Mobile/MainHeader';
import MailingList from '../MailingList';
import { BlogGridContext } from './context/BlogGridContext';
import { db } from '../../firebaseApp';

const BlogSearchPage = () => {
    const [searchedPosts, setSearchedPosts] = useState([]);
    const [filtered, setFiltered] = useState("All Categories");
    const [sorted, setSorted] = useState('Recent');




    let location = useLocation();
    // const history = useHistory()

    const SearchQuery = location.pathname.split("/blog/search/").slice(-1)[0];


    return (
        <BlogGridContext.Provider value={{ sorted, setSorted, filtered, setFiltered, searchedPosts, setSearchedPosts }} >
            <main className="blog-search-page-container">
                <MainHeader
                    title="Blog"
                    text="Check out interviews, articles, and news written and curated by us"
                    addedClass="blog-header"
                />
                <section className="blog-search-page__content-container">
                    <BlogSearchBar />
                    {searchedPosts
                        ?
                        <BlogPostGridNew title={`We found ${searchedPosts.length} results for ${SearchQuery}`} SearchPage={true} SearchedTag={SearchQuery} />
                        :
                        <h2 className="blog-search-page__no-results--heading">Sorry We haven't written anything like that yet.</h2>
                    }

                    <h2 className="blog-search-page__tag-search--heading">Couldn't find what you where looking for?</h2>
                    <h2 className="blog-search-page__tag-search--subheading">Try searching by tag</h2>

                    <section className="blog-search-page__tag-search--grid">
                        <Link to="/blog/search/defeatingdisparity">
                            <p className="blog-search-page__tag-search--grid-item">#defeatingdisparity</p>
                        </Link>
                        <Link to="/blog/search/financialliteracyfridays">
                            <p className="blog-search-page__tag-search--grid-item">#financialliteracyfriday</p>
                        </Link>
                        <Link to="/blog/search/postgrad"><p className="blog-search-page__tag-search--grid-item">#postgrad</p></Link>
                        <Link to="/blog/search/highereducation"><p className="blog-search-page__tag-search--grid-item">#highereducation</p></Link>
                        <Link to="/blog/search/university"><p className="blog-search-page__tag-search--grid-item">#university</p></Link>
                        <Link to="/blog/search/enteringtheworkforce"><p className="blog-search-page__tag-search--grid-item">#enteringtheworkforce</p></Link>
                        <Link to="/blog/search/disparity"><p className="blog-search-page__tag-search--grid-item">#disparity</p></Link>
                        <Link to="/blog/search/health&wellness"><p className="blog-search-page__tag-search--grid-item">#health&wellness</p></Link>
                        <Link to="/blog/search/loans"><p className="blog-search-page__tag-search--grid-item">#loans</p></Link>
                        <Link to="/blog/search/tuesdaystipoftheday"><p className="blog-search-page__tag-search--grid-item">#tuesdaystipoftheday</p></Link>
                        <Link to="/blog/search/studentdebt"><p className="blog-search-page__tag-search--grid-item">#studentdebt</p></Link>
                        <Link to="/blog/search/interviews"><p className="blog-search-page__tag-search--grid-item">#interviews</p></Link>
                    </section>
                    <hr className="blog-hr" />
                    <BlogTagContainer
                        tagName={'Trending'}

                        trending={true} />
                    <MailingList />
                </section>
            </main>
        </BlogGridContext.Provider>
    )
}

export default BlogSearchPage;