import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { analytics } from '../firebaseApp';
import { Helmet } from 'react-helmet';
//photos 
import logo from '../img/logo/logo-1-light-cropped.png';
import Croppedimgsvg from './Mobile/Croppedimgsvg';
import CircleGraphicsvg from './Mobile/CircleGraphicsvg';
import paloma from '../img/prosparettes/paloma.jpeg'


//other compoents
import MailingList from './MailingList';
import { useViewport } from './Utilities';


const Home = () => {

  const { width, height } = useViewport();

  const viewerScreenSize = async () => analytics.logEvent("screen_size", {
    width: `${width}`,
    height: `${height}`
  })

  const accessHomePage = async () => {
    analytics.logEvent("homepage_visited");
  }

  useEffect(() => {
    viewerScreenSize();
    accessHomePage();
  }, [])


  return (
    <>
      <Helmet>
        <title>Prosperity for Black Women | The Prosp(a)rity Project</title>
        <meta property="og:title" content="Prosperity for Black Women | The Prosp(a)rity Project" />
        <meta property="og:image" content={logo} />
        <meta property="og:description" content="The Prosp(a)rity Project is a 501(c)(3) operating not for profit organization dedicated to the financial empowerment and success of Black Women" />
      </Helmet>


      <div className="mainheader">
        <div className="mainheader__content-container">
          {width < 600 && (
            <img
              src={logo}
              alt="main logo"
              className="mainheader__mainlogo"
            />
          )}
          <div className="mainheader__textcontainer">
            <h1 className="mainheader__textcontainer--maintitle">
              <span>
                The Prosp(<span>A</span>)rity Project
              </span>
            </h1>

            <p className="mainheader__textcontainer--caption">
              Pursuing prosp(a)rity by defeating disparity.
            </p>
            <p className="mainheader__textcontainer--caption second">
              We’re America’s leading nonprofit dedicated to uplifting &
              advancing Black girls and women with the resources to help them
              thrive in all areas of life.
            </p>

            <Link
              className="mainheader__textcontainer--donationbutton"
              to="/donations"
              onClick={async () =>
                analytics.logEvent("donateHomeButton__clicked")
              }
            >
              Donate!{" "}
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="mainheader__img-container">
          <Croppedimgsvg addedClass="mainheader__img" />
        </div> */}

      <div className="maindefinition">
        <h2 className="maindefinition__heading">Prosp(A)rity</h2>
        <p className="maindefinition__noun">noun</p>
        <ol>
          <li>The hybrid of "prosparity" and "parity"</li>
          <li>
            The state of being equally prosperous, in regards to status or pay
          </li>
        </ol>
      </div>

      {/* <div className="mainheader__img-container">
          <Croppedimgsvg addedClass="mainheader__img" />
        </div> */}

      <div className="mission-breif">
        <div className="mission-breif__content-container">
          <p className="mission-breif__text">
            Our goal is to facilitate prosp(a)rity in our community by
            dismantling the barriers that Black women face, which include
            being:{" "}
            <span>
              the most economically disenfranchised, suppressed &
              underrepresented in business/entrepreneurship & at greatest risk
              of compromised health/wellness.
            </span>
          </p>
          <div className="mission-breif__text">

          </div>

          <Link
            to="/work"
            className="mission-breif__learnmore"
            onClick={async () =>
              analytics.logEvent("workHomeButton__clicked")
            }
          >
            Learn More About Us &rArr;
          </Link>
        </div>
      </div>

      <div className="mobile-numbers">
        <p className="mobile-numbers__intro">
          A closer look at the financial disparities:
        </p>

        <div className="mobile-numbers__number-container first">
          <div className="mobile-numbers__number--selected first">
            $35<span>B</span>{" "}
          </div>
          <p className="mobile-numbers__number--text first">
            the total amount of student loan debt owed by 1 million Black
            American women
          </p>
        </div>
        <div className="mobile-numbers__number-container second">
          <div className="mobile-numbers__number--selected second">
            62<span>&cent;</span>
          </div>
          <p className="mobile-numbers__number--text second">
            the average amount a Black female makes to every $1 earned by her
            white male peers
          </p>
        </div>

        <div className="mobile-numbers__number-container third">
          <div className="mobile-numbers__number--selected third">
            35<span>%</span>{" "}
          </div>
          <p className="mobile-numbers__number--text third">
            financial literacy rate; the lowest of any demographic
          </p>
        </div>

        <p className="mobile-numbers__side-text first">High Debt</p>
        <p className="mobile-numbers__side-text second">Unequal Pay</p>
        <p className="mobile-numbers__side-text third">Lack of Access</p>

        {/* <p className="mobile-numbers__ending-text">
            <span>Black women have been and stay the most disenfranchised</span>{" "}
            when it comes to student debt.
          </p> */}

        {/* <Link to="/issue" className="mobile-numbers__ending-link">
            Learn more about the inequality
          </Link> */}

        <CircleGraphicsvg addedClass="mobile-numbers__svg first" />
        <CircleGraphicsvg addedClass="mobile-numbers__svg second" />
      </div>

      <div className="economic-empowerment-intro">
        <div className="economic-empowerment-intro__content-container">
          <p className="economic-empowerment-intro__text">
            On Juneteenth 2020, we launched{" "}
            <span> The Economic Empowerment Intiative (EEI)</span> to remove
            the financial inequalities that Black women face.
          </p>
          <p className="economic-empowerment-intro__quote">
            &quot;“My entire life, I grew up believing [taking out student
            loans] was just how the world worked [so] every semester of
            college, I had to take out loans to help pay for tuition. It
            wasn't until sophomore year that I realized that what I was
            experiencing and what my family experienced wasn't what was
            ‘normal’. &quot;
          </p>

          <div className="economic-empowerment-intro__img-container">
            <p className="economic-empowerment-intro__img--caption">
              {" "}
              Paloma Rodney, <br /> EEI Prosperette
            </p>
            <img
              src={paloma}
              alt="paloma prosperette"
              className="economic-empowerment-intro__img"
            />
          </div>

          <Link
            to="/prosperettes"
            className="economic-empowerment-intro__link"
          >
            Meet our Prosperettes
          </Link>
        </div>
      </div>

      <div className="get-involved-intro">
        <div className="get-involved__content-container">
          <div className="get-involved-intro__involvement-container">
            <p className="get-involved-intro__heading">What can you do?</p>
            <p className="get-involved-intro__text">
              There are a few ways you can support us in our fight to
              #defeatdisparity{" "}
            </p>

            <div className="get-involved-intro__involvement-sub-container">
              <Link
                className="get-involved-intro__involvement-sub-container--button"
                to="/donations"
                onClick={async () =>
                  analytics.logEvent("donateHomeButton__clicked")
                }
              >
                Donate
              </Link>
              or,
              <Link
                className="get-involved-intro__involvement-sub-container--link"
                to="/involvement"
                onClick={async () =>
                  analytics.logEvent("joinTeamButton__clicked")
                }
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
export default Home;