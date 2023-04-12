import React from "react";

import { useHistory, useLocation } from "react-router-dom";
import { advisorArray } from "../People/advisors";


//graphics
import LeftArrowWhite from "../Mobile/Prosperettes/Graphics/LeftArrowWhite";

//components
// import MailingList from "../../MailingList";

const AdvisorsPage = () => {
  const history = useHistory();
  let location = useLocation();
  console.log(location.pathname);
  let currentPath = location.pathname
    .split("/advisors/advisor/")
    .slice(-1)[0]
    .split("-")
    .join(" ");

  // let teamName = _.title (currentPath.split('-'))
  console.log(currentPath);

  let obj = advisorArray.find((o) => o.name.toLowerCase() === currentPath);
  console.log(obj);

  return (
    <>
      <div className="main-mobile-header team-page">
        <LeftArrowWhite
          // onClick={() => history.push("/prosperettes")}
          onClicked={() => history.push("/advisors")}
          addedClass="team-page__svg"
        />
        <div className="team-page-header__content-container">

     
        <div className="team-page-header__img-container">
          <img
            src={obj.photo}
            alt="Team Member"
            className="team-page-header__img"
          />
        </div>

        <div className="team-page-header__text-container">
          <h2 className="team-page-header__text-container--heading">
            {obj.name}
          </h2>
          <p className="team-page-header__text-container--title">{obj.title}</p>

          <div className="team-page-header__text-container--icon-container">
            {obj.linkedin && (
              <a href={obj.linkedin}>
                <i className="team-page-header__text-container--icon-container--icons fab fa-linkedin"></i>
              </a>
            )}
            {obj.twitter && (
              <a href={obj.twitter}>
                <i className="team-page-header__text-container--icon-container--icons fab fa-twitter"></i>
              </a>
            )}
            {obj.website && (
              <a href={obj.website}>
                <i className="team-page-header__text-container--icon-container--icons fas fa-external-link-alt"></i>
              </a>
            )}
          </div>
          </div>
        </div>
      </div>
      <div className="team-page-summary">
        <div className="team-page-summary__content-container">
          {obj.summary.split("\n") ? (
            obj.summary.split("\n").map((line, i) => (
              <p key={i} className="team-page-summary__text-container--text">
                {line}
              </p>
            ))
          ) : (
            <p className="team-page-summary__text-container--text">
              {obj.summary}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default AdvisorsPage;
