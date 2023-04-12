import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import mainLogo from '../img/logo/logo-1-dark.png';
import CircleGraphicsvg from './Mobile/CircleGraphicsvg';
import { analytics } from '../firebaseApp';

import MailingList from './MailingList';
import { useViewport } from './Utilities/index';
//photos 
import adaobi from '../img/prosparettes/adaobi.jpg';
import joana from '../img/prosparettes/joana.jpg';
const MobileIssue = () => {

  useEffect(() => {

    const issuePageClick = async () => analytics.logEvent('issuepage__clicked')

    issuePageClick();
  }, [])
  const { width } = useViewport();

  return (
    <>
      <div className="main-mobile-header issue" id="issue">
        {width < 600 && (
          <img
            src={mainLogo}
            alt="prosperette logo"
            className="main-mobile-header__mainlogo"
          />
        )}

        <div className="main-mobile-header__content-container issue">
          <div className="main-mobile-header__textcontainer issue">
            <h1 className="main-mobile-header__textcontainer--maintitle issue">
              The Issue
            </h1>

            <p className="main-mobile-header__textcontainer--caption issue">
              As a result of being the most institutionally educated
              demographic, Black women are saddled with an overwhelming $35B
              in collective student debt. This, coupled with their average
              financial literacy rate of 35%, places them at the sharpest
              socioeconomic disadvantage and diminishes their ability to build
              generational wealth.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="mobile-numbers issue">
          <p className="mobile-numbers__intro issue">We'll do the math</p>

          <div className="mobile-numbers__number-container first issue">
            <div className="mobile-numbers__number--selected first issue">
              35<span>%</span>{" "}
            </div>
            <p className="mobile-numbers__number--text first issue">
              Black women’s average financial literacy rate
            </p>
          </div>
          <div className="mobile-numbers__number-container second issue">
            <div className="mobile-numbers__number--selected second issue">
              $35<span>B</span>
            </div>
            <p className="mobile-numbers__number--text second issue">
              their portion owed of the overarching $1.6T U.S. student debt crisis
            </p>
          </div>

          <p className="mobile-numbers__side-text first issue">Translates to</p>
          <p className="mobile-numbers__side-text second issue ">Meaning</p>

          <p className="mobile-numbers__ending-text issue">
            <span>Black women</span> are the <span> most economically disenfranchised </span>
            population.
          </p>

          <CircleGraphicsvg addedClass="mobile-numbers__svg first-issue issue" />
          <CircleGraphicsvg addedClass="mobile-numbers__svg second-issue issue" />
        </div> */}

      <div className="thinking-afrain">
        <div className="thinking-afrain__content-container">
          <p className="thinking-afrain__text-intro">
            You may be thinking... <br />
            <span> “but we all have debt...”</span>
          </p>
          <div className="thinking-afrain__text-main">
            {" "}
            And while this issue does impact more than just Black women,{" "}
            <span> they suffer disproportionately </span> due to long-standing
            systemic inequity.
          </div>
        </div>
      </div>

      {/* <div className="issue-student-debt-intro">
          <div className="issue-student-debt-intro__content-container">
            <p className="issue-student-debt-intro__quote">
              &quot;Student debt represents a literal and symbolic stop sign on
              the fight for economic liberation. It prevents Black women from
              maximizing their potential to acrue wealth within their lifetimes
              and for the generations that come after.&quot;
            </p>

            <div className="issue-student-debt-intro__img-container">
              <p className="issue-student-debt-intro__img--caption">
                {" "}
                Adaobi Ikpeze, <br /> EEI Prosperette
              </p>
              <img
                src={adaobi}
                alt="adaobi's quote"
                className="issue-student-debt-intro__img"
              />
            </div>
          </div>
        </div> */}

      <div className="maindefinition-issue">
        <div className="maindefinition-issue__content-container">
          <h2 className="maindefinition-issue__heading">Misogynoir</h2>
          <p className="maindefinition-issue__noun">noun</p>
          <ol>
            <li>the hybrid of misogyny and racism</li>
            <li>dislike or ingrained prejudice against Black women</li>
          </ol>
        </div>
      </div>

      <div className="mobile-numbers issue-bottom">
        <p className="mobile-numbers__intro issue-bottom">
          Quantifying the disproportions:
        </p>

        <div className="mobile-numbers__number-container first issue-bottom">
          <div className="mobile-numbers__number--selected first issue-bottom">
            $33<span>k</span>{" "}
          </div>
          <p className="mobile-numbers__number--text first issue-bottom">
            The average amount of student debt held by Black women
          </p>
        </div>
        <div className="mobile-numbers__number-container second issue-bottom">
          <div className="mobile-numbers__number--selected second issue-bottom">
            111<span>%</span>
          </div>
          <p className="mobile-numbers__number--text second issue-bottom">
            the percentage of income a black woman’s income consumed by
            student loans
          </p>
        </div>

        <div className="mobile-numbers__number-container third issue-bottom">
          <div className="mobile-numbers__number--selected third issue-bottom">
            5<span>x</span>
          </div>
          <p className="mobile-numbers__number--text third issue-bottom">
            The likelihood that Black women will default on their student loan debt
          </p>
        </div>

        <div className="mobile-numbers__number-container fourth issue-bottom">
          <div className="mobile-numbers__number--selected fourth issue-bottom">
            $0-11<span>k</span>
          </div>
          <p className="mobile-numbers__number--text fourth issue-bottom">
            the average lifetime networth of a Black Woman
          </p>
        </div>

        {/* <p className="mobile-numbers__side-text first issue-bottom">causes</p>
          <p className="mobile-numbers__side-text second issue-bottom ">but</p>

          <p className="mobile-numbers__side-text third issue-bottom ">so</p>

          <p className="mobile-numbers__side-text fourth issue-bottom ">
            meaning
          </p> */}

        {/* <p className="mobile-numbers__ending-text issue-bottom">
            <span>Inequalities and economic barriers</span> ear preventing
            Black Women from the financial freedom that others have.
            
          </p> */}

        {/* <Link to="work" className="mobile-numbers__ending-link">
            Learn more about the inequality
          </Link> */}

        <CircleGraphicsvg addedClass="mobile-numbers__svg first-issue-bottom issue-bottom" />
        <CircleGraphicsvg addedClass="mobile-numbers__svg second-issue-bottom issue-bottom" />
      </div>

      <div className="issue economic-empowerment-intro">
        <div className="issue economic-empowerment-intro__content-container">
          <h2 className="issue economic-empowerment-intro__heading">
            Our Fight
          </h2>
          <p className="issue economic-empowerment-intro__text">
            To facilitate prosp(a)rity, we have launched the{" "}
            <span>Economic Empowerment Initiative (EEI)</span> to help Black
            women reach financial freedom.
          </p>
          <p className="issue economic-empowerment-intro__quote">
            &quot;[The EEI] would allow me ... create a better opportunity for
            my family... I am currently not able to afford a home in a better
            neighborhood because of my debt to income ratio which would allow
            me to put my son in a better school district. &quot;
          </p>

          <div className="issue economic-empowerment-intro__img-container">
            <p className="issue economic-empowerment-intro__img--caption">
              {" "}
              Joana Robergeau, <br /> EEI Prosperette
            </p>
            <img
              src={joana}
              alt="joana prosperette"
              className="issue economic-empowerment-intro__img"
            />
          </div>

          <Link
            to="/prosperettes"
            className="issue economic-empowerment-intro__link"
            onClick={async () =>
              analytics.logEvent("prosperetteIssueButton__clicked")
            }
          >
            Meet our Prosperettes
          </Link>
        </div>
      </div>

      <div className="issue get-involved-intro ">
        <div className="issue get-involved__content-container">
          <div className="issue get-involved-intro__involvement-container">
            <p className="issue get-involved-intro__heading">
              What can you do?
            </p>
            <p className="issue get-involved-intro__text">
              There are a few ways you can support us in our fight to
              #defeatdisparity.
            </p>

            <div className="issue get-involved-intro__involvement-sub-container">
              <Link
                className="issue get-involved-intro__involvement-sub-container--button"
                to="/donate"
                onClick={async () =>
                  analytics.logEvent("donateIssueButton__clicked")
                }
              >
                Donate
              </Link>
              or,
              <Link
                className="issue get-involved-intro__involvement-sub-container--link"
                to="/involvement"
                onClick={async () =>
                  analytics.logEvent("involvementIssueButton__clicked")
                }
              >
                Join our team
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-mailinglist-issue-container">
        <MailingList addedClass="issue" />
      </div>
    </>
  );

}
export default MobileIssue;