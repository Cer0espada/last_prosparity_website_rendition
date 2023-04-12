import React from 'react';
import { Link } from 'react-router-dom';

//photos 
import mainLogo from '../img/logo/scaled/logo-1-dark-cut-800.png';
import DonorRelationssvg from './Mobile/Involvement/DonorRelationssvg';
import EmailMarketingsvg from './Mobile/Involvement/EmailMarketsvg';
import Engineeringsvg from './Mobile/Involvement/Engineeringsvg';
import Globesvg from './Mobile/Involvement/Globesvg';
import Scalesvg from './Mobile/Involvement/Scalesvg';
import ShelterInPlacesvg from './Mobile/Involvement/ShelterInPlacesvg';
import Strategysvg from './Mobile/Involvement/Strategysvg';
import MainHeader from './Mobile/MainHeader'
//
import MobileMailingList from './Mobile/MobileMailingList';

const MobileInvolvement = () => {


  return (
    <>
      {/* <div className="involvementHeader">
          <div className="involvementHeader__content-container">
            <img
              src={mainLogo}
              alt="main logo"
              className="involvementHeader__mainlogo"
            />
            <div className="involvementHeader__textcontainer">
              <h1 className="involvementHeader__textcontainer--maintitle">
                Join our team
              </h1>
              <p className="involvementHeader__textcontainer--caption">
                We are open to volunteers, partnerships, and sponsorships who strive to promote prosp(a)rity.
              </p>
            </div>
          </div>
        </div> */}
      <MainHeader
        title="Join our team"
        text="We are open to volunteers, partnerships, and sponsorships who strive to promote prosp(a)rity."
        addedClass="involvementHeader"
      />

      <div className="sharedvalues">
        <div className="sharedvalues__textcontainer">
          <p className="sharedvalues__heading">
            The Prosp(a)rity Project is a rapidly expanding organization and
            we need additional talent to help us more adequately serve our
            community.{" "}
          </p>
          <p className="sharedvalues__seeking">
            We are looking for people who also:
          </p>
          <div className="sharedvalues__list">
            <i class="fas fa-balance-scale icon sharedvalues__list--icon first"></i>
            <p className="sharedvalues__list--text first">
              Strongly value Black women’s advancement
            </p>

            <i class="fas fa-globe icon sharedvalues__list--icon second"></i>
            <p className="sharedvalues__list--text second">
              Thrive in flexible, fully remote work settings
            </p>

            <i class="fas fa-heart icon sharedvalues__list--icon third"></i>

            <p className="sharedvalues__list--text third">
              Are in search of a meaningful, productive use of quarantine
            </p>
          </div>
          <p className="sharedvalues__footer">
            Read more about{" "}
            <Link className="sharedvalues__footer__learnmore" to="/team">
              our team
            </Link>{" "}
            and{" "}
            <Link className="sharedvalues__footer__learnmore" to="/about">
              our mission
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="support">
        <div className="support__textcontainer">
          <p className="support__heading">
            We are open to bringing on new teammates in all capacities, but we
            are looking for support in:
          </p>

          <div className="support__positions">

            <i class="fas fa-chess-queen icon support__positions--icon first"></i>
            <p className="support__positions--text first">Nonprofit strategy</p>


            <i class="fas fa-handshake icon support__positions--icon second"></i>
            <p className=" support__positions--text second">
              Donor relations management
            </p>


            <i class="fas fa-envelope icon support__positions--icon third"></i>
            <p className="support__positions--text third">Email marketing</p>


            <i class="fas fa-laptop icon support__position--icon"></i>
            <p className="support__positions--text">
              Web development/software engineering
            </p>

          </div>
        </div>
      </div>

      <div className="contact-us">
        <div className="contact-us__textcontainer">
          <p className="contact-us__text">
            If you are interested in working or collaborating with us, reach
            out to{" "}
            <span>
              <a href="mailto:theprosparityproject.org">
                info@theprosparityproject.org
              </a>
            </span>
            .
          </p>
        </div>
      </div>

      <MobileMailingList addedClass={"involvement-mailinglist-mobile"} />
    </>
  );
};
export default MobileInvolvement;