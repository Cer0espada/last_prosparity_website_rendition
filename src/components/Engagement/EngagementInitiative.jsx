import React from 'react';

import initiativesArray from '../Mobile/Engagement/initiatives';

import { useHistory, useLocation} from 'react-router-dom';

import MailingList from '../MailingList'; 

//graphics
import LeftArrowWhite from '../Mobile/Prosperettes/Graphics/LeftArrowWhite';

import eeiLogo from '../../img/logo/EEI-logo.PNG';

const EngagementInitiative = () =>{
    let location = useLocation();
    const history = useHistory();

    //replace when more initiatives are present 
    let icon = true
    let text='something'
    let name="some other thing"
    return (
      <>
        <div className="main-mobile-header work-initiative-header">
          <LeftArrowWhite
            //   onClick={() => history.push("/work")}
              onClicked={() => history.push("/work")}
              addedClass="work-initiative-header__svg"
            />
            <div className="work-initiative-header__content-container">
            

            <div
              className="work-initiative-header__img-container"
              id={icon ? "eei" : null}
            >
              <img
                src={eeiLogo}
                alt="Prosperette Img"
                className="work-initiative-header__img"
              />
              <div className="work-initiative-header__text-container">
                <h2 className="work-initiative-header__text-container--heading">
                  Economic Empowerment Initiative
                </h2>
                <p className="work-initiative-header__text-container--title">
                  Taking America's Black women beyond debt-free.
                </p>
              </div>
              {
                //https://css-tricks.com/simple-social-sharing-links/
              }
              <div className="work-initiative-header__icon-container">
                <a
                  className="icons-initiative"
                  href={`https://www.linkedin.com/shareArticle?
                        mini=true
                        &url=${window.location.href}
                        &title=${name}
                        &source="theprosp%28a%29rityproject.org`}
                >
                  <i className="work-initiative-header__icon-container--icons fab fa-linkedin"></i>
                </a>
                <a
                  className="icons-initiative"
                  href={`https://twitter.com/intent/tweet?
                            url=${window.location.href}
                            &text=${text}
                            &hashtags=${"#defeatingdisparity"}`}
                >
                  <i className="work-initiative-header__icon-container--icons fab fa-twitter"></i>
                </a>
                <a
                  className="icons-initiative"
                  href={`https://www.facebook.com/sharer.php?u=${window.location.href}`}
                >
                  <i className="work-initiative-header__icon-container--icons fab fa-facebook"></i>
                </a>
                <a
                  className="icons-initiative"
                  href={`${window.location.href}`}
                >
                  <i className="work-initiative-header__icon-container--icons fas fa-link"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="work-article-description">
          <div className="work-article-description__content-container">
            {/* {
                //Figure out way to incorporate spans automatically dynamically rendered code 
            obj.summary.split("\n").map((line, i) =>
            
            (<p key={i} className="work-article__text">{line.split("span").splice(2, 0, <span>)
            .map((item,j) => (
                <span key={j}>item</span>
            ))}</p>)
            } */}
            <p className="work-article-description__text">
              On Juneteenth 2020, we launched our signature program, the
              <span> Economic Empowerment Initiative (EEI) </span>, to remedy
              the financial inequalities that have kept Black women at a
              disproportionate socioeconomic disadvantage.
            </p>
            <p className="work-article-description__text">
              Our EEI is designed to level a Prosperette’s financial playing
              field by awarding them total student debt relief.{" "}
            </p>
            <p className="work-article-description__text">
              We connect our Prosperettes with direct access to financial
              coaches who will work with them one-on-one to create a
              personalized plan for building and maintaining generational
              wealth.
            </p>
          </div>
        </div>

        <div className="mobile-mailinglist-work-initiative-container">
          <MailingList addedClass="mailinglist-work-initiative" />
        </div>
      </>
    );
}

export default EngagementInitiative;