import React from "react";
import { analytics } from "../firebaseApp";
import { Link } from "react-router-dom";
import mainLogo from "../img/logo/logo-1-dark.png";

import MobileCards from "./Mobile/Engagement/MobileCards";

import { advisorArray } from "./People/advisors";
import MailingList from "./MailingList";
import MainHeader from './Mobile/MainHeader';

const MobileAdvisors = () => {
  const getAge = (dob) => {
    let todayDate = new Date().getTime();
    let birthDate = new Date(dob).getTime();
    let age = Math.round((todayDate - birthDate) / (1000 * 60 * 60 * 24 * 365));

    return age;
  };

  const handleLink = (name) => name.toLowerCase().split(" ").join("-");

  return (
    <>
      <MainHeader
        title="Our Advisors"
        text="Meet the advisors of The Prosp(a)rity Project."
      />

      <div className="mobile-team-container">
        {advisorArray.map((item, i) => (
          <MobileCards
            key={i}
            addedClass="team-cards"
            imgSrc={item.photo}
            heading={item.name}
            title={item.title}
            link={`/advisors/advisor/${handleLink(item.name)}`}
          />
        ))}
      </div>

      <div className="make-a-difference">
        <div className="make-a-difference__content-container">
          <p className="make-a-difference__text">
            Are you interested in becoming an advisor?<br />{" "}
            <a href="mailto:info@theprosparityproject.org">
              <span>Become an Advisor!</span>
            </a>
          </p>
        </div>
      </div>

      <div className="mobile-mailinglist-container-team">
        <MailingList addedClass="mobile-team" />
      </div>
    </>
  );
};

export default MobileAdvisors;
