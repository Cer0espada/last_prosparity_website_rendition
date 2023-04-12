import React from "react";
import { Link } from "react-router-dom";

//graphics
import CircleArrow from "../Prosperettes/Graphics/CircleArrow";
// import christina from '../../../imgarettes/christina.jpg';
const MobileCards = ({ addedClass, heading, title, link, imgSrc, addedId, external }) => {
  return (
    <div className={`mobile-cards container ${addedClass}`} id={addedId && addedId}>
      <div
        className={
          imgSrc
            ? `mobile-cards__img-container mobile-cards ${addedClass}`
            : `mobile-cards__img-container mobile-cards ${addedClass}__img-container`
        }
      >

        {imgSrc ? (
          <img
            src={imgSrc}
            alt=""
            className={
              addedClass
                ? `mobile-cards__img mobile-cards ${addedClass}__img`
                : `mobile-cards__img`
            }
          />
        ) : (
          <div className={`mobile-cards__img mobile-cards ${addedClass}__img`} ></div>
        )}
      </div>

      <div className={`mobile-cards ${addedClass}__bottom-container mobile-cards__bottom-container`}>
        <div className={`mobile-cards ${addedClass}__bottom-container--text-container mobile-cards__bottom-container--text-container`}>
          <h2 className={`mobile-cards ${addedClass}__bottom-container--text-container__heading mobile-cards__bottom-container--text-container__heading`}>{`${heading}`}</h2>
          <p className={`mobile-cards ${addedClass}_bottom-container--text-container__title mobile-cards__bottom-container--text-container`}>{`${title}`}</p>
        </div>

        {
          external ? (

            <a href={link} className={addedClass
              ? `mobile-cards__svg-container-link mobile-cards${addedClass}__svg-container-link`
              : "mobile-cards__svg-container-link"}>

              <CircleArrow addedClass={`mobile-cards__svg mobile-cards${addedClass}__svg`} />
            </a>

          )
            :

            <Link
              to={link}
              className={
                addedClass
                  ? `mobile-cards__svg-container-link mobile-cards${addedClass}__svg-container-link`
                  : "mobile-cards__svg-container-link"
              }
            >
              <CircleArrow addedClass={`mobile-cards__svg mobile-cards${addedClass}__svg`} />
            </Link>
        }
      </div>
    </div>
  );
};

export default MobileCards;
