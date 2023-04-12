import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import MainHeader from '../Mobile/MainHeader';
import BlogMods from './components/BlogMods';
import BlogModsLong from './components/BlogModsLong';
import BlogSearchBar from './BlogSearchBar';
import BlogTagContainer from './BlogTagContainer';
import MailingList from '../MailingList';
import BlogPostGridNew from './BlogPostGridNew';
import { QueryForCategory } from './components/Controller'
import { toTitleCase } from './utils';
import { BlogGridContext } from './context/BlogGridContext';
import { useViewport } from '../Utilities';
//photos
import logo from '../../img/logo/logo-1-light-cropped.png';
import money from '../../img/posts/money.jpg';
import lights from '../../img/posts/lights.jpg'
import world from '../../img/posts/world.jpg';
import education from '../../img/posts/education.jpg';
import prosparity from '../../img/posts/prosparity.jpg'
import blackExcellence from '../../img/posts/black-female-excellence.jpg'
//svgs
import BlackExcellenceSvg from '../Blog/svgs/BlackExcellenceSvg';
const BlogPostTopicPage = () => {
    let location = useLocation();

    const category = location.pathname.split("/blog/topic/").slice(-1)[0];

    //control for responsive design 
    const { width } = useViewport();


    // console.log(category)
    QueryForCategory(category)

    const ToggleIcon = (category) => {

        switch (category) {
            case "happening-now":
                return <i className="blog-post-topic-page__main-jumbotron--left__svg first fas fa-globe-americas happening-now"></i>
            case "financial-literacy":
                return <i className="blog-post-topic-page__main-jumbotron--left__svg financial-literacy fas fa-dollar-sign"></i>
            case "education":
                return <i className="blog-post-topic-page__main-jumbotron--left__svg fas fa-graduation-cap education"></i>
            case "black-female-excellence":
                return <BlackExcellenceSvg addedClass="blog-post-topic-page__main-jumbotron--left__svg" />
            case "prosparity":
                return <img src={logo} className="blog-post-topic-page__main-jumbotron--left__svg " />

            default:
                return
        }


    }
    const toggleTitle = (category) => {
        switch (category) {
            case "happening-now":
                return "Happening Now"
            case "financial-literacy":
                return "Financial Literacy"
            case "education":
                return "Education"
            case "black-female-excellence":
                return "Black Female Excellence"
            case "prosparity":
                return "Prosp(a)rity"
            default:
                return
        }
    }

    const toggleDescription = (category) => {
        switch (category) {
            case "happening-now":
                return <>&quot;I write for those who do not have a voice because they are so terrified, because we are taught to respect fear more than ourselves. We’ve been taught that silence will save us, but it won’t.&quot; <br /> &mdash; <span>Audre Lorde</span> </>
            case "financial-literacy":
                return <> &quot;I am not satisfied in making money for myself. I endeavor to provide employment for hundreds of the women of my race.&quot; &mdash; <span>Madame C.J. Walker</span></>
            case "education":
                return <>&quot; Some People, unable to go to school, were more educated and more intelligent than college professors&quot; <span>Maya Angelou</span></>
            case "black-female-excellence":
                return <> &quot;Don’t be afraid. Be focused. Be determined. Be hopeful. Be empowered.&quot; <br /> &mdash;<span>Michele Obama</span> </>
            case "prosparity":
                return <> &quot;I am no longer accepting the things I cannot change. I am changing the things I cannot accept.&quot; <br />  &mdash;<span>Angela Davis</span></>
            default:
        }
    }

    const ToggleImg = (category) => {
        switch (category) {
            case "happening-now":
                return <img src={world} className="blog-post-topic-page__main-jumbotron--img" alt="world view" />
            case "financial-literacy":
                return <img src={money} className="blog-post-topic-page__main-jumbotron--img" alt="money" />
            case "education":
                return <img src={education} className="blog-post-topic-page__main-jumbotron--img" alt="learning" />
            case "black-female-excellence":
                return <img src={lights} className="blog-post-topic-page__main-jumbotron--img" alt="women" />
            case "prosparity":
                return <img src={prosparity} className="blog-post-topic-page__main-jumbotron--img" alt="prosparity" />
            default:
                return
        }
    }

    //context
    const [filtered, setFiltered] = useState(`${toggleTitle(category)}`);
    const [sorted, setSorted] = useState('Recent');

    return (
        <>

            <Helmet>
                <title>{`Prosperity for Black Women | ${category}`}</title>
                {/* <meta property="og:title" content={post.title} /> */}
                <meta property="og:image" content={ToggleImg(category)} />
                {/* <meta property="og:description" content={post.description} /> */}
            </Helmet>

            <BlogGridContext.Provider value={{ sorted, setSorted, filtered, setFiltered }} >
                <main className="blog-post-topic-page-container">
                    <MainHeader
                        title="Blog"
                        text="Check out interviews, articles and news written and curated by us"
                        addedClass="blog-header"
                    />
                    <BlogSearchBar
                        backArrow={true}
                    />
                    <section className="blog-post-topic-page__content-container">

                        <section className="blog-post-topic-page__main-jumbotron">

                            <div className="blog-post-topic-page__main-jumbotron--left-container">
                                {/* <BlackExcellenceSvg className="blog-post-topic-page__main-jumbotron--left__svg"/> */}
                                {ToggleIcon(category)}
                                <h1 className="blog-post-topic-page__main-jumbotron--left__heading">{toggleTitle(category)}</h1>
                                <p className="blog-post-topic-page__main-jumbotron--left__description">{toggleDescription(category)}</p>
                            </div>

                            <figure className="blog-post-topic-page__main-jumbotron--img-container">
                                {ToggleImg(category)}
                            </figure>

                        </section>

                        <hr className="blog-post-topic-page__hr blog_hr" />
                        <BlogTagContainer addedClass={'blog-post-topic-page'} tagName={'interviews'} category={category} />
                        <BlogTagContainer addedClass={'blog-post-topic-page'} tagName={'health&wellness'} category={category} />
                        <BlogTagContainer addedClass={'blog-post-topic-page'} tagName={'defeatingdisparity'} category={category} />

                        {(width < 600) && <BlogPostGridNew title="Latest" Topic={true} />}

                        <MailingList />


                    </section>


                </main>
            </BlogGridContext.Provider>
        </>
    )
}

export default BlogPostTopicPage;