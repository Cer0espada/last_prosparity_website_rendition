import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import MainHeader from '../Mobile/MainHeader';
import BlogMods from './components/BlogMods';
import BlogModsLong from './components/BlogModsLong';
import BlogModsMini from './components/BlogModsMini';
import ProsperetteIcon from '../Mobile/Prosperettes/Graphics/ProsperetteIcon';
import logo from '../../img/logo/logo-1-light-cropped.png';
import BlogPostGridNew from './BlogPostGridNew';
import BlogSearchBar from './BlogSearchBar';
import BlogTagContainer from './BlogTagContainer';
import DropDown from '../Header';
import BlackExcellenceSvg from '../Blog/svgs/BlackExcellenceSvg';
import BlogGridDropDown from './context/BlogGridContext'
import { BlogGridContext } from './context/BlogGridContext';
import { db } from '../../firebaseApp';
import { useViewport } from '../Utilities';



const BlogHomePage = () => {
    const [featured, setFeatured] = useState([])
    const [filtered, setFiltered] = useState("All Categories");
    const [sorted, setSorted] = useState('Recent')

    const { width } = useViewport();

    const GetFirstFivePosts = async () => {

        let results = []

        await db.collection('posts')
            .limit(4)
            .orderBy("created_At", "desc")
            .onSnapshot((querySnapshot) => {
                querySnapshot.forEach((doc) => results.push(doc.data()));
                setFeatured(results)
                console.log(results)
            })

        return results
    }


    useEffect(() => {

        GetFirstFivePosts();
    }, [])

    return (
        <BlogGridContext.Provider value={{ sorted, setSorted, filtered, setFiltered }} >
            <main className="blog-home-page-container">
                <MainHeader
                    title="Blog"
                    text="Check out interviews, articles, and news written and curated by us"
                    addedClass="blog-header"
                />

                <BlogSearchBar />

                <section className="blog-home-page__content-container">
                    <section className="blog-home-page__trending">

                        <div className="blog-home-page__trending--heading-container">
                            <p className="blog-home-page__trending--heading">Trending</p>

                            {width > 900 &&
                                <p className="blog-home-page__trending--heading">Topics</p>}
                        </div>
                        <section className="blog-home-page__trending--posts-container">
                            {width < 600 ?
                                featured.map((item, index) =>
                                    <BlogModsMini
                                        key={index}
                                        addedClass={`blog-home-page__trending--posts-container--${index}`}
                                        title={item.title}
                                        author={item.author}
                                        description={item.description}
                                        date={item.date}
                                        category={item.blogCategory}
                                        imgSrc={item.imgPath}
                                        titleLink={item.titleLink}
                                    />
                                )

                                :


                                (featured[0] && (600 > width) && (width <= 900)) ? <BlogModsLong
                                    addedClass="blog-home-page__trending--posts-container--0"

                                    title={featured[0].title}
                                    author={featured[0].author}
                                    authorImg={featured[0].authorImg}
                                    description={featured[0].description}
                                    date={featured[0].formattedDate}
                                    category={featured[0].blogCategory}
                                    imgSrc={featured[0].imgPath}
                                    titleLink={featured[0].titleLink}
                                />


                                    :
                                    (featured[0] && width > 900) && <BlogModsLong
                                        addedClass="blog-home-page__trending--posts-container--0"

                                        title={featured[0].title}
                                        author={featured[0].author}
                                        authorImg={featured[0].authorImg}
                                        description={featured[0].description}
                                        date={featured[0].formattedDate}
                                        category={featured[0].blogCategory}
                                        imgSrc={featured[0].imgPath}
                                        titleLink={featured[0].titleLink}
                                    />
                            }

                            {width >= 600 &&
                                featured.slice(1, 6).map((item, index) =>
                                    <BlogMods
                                        key={index}
                                        addedClass={`blog-home-page__trending--posts-container--${index + 1}`}
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


                            <section className="blog-home-page__topics-and-tags-container">
                                <section className="blog-home-page__topics-container">

                                    {/* dynamically change topics container on widths smaller than 900px, from vertical grid to flex row */}
                                    {width < 900 && <h2 className="blog-home-page__topics--heading">Topics</h2>}


                                    <div className="blog-home-page__topics-container--topics-grid">
                                        {width < 900 ?
                                            <>
                                                <Link to="/blog/topic/happening-now">
                                                    <i className="blog-home-page__topics-container--topics-grid__icon first fas fa-globe-americas happening-now"></i>
                                                    <p className="blog-home-page__topics-container--topics-grid__description first happening-now">Happening Now</p>
                                                </Link>

                                                <Link to="/blog/topic/financial-literacy">
                                                    <i className="blog-home-page__topics-container--topics-grid__icon second financial-literacy fas fa-dollar-sign"></i>
                                                    <p className="blog-home-page__topics-container--topics-grid__description second financial-literacy">Financial Literacy</p>
                                                </Link>

                                                <Link to="/blog/topic/education">
                                                    <i className="blog-home-page__topics-container--topics-grid__icon third fas fa-graduation-cap education"></i>
                                                    <p className="blog-home-page__topics-container--topics-grid__description third education">Education</p>
                                                </Link>

                                                <Link to="/blog/topic/black-female-excellence">
                                                    <BlackExcellenceSvg addedClass="blog-home-page__topics-container--topics-grid__icon fourth black-female-excellence" />
                                                    <p className="blog-home-page__topics-container--topics-grid__description fourth black-female-excellence">Black Female Excellence</p>
                                                </Link>

                                                <Link to="/blog/topic/prosparity">
                                                    <img src={logo} className="blog-home-page__topics-container--topics-grid__icon fifth" />
                                                    <p className="blog-home-page__topics-container--topics-grid__description fifth prosparity">Prosparity</p>
                                                </Link>
                                            </>
                                            :
                                            <>
                                                <Link to="/blog/topic/happening-now">
                                                    <i className="blog-home-page__topics-container--topics-grid__icon first fas fa-globe-americas happening-now"></i>
                                                </Link>
                                                <Link to="/blog/topic/happening-now">
                                                    <p className="blog-home-page__topics-container--topics-grid__description first happening-now">Happening Now</p>
                                                </Link>
                                                <Link to="/blog/topic/financial-literacy">
                                                    <i className="blog-home-page__topics-container--topics-grid__icon second financial-literacy fas fa-dollar-sign"></i>
                                                </Link>
                                                <Link to="/blog/topic/financial-literacy">
                                                    <p className="blog-home-page__topics-container--topics-grid__description second financial-literacy">Financial Literacy</p>
                                                </Link>
                                                <Link to="/blog/topic/education">
                                                    <i className="blog-home-page__topics-container--topics-grid__icon third fas fa-graduation-cap education"></i>
                                                </Link>
                                                <Link to="/blog/topic/education">
                                                    <p className="blog-home-page__topics-container--topics-grid__description third education">Education</p>
                                                </Link>
                                                <Link to="/blog/topic/black-female-excellence">
                                                    <BlackExcellenceSvg addedClass="blog-home-page__topics-container--topics-grid__icon fourth black-female-excellence" />
                                                </Link>
                                                <Link to="/blog/topic/black-female-excellence">
                                                    <p className="blog-home-page__topics-container--topics-grid__description fourth black-female-excellence">Black Female Excellence</p>
                                                </Link>
                                                <Link to="/blog/topic/prosparity">
                                                    <img src={logo} alt="prosparity" className="blog-home-page__topics-container--topics-grid__icon fifth" />
                                                </Link>
                                                <Link to="/blog/topic/prosparity">
                                                    <p className="blog-home-page__topics-container--topics-grid__description fifth prosparity">Prosparity</p>
                                                </Link>
                                            </>
                                        }
                                    </div>
                                </section>

                                <section className="blog-home-page__tags-container">
                                    <h2 className="blog-home-page__tags-container--heading">Tags</h2>

                                    <div className="blog-home-page__tags-container--tags-flex">
                                        <Link to="/blog/search/defeatingdisparity"><p className="blog-home-page_tags-container--tags-flex__tags">#defeatingdisparity</p></Link>
                                        <Link to="/blog/search/financialliteracyfridays"><p className="blog-home-page_tags-container--tags-flex__tags">#financialliteracyfriday</p></Link>
                                        <Link to="/blog/search/postgrad"><p className="blog-home-page_tags-container--tags-flex__tags">#postgrad</p></Link>
                                        <Link to="/blog/search/highereducation"><p className="blog-home-page_tags-container--tags-flex__tags">#highereducation</p></Link>
                                        <Link to="/blog/search/university"><p className="blog-home-page_tags-container--tags-flex__tags">#university</p></Link>
                                        <Link to="/blog/search/enteringtheworkforce"><p className="blog-home-page_tags-container--tags-flex__tags">#enteringtheworkforce</p></Link>
                                        <Link to="/blog/search/disparity"><p className="blog-home-page_tags-container--tags-flex__tags">#disparity</p></Link>
                                        <Link to="/blog/search/health&wellness"><p className="blog-home-page_tags-container--tags-flex__tags">#health&wellness</p></Link>
                                        <Link to="/blog/search/loans"><p className="blog-home-page_tags-container--tags-flex__tags">#loans</p></Link>
                                        <Link to="/blog/search/tuesdaystipoftheday"><p className="blog-home-page_tags-container--tags-flex__tags">#tuesdaystipoftheday</p></Link>
                                        <Link to="/blog/search/studentdebt"><p className="blog-home-page_tags-container--tags-flex__tags">#studentdebt</p></Link>
                                        <Link to="/blog/search/interviews"><p className="blog-home-page_tags-container--tags-flex__tags">#interviews</p></Link>
                                    </div>

                                </section>
                            </section>
                        </section>
                    </section>

                    {/* blog-post-tag-containers  */}

                    <BlogTagContainer addedClass={'blog-home-page__first-tag'} tagName={"financialliteracyfridays"} />
                    <BlogTagContainer addedClass={'blog-home-page__second-tag'} tagName={"defeatingdisparity"} />
                    <BlogTagContainer addedClass={'blog-home-page__third-tag'} tagName={"health&wellness"} />

                    <BlogPostGridNew title="All Posts" />


                </section>
            </main>

        </BlogGridContext.Provider>
    )
}

export default BlogHomePage;