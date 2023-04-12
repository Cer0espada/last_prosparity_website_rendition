import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import prosparetteArray from './data';

//graphics
import LeftArrowWhite from '../Mobile/Prosperettes/Graphics/LeftArrowWhite';
import DefaultPersonIcon from '../Mobile/Prosperettes/Graphics/DefaultPersonIcon';
import ProsperetteIcon from '../Mobile/Prosperettes/Graphics/ProsperetteIcon';

//components
import MailingList from '../MailingList';
import DefualtPersonIcon from '../Mobile/Prosperettes/Graphics/DefaultPersonIcon';
import { first } from 'lodash';

//anayltics
import { analytics } from '../../firebaseApp';

const ProsperettePage = () => {
  const history = useHistory();
  let location = useLocation();
  // console.log(location.pathname)
  let prosperetteName = location.pathname.split("/prosperettes/prosperette/").slice(-1)[0].split("-").join(" ");

  // let namedProsparette = _.title (currentPath.split('-')) 
  //  console.log(prosperetteName);

  let obj = prosparetteArray.find(o => o.name.toLowerCase() === prosperetteName);
  // console.log(obj)

  const getAge = (dob) => {
    let todayDate = new Date().getTime();
    let birthDate = new Date(dob).getTime();
    let age = Math.round((todayDate - birthDate) / (1000 * 60 * 60 * 24 * 365))

    return age;
  }

  const getNum = (num) => {

    let actualNum = parseInt(num.replace(',', "").split('$').slice(1)[0]);
    // console.log(actualNum);
    switch (true) {
      case (actualNum < 50000):
        return ['first', '$0', '$50K']
      case (actualNum > 200000 && actualNum < 300000):
        return ['fifth', '$200K', '$300K']
      case (actualNum > 150000 && actualNum < 200000):
        return ['fourth', '$150K', '$200K']
      case (actualNum > 100000 && actualNum < 150000):
        return ['third', '$100K', '$150K']
      case (actualNum > 50000 && actualNum < 100000):
        return ['second', '$50K', '$100K']

      default:
        return ""

    }
  }
  // console.log('debt',obj.debt);

  const [extraClass, lowerNum, upperNum] = getNum(obj.debt);

  // console.log( 'extraClass',extraClass, 'lowerNum', lowerNum,'upperNum', upperNum);
  const firstName = (name) => name.split(" ").slice(0)[0];

  //used a function since useEffect would fail on the not read obj, may not be great for performance
  const logProsperetteEvent = async () => analytics.logEvent(`mobile_${obj.name}__clicked`);
  logProsperetteEvent();

  return (
    <>
      <div className="main-mobile-header prosperette-page">
        <LeftArrowWhite
          // onClick={() => history.push("/prosperettes")}
          onClicked={() => history.push("/prosperettes")}
          addedClass="prosperette-page__svg"
        />

        <div className="prosperette-page-header__content-container">
          <div className="prosperette-page-header__img-container">
            <img
              src={obj.imgSrc}
              alt="Prosperette Img"
              className="prosperette-page-header__img"
            />
          </div>

          <div className="prosperette-page-header__text-container">
            <h2 className="prosperette-page-header__text-container--heading">
              {obj.name}
            </h2>
            <p className="prosperette-page-header__text-container--title">
              {obj.job}
            </p>
          </div>


          <div className="prosperette-page-header__text-container--icon-container">
            {obj.linkedin && <a href={obj.linkedin}><i className="prosperette-page-header__icon-container--icons fab fa-linkedin"></i></a>}
            {obj.twitter && <a href={obj.twitter}><i className="prosperette-page-header__icon-container--icons fab fa-twitter"></i></a>}
            {obj.instagram && <a href={obj.instagram}><i className="prosperette-page-header__icon-container--icons fab fa-instagram"></i></a>}
            {obj.website && <a href={obj.website}><i className="prosperette-page-header__icon-container--icons fas fa-external-link-alt"></i></a>}
          </div>
        </div>
      </div>

      <div className="prosperette-page-facts">
        <div className="prosperette-page-facts__content-container">
          <div className="prosperette-page-facts__about-me-container">
            <p className="prosperette-page-facts__about-me-container--heading">
              About Me
            </p>
            <div className="prosperette-page-facts__about-me-container--grid">
              <i className="prosperette-page-facts__about-me-container--grid__icon fas fa-female"></i>
              <i className="prosperette-page-facts__about-me-container--grid__icon fas fa-graduation-cap"></i>
              <i className="prosperette-page-facts__about-me-container--grid__icon fas fa-map-marker-alt"></i>

              <p className="prosperette-page-facts__about-me-container--grid__text--age">{getAge(obj.age)}</p>
              <p className="prosperette-page-facts__about-me-container--grid__text--degree">{obj.degree}</p>
              <p className="prosperette-page-facts__about-me-container--grid__text--location">{obj.state}</p>
            </div>

          </div>

          <div className="prosperette-page-facts__aspirations-container">
            <h2 className="prosperette-page-facts__aspirations-container--heading">
              {(firstName(obj.name).slice(-1) === "s") ? `${firstName(obj.name)}' Path to Prosp(a)rity` : `${firstName(obj.name)}'s Path to Prosp(a)rity!`}
            </h2>
            <div className="prosperette-page-facts__aspirations-container--text-container">
              <ul>
                {obj.aspirations.map((item, i) => (
                  <li key={i} className="prosperette-page-facts__aspirations-container--text-container__text">{item}</li>

                ))}
              </ul>

            </div>
          </div>
        </div>
      </div>

      <div className="prosperette-page-student-debt">
        <div className="prosperette-page-student-debt__content-container">
          <div className="prosperette-page-student-debt__header">

            <h2 className="prosperette-page-student-debt__header--heading">
              Student Loan Debt
            </h2>

            <div className="prosperette-page-student-debt__avg-student-debt-flex-container">
              <div className="default-person-debt"></div>
              <DefualtPersonIcon />
              <p className="default-person-debt__text">Avg. American <br /> $0-$30k</p>

            </div>
            <div className="prosperette-page-student-debt__prosperette-student-debt-flex-container">
              <div className={`prosperette-individual-debt ${extraClass && extraClass}`}></div>
              <ProsperetteIcon />
              <p className="prospertte-individual-debt__text">{`${firstName(obj.name)}`} <br /> {`${lowerNum}`} &mdash; {`${upperNum}`} </p>
            </div>
            {/* <p className="prosperette-page-student-debt__header--number">
                >{obj.debt}
              </p> */}
          </div>

          <p className="prosperette-page-student-debt__quote">
            &quot;{obj.quote}&quot;
          </p>

          <div className="prosperette-page-student-debt__img-container">
            <p className="prosperette-page-student-debt__img-container--caption">
              {" "}
              {obj.name}, <br /> EEI Prosperette
            </p>
            <img
              src={obj.imgSrc}
              alt="joana prosperette"
              className="prosperette-page-student-debt__img"
            />
          </div>
        </div>
      </div>

      <MailingList addedClass="prosperette-page__mailinglist" />
    </>
  );
}
export default ProsperettePage;