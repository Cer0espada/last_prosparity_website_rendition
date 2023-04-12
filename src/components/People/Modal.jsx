import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { analytics } from '../../firebaseApp';

//utilites 
// import {useViewport} from '../Utilities';

//photos
// import briana from '../../img/team/bri.jpg';
// import victoria from '../../img/team/victoria.jpg';
// import ashley from '../../img/team/ashley.jpg';
// import matt from '../../img/team/matt.jpg';
// import cori from '../../img/team/cori.jpg';
import logo from '../../img/logo/logo-1-light-cropped.png';

// import damani from '../../img/advisors/damani.jpg';
// import mark from '../../img/advisors/mark.jpg';
//information
import { infoArray } from './team';
import { advisorArray } from './advisors';


const Modal = ({ addedClass }) => {

  const history = useHistory();
  let location = useLocation();
  // console.log(location.pathname)
  let chosenProfile = location.pathname.split("/").slice(-1)[0]

  // console.log(chosenProfile);
  const finalArray = infoArray.concat(advisorArray);

  let obj = finalArray.find(o => o.link === chosenProfile);
  // console.log(obj)

  useEffect(() => {
    const fireEvent = async () => {
      analytics.logEvent(`${obj.name}__pageclicked`)
    }
    fireEvent();
  }, [])

  //using this to temporary render a smaller summary text 


  return (
    <div className={`person-section-page-container ${addedClass}`}>

      <div onClick={() => history.push('/people')} className="ui dimmer modals visible active person-modal__background">

        <div
          onClick={e => e.stopPropagation()}
          className="ui standard modal visible active person-modal__content-container"
        >
          <div className="person-modal">

            <div className="person-modal__full-image--container" alt="">
              <img src={obj.photo} alt="" className="person-modal__full-image--image" />
            </div>


            <div className="person-modal__title-container">
              <h2 className="person-modal__title-container--name">{obj.name}</h2>
              <p className="person-modal__title-container--title">{obj.title}</p>
              {obj.company && <p className="person-modal__title-container--company">{obj.company}</p>

              }
              <img className="person-modal__title-container--logo" src={logo} alt="" />
            </div>

            <div className="person-modal__text-container">
              {(obj.summary.split("\n")) ?
                obj.summary.split("\n").map((line, i) => <p key={i} className="person-modal__text-container--text">{line}</p>) :
                <p className="person-modal__text-container--text">{obj.summary}</p>}
              {/* <p className="person-modal__text-container--text">{obj.summary}</p> */}
            </div>

            <div className="person-modal__additional-info">
              <a href={obj.learnMore} className="person-modal__additional-info--button button"
                onClick={async () => analytics.logEvent(`${obj.name}LearnMore__clicked`)}
              >
                <img className="person-modal__additional-info--button__logo" src={logo} alt="" />
                <p className="person-modal__additional-info--button__text">Click here to find out more</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;