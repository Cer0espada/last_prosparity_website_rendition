import React from 'react';

const EventSquare = (props) => {

    return(
        <div className="eventSquare">
            <div className="main-content__container">
                <h3 className="main-content__container--title">{props.title} </h3>
                <p className="main-content__container--date">{props.date}</p>
                <a href={props.buttonLink} target="_blank" className={`main-content__container--button ${props.addedClass}`}>Learn More</a>
            </div>
        <div className="description__container">
            <p className="description__container--text">{props.text}</p>
        </div>
    </div>
    )

};

export default EventSquare;