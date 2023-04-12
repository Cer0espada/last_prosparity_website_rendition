import React from 'react';

const Campaign = ({addedClass,heading,text,link, imgSrc}) => {

    return(
        <div className="campaign">
            {!imgSrc && <div className={`campaign__img ${addedClass}`} ></div>}
            {imgSrc && <img src={imgSrc} alt="campaign img" className={`campaign__img ${addedClass}`}/>}
            <div className={`campaign__text ${addedClass}`}>
                <h3 className="campaign__text--header">{heading}</h3>
                <p className="campaign__text--paragraph">{
                text}</p>
                {link && <a href={link} className="campaign__text--link">Click Here!</a>}
            </div>
            
        </div>
    )

};

export default Campaign;