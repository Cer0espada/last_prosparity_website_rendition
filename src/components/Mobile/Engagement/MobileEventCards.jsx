import React from 'react';
import { Link } from 'react-router-dom';

import CircleArrow from '../Prosperettes/Graphics/CircleArrow';

const MobileEventCards = ({ addedClass, imgSrc, date, name, link }) => {

  return (
    <div className="mobile-event-cards">
      <div className="mobile-event-cards__img-container">
        <img
          src={imgSrc}
          alt=""
          className="mobile-event-cards__img"
        />
      </div>

      <div className="mobile-event-cards__bottom-container">
        <div className="mobile-event-cards__bottom-container--text-container">
          <h2 className="mobile-event-cards__bottom-container--text-container__date">{date}</h2>
          <p className="mobile-event-cards_bottom-container--text-container__title">{name}</p>
        </div>

        <a
          href={link}
          className={
            addedClass
              ? "mobile-event-cards__svg-container-link"
              : `mobile-event-cards__svg-container-link ${addedClass}`
          }
        >
          <CircleArrow addedClass="mobile-event-cards__svg" />
        </a>
      </div>
    </div>
  );
}

export default MobileEventCards;