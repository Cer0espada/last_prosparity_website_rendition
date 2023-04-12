import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
//photos 
import logo from '../img/logo/scaled/logo-1-dark-cut-800.png';

//
import MainHeader from './Mobile/MainHeader';
import MailingList from './MailingList';
import CircleGraphicsvg from './Mobile/CircleGraphicsvg';


const MobileStory = () => {

  return (
    <>
      <Helmet>
        <title>About The Team | The Prosp(a)rity Project</title>
        <meta property="og:title" content="The Prosp(a)rity Project | About the Team" />
        <meta property="og:image" content={logo} />
        <meta property="og:description" content="The Prosp(a)rity Project is a not for profit organization operating with 501(c)(3) status headquartered in Palo Alto, CA with a presence throughout the U.S." />
      </Helmet>

      <MainHeader
        title="Our Story"
        text="We are a group who wants to drive systemic change with the talents and skills we have."
      />

      <div className="missionStatement">
        <div className="missionStatement__textcontainer">
          <p className="missionStatement__heading">
            The Prosp(a)rity Project was created when our female founders
            faced firsthand with the difficulties of being Black women
            navigating the real world.
          </p>
          <p className="missionStatement__heading">
            Our mission is to dismantle barriers to facilitate prosp(a)rity
            for our community to help them achieve financial freedom and
            thrive in their professional and personal pursuits.
          </p>
        </div>
      </div>

      <div className="whereItStarted">
        <div className="whereItStarted__textcontainer">
          <p className="whereItStarted__heading">
            It started in 2015, 2017 and 2018 when the five of us-Bri, Victoria, Cori, Matt
            and Ashley, respectively-graduated college and entered the
            workforce.
          </p>
          <p className="whereItStarted__heading">
            Collectively, the five of us held over $350,000 in student loans
            upon graduation.
          </p>
        </div>
      </div>

      <div className="challenges">
        <p className="challenges__intro">
          This debt caused many setbacks and challenges that we still face
          today, such as:
        </p>

        <div className="challenges__number-container first">
          <p className="challenges__number--text first">
            Enduring <span>constant livelihood disruption</span> from having
            to reside with relatives and/or roommates due to an inability to
            establish financial independence.
          </p>
        </div>
        <div className="challenges__number-container second">
          <p className="challenges__number--text second">
            Being <span>forced to abandon entrepreneurial pursuits</span> for
            blue and pink collar work to stay current on student loan payments
            and living expenses.
          </p>
        </div>
        <div className="challenges__number-container third">
          <p className="challenges__number--text third">
            Experiencing heightened{" "}
            <span>difficulty in paying off student debt</span> due to being
            overlooked for and rejected from higher paying work opportunities.
          </p>
        </div>
        <div className="challenges__number-container fourth">
          <p className="challenges__number--text fourth">
            And not to mention, repeatedly encountering systemic racism.
          </p>
        </div>

        <CircleGraphicsvg addedClass="challenges__svg first" />
        <CircleGraphicsvg addedClass="challenges__svg second" />
        <CircleGraphicsvg addedClass="challenges__svg third" />
        <CircleGraphicsvg addedClass="challenges__svg fourth" />
      </div>

      <div className="BLM-movement">
        <div className="BLM-movement__content-container">
          <p className="BLM-movement__text">
            The national resurgence of the <span>#BlackLivesMatter</span>{" "}
            movement, along with demands of justice for Breonna Taylor, Ahmaud
            Arbery and George Floyd inspired us to fight for systemic change.
          </p>
          <p className="BLM-movement__text">
            So, in June of 2020, we formed The Prosp(a)rity Project.
          </p>
          <p className="BLM-movement__text">
            And together, we're forging the fight to defeat disparity.
          </p>
          <Link to="/team" className="BLM-movement__link">
            Meet the Team
          </Link>
        </div>
      </div>

      <div className="get-involved-intro">
        <div className="get-involved__content-container">
          <div className="get-involved-intro__involvement-container">
            <p className="get-involved-intro__heading">What can you do?</p>
            <p className="get-involved-intro__text">
              There are a few ways you can support us as we fight these
              issues.{" "}
            </p>

            <div className="get-involved-intro__involvement-sub-container">
              <Link
                className="get-involved-intro__involvement-sub-container--button"
                to="/donations"
              >
                Donate
              </Link>
              or,
              <Link
                className="get-involved-intro__involvement-sub-container--link"
                to="/involvement"
              >
                Join our team
              </Link>
            </div>
          </div>

          <MailingList />
        </div>
      </div>
    </>
  );
};
export default MobileStory;