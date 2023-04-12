import React from 'react';
import {Link} from 'react-router-dom';

//graphics
import CircleArrow from './Graphics/CircleArrow';
// import christina from '../../../img/prosparettes/christina.jpg';
const MobileProspCards = ({addedClass, name,age, job, link, imgSrc}) => {

    return(
        <div className="mobile-prosp-cards">

            <div className="mobile-prosp-cards__img-container">
                <img src={imgSrc} alt="" className="mobile-prosp-cards__img"/>
            </div>

            <div className="mobile-prosp-cards__bottom-container">
                <div className="mobile-prosp-cards__bottom-container--text-container">
                    <h2 className="mobile-prosp-cards__bottom-container--text-container__heading">{name}</h2>
                    <p className="mobile-prosp-cards_bottom-container--text-container__title">{`${job}`}</p>
                </div>
                
                <Link to={link} className={addedClass ? "mobile-prosp-cards__svg-container-link" : `mobile-prosp-cards__svg-container-link ${addedClass}`}>
                    <CircleArrow addedClass="mobile-prosp-cards__svg"/>
                </Link>
                
            </div>

            
        </div>
    )
}

export default MobileProspCards;