import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logo from '../img/logo/logo-1-light-cropped.png';

// import {useDetectOutsideClick} from './Header/Utils'
// import Login from './Login';

const Logo = () => {
    return (
        <div className="navbar__logo--container">
            <img src={logo} alt="logo" className="navbar__logo--img" />
            <h2 className="navbar__logo--title">The Prosp<span>(a)</span>rity Project</h2>
        </div>
    )
};

const DropDown = ({ DropDownArray, title, addedClass }) => {
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

    // const closedDropDown = document.querySelector('item navbar__link menu-container').addEventListener('click', () =>{
    //     closedDropDown.classList.toggle('active');
    // })

    return (

        <div className={`item navbar__link menu-container ${addedClass && addedClass}`}>
            <button onClick={handleButtonClick} className="menu-trigger">
                <span>{title}</span>
            </button>
            <nav ref={dropDownRef} className={`menu ${clicked ? 'active' : 'inactive'}`}>

                {clicked &&
                    DropDownArray.map((item, i) => {
                        return (

                            <Link onClick={handleButtonClick} key={i} to={item.route} className={`item navbar__link dropdown__item`}>{item.name}</Link>
                        )
                    })
                }

            </nav>
        </div>
    )
};



const Header = () => {

    const aboutArray = [
        { value: "Our Story", route: "/our-story", name: "Our Story" },
        { value: "Team", route: "/team", name: "Team" },
        { value: "Advisors", route: "/advisors", name: "Advisors" }
    ];

    return (
        <>
            <nav className="navbar">
                <Link to="/" className="item navbar__link navbar__logo">
                    <Logo />
                </Link>
                <Link to="/engagement" className="item navbar__link">Engagement</Link>
                <Link to="/prosperettes" className="item navbar__link">Prosperettes</Link>
                <Link to="/issue" className="item navbar__link">The Issue</Link>
                <Link to="/involvement" className="item navbar__link">Get Involved</Link>
                <Link to="/blog" className="item navbar__link">Blog</Link>
                {/* <Link to="/people" className="item navbar__link">People</Link> */}
                {/* <button type="button" className="button" onClick={() => handleButtonClick()}></button> */}

                <DropDown
                    title="Team"
                    DropDownArray={aboutArray} />

                {/* <Link to="/about" className="item navbar__link">About</Link> */}

                <Link to="/donations" className="item navbar__link--donations">Donate!</Link>

            </nav>
        </>
    )
}

export default Header;
