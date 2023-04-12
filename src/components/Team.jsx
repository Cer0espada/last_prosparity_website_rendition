import React, { useEffect } from "react";
import { analytics } from '../firebaseApp';
import { Link } from "react-router-dom";
import mainLogo from "../img/logo/logo-1-dark.png";

import MobileCards from "./Mobile/Engagement/MobileCards";

import { infoArray } from "./People/team";
import MailingList from "./MailingList";
import MainHeader from './Mobile/MainHeader';
import CardGallery from './Team/CardGallery';

const MobileTeam = () => {
  // const getAge = (dob) => {
  //   let todayDate = new Date().getTime();
  //   let birthDate = new Date(dob).getTime();
  //   let age = Math.round((todayDate - birthDate) / (1000 * 60 * 60 * 24 * 365));

  //   return age;
  // };

  const handleLink = (name) => name.toLowerCase().split(" ").join("-");



  useEffect(() => {

    const teamPage = async () => {
      analytics.logEvent('teampage_visted');
    }
    teamPage();

  }, [])

  return (
    <>
      {/* <div className="main-mobile-header team" id="team">
        <img
          src={mainLogo}
          alt="Prosp(a)rity Project logo"
          className="main-mobile-header__mainlogo"
        />
        <div className="main-mobile-header__textcontainer">
          <h1 className="main-mobile-header__textcontainer--maintitle">
            Our Team
          </h1>

          <p className="main-mobile-header__textcontainer--caption">
            Meet the founding members of The Prosp(a)rity Project.
          </p>
        </div>
      </div> */}

      <MainHeader
        title="Our Team"
        text="Meet the founding members of The Prosp(a)rity Project."
      />

      <div className="mobile-team-container">
        {infoArray.map((item, i) => (
          <MobileCards
            key={i}
            addedClass="team-cards"
            imgSrc={item.photo}
            heading={item.name}
            title={item.title}
            link={`/team/team-member/${handleLink(item.name)}`}
          />
        ))}
      </div>

      <div className="make-a-difference">
        <div className="make-a-difference__content-container">
          <p className="make-a-difference__text">
            Are you interested in making a difference? <br />{" "}
            <Link to="/involvement">
              <span>Join our team ></span>
            </Link>
          </p>
        </div>
      </div>

      <div className="mobile-mailinglist-container-team">
        <MailingList addedClass="mobile-team" />
      </div>
    </>
  );
};

export default MobileTeam;
