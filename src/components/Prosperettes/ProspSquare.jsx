import React, { useState } from 'react';

//import {ProsparetteContext} from './context';

const ProspSquare = ({ _id, imgSrc, text, quote, toggle }) => {
    //context
    // const [idValue, setIdValue] = useContext(ProsparetteContext);

    //local state
    const [toggleClass] = useState(false);

    // const handleImgClick = (_id) => {
    //     setIdValue(_id);

    //     setToggleClass(prevState => !prevState);

    // }

    // if (toggle) setToggleClass(false)

    return (
        <div className="prospSquare prospSquare__main">
            <div className="prospSquare prospSquare__imgContainer">
                <img src={imgSrc} alt="prospSquare prospSquare__img"
                    className={toggleClass ? `prospSquare prospSquare__img active` : `prospSquare prospSquare__img`}
                />
            </div>

            <div className="prospSquare prospSquare__textContainer">
                <p className="prospSquare prospSquare__text">{text}</p>
                <p className="prospSquare prospSquare__quote"> &quot;{quote}&quot;</p>
            </div>
        </div>
    )

};
export default ProspSquare;
