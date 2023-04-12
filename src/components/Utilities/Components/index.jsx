import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const DropDown = ({ DropDownArray, title, addedClass, linkAdded, text }) => {
    const dropDownRef = useRef(null);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        const pageClickEvent = (e) => {
            if (dropDownRef.current !== null && !dropDownRef.current.contains(e.target)) {
                setClicked(!clicked);
                // console.log(clicked)
            }
        };

        // If the item is active (ie open) then listen for clicks
        if (clicked) {
            window.addEventListener('click', pageClickEvent);
        }

        return () => {
            window.removeEventListener('click', pageClickEvent);
        }

    }, [clicked]);


    const handleButtonClick = () => {
        setClicked(!clicked)
        // console.log(clicked)
    };


    return (

        //under-construction -- need to fix css
        <div className={`dropdown-menu-container ${addedClass}`}>
            <button onClick={handleButtonClick} className={`dropdown-menu-container__menu-trigger ${addedClass}`}>
                <span>{title}</span>
            </button>
            <nav ref={dropDownRef} className={`dropdown-menu-container__menu-trigger--nav ${addedClass} ${clicked ? 'active' : 'inactive'}`}>
                <p className={`dropdown-menu-container__menu-trigger--nav__text ${addedClass}`}>{text}</p>
                {clicked &&
                    DropDownArray.map((item, i) => {
                        return (

                            (linkAdded) ?

                                <Link onClick={handleButtonClick} key={i} to={item.route} className={`dropdown-menu-container dropdown__item ${addedClass}`}>{item.name}</Link>
                                :
                                <div onClick={handleButtonClick} key={i} className={`dropdown-menu-container dropdown__item ${addedClass}`}>{item.name}</div>

                        )
                    })
                }

            </nav>
        </div>
    )
};