import React from 'react';

const CircleGraphicsvg = ({addedClass, addedId}) => {
    
    return(
        <svg id={addedId&&`${addedId}`} className={addedClass} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12.5" cy="12.5" r="11.5" stroke="#E1A2CD" strokeWidth="2" />
        </svg>
    )
}

export default CircleGraphicsvg; 