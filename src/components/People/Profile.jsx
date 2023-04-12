import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CircleArrow from './CircleArrow'

import { analytics } from '../../firebaseApp';

const Profile = ({ addedClass, imgSrc, link, name, title, company }) => {

    useEffect(() => {
        const sendEventInfo = async () => {
            analytics.logEvent('peoplepage__clicked')
        }
        sendEventInfo();
    }, [])
    return (

        <div className={`profile__main-container ${addedClass}`}>
            <Link to={`/people/${link}`} className="profile__main-container--image-container">
                <div className="profile__main-container--image-container__overlay"></div>
                <img src={imgSrc} alt="" className="profile__main-container--image-container__image" />
                <CircleArrow addedClass={"profile__main-container--image-container__svg"} />
            </Link>

            <div className="profile__text-container">
                <p className="profile__text-container--name">{name}</p>
                <p className="profile__text-container--title">{title}</p>
                {(company) && <p className="profile__text-container--company">{company}</p>}

            </div>

        </div>
    )

}

export default Profile;