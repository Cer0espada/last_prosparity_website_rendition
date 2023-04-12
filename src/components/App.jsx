import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ScrollToTop from './ScrollToTop';

//components

import Header from './Header';
import FloatNav from './FloatNav';
import Footer from './Footer';
// import Home from './Home';

//react-router-helpers
import PrivateRoute from './Utilities/PrivateRoute';

import Involvement from './Involvement';


import Prosparettes from './Prosperettes';
import ProsperettePage from './Prosperettes/ProsperettePage';
// import Work from './Work';
import Engagement from './Engagement';
import Donations from './DonationPortal';
import Story from './Story';
import Team from './Team';
import TeamPage from './Team/TeamPage';
import People from './People.jsx';
import Modal from './People/Modal';
import LoadingLogo from './LoadingLogo';
import Issue from './Issue';
import EngagementInitiatives from './Engagement/EngagementInitiative';
import Advisors from './Advisors';
import AdvisorsPage from './Advisors/AdvisorsPage';
import BlogHomePage from './Blog/BlogHomePage';
import BlogPage from './Blog/BlogPage';
import BlogPostTopicPage from './Blog/BlogPostTopicPage';
import BlogSearchPage from './Blog/BlogSearchPage';
import SignUp from './Signup';
import BlogCreatorNew from './Blog/BlogCreatorNew';


//context
import { TagContext } from './Blog/context/TagContext';
import { AuthContext, AuthProvider } from './Blog/context/AuthContext';
// import { findAllByDisplayValue } from '@testing-library/react';

// const Header = lazy(() => import('./Header'));
// const FloatNav = lazy(() => import('./FloatNav'));
// const Footer = lazy(() => import('./Footer'));
const Home = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import("./Home")), 1200)
    })
})

const App = () => {
    //updating the tags form
    const [blogTags, setBlogTags] = useState([]);
    const [currentUser, setCurrentUser] = useState("")
    return (
        <div>
            <Router>
                <Suspense fallback={<LoadingLogo />}>
                    <ScrollToTop />
                    <Header />
                    <FloatNav />
                    <div className="container" >

                        <Switch>
                            <Route path="/" exact component={Home}></Route>
                            <Route path="/involvement" exact component={Involvement}></Route>
                            <Route path="/our-story" exact component={Story}></Route>
                            <Route path="/engagement" exact component={Engagement}></Route>
                            <Route path="/donations" exact component={Donations}></Route>
                            <Route path="/prosperettes" exact component={Prosparettes}></Route>
                            <Route path="/team" exact component={Team} ></Route>
                            <Route path="/people" exact component={People} ></Route >
                            <Route path="/people/:id" exact component={Modal}></Route>
                            <Route path="/loading" exact component={LoadingLogo}></Route>
                            <Route path="/prosperettes/prosperette/:id" exact component={ProsperettePage}></Route>
                            <Route path="/engagement/initiatives/:id" exact component={EngagementInitiatives} ></Route>
                            <Route path="/issue" exact component={Issue}></Route>
                            <Route path="/team/team-member/:id" exact component={TeamPage}></Route>
                            <Route path="/advisors" exact component={Advisors}></Route>
                            <Route path="/advisors/advisor/:id" exact component={AdvisorsPage}></Route>
                            <Route path="/blog" exact component={BlogHomePage}></Route>
                            {/* <PrivateRoute path="/blog/creator/new" exact component={BlogCreatorNew}></PrivateRoute> */}
                            <Route path="/sign-up" exact component={SignUp}></Route>
                            <Route path="/blog/:id" exact component={BlogPage}></Route>
                            <Route path="/blog/topic/:id" exact component={BlogPostTopicPage}></Route>
                            <Route path="/blog/search/:id" exact component={BlogSearchPage}></Route>
                            <Route path="/blog/creator/new" exact component={BlogCreatorNew}></Route>
                        </Switch>

                        <Footer />
                    </div>
                </Suspense>
            </Router>

        </div>
    )
}

export default App;
//  