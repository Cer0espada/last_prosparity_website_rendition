import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { BlogGridContext } from '../context/BlogGridContext';
const DropDown = ({ DropDownArray, title, addedClass, classed, filteredBool, sortedBool }) => {
    const dropDownRef = useRef(null);
    const [clicked, setClicked] = useState(false);

    const { filtered, setFiltered, sorted, setSorted } = useContext(BlogGridContext);
    const [selectedTitle, setSelectedTitle] = useState(title)
    const [selectedClassed, setSelectedClassed] = useState(title)



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
    const handleSelected = ({ name, classed }) => {
        setSelectedTitle(name)
        setSelectedClassed(classed)
        handleButtonClick()
    }

    const handleFilteredVsSorted = (filteredBool, sortedBool, name) => {

        if (filteredBool) setFiltered(name)

        if (sortedBool) setSorted(name)

    }
    return (

        <div className={`blog-dropdown ${addedClass && addedClass}`}>
            <button onClick={() => handleButtonClick()} className="menu-trigger">
                <span className={` blog-dropdown__heading ${selectedClassed ? selectedClassed : ""} `}>{selectedTitle}<i class={`fas fa-chevron-up blog-dropdown__chevron ${clicked ? 'active' : 'inactive'} `}></i></span>
            </button>
            <nav ref={dropDownRef} className={`blog-dropdown-nav ${clicked ? 'active' : 'inactive'}`}>

                <nav className={`blog-dropdown-options-container ${clicked ? 'active' : 'inactive'}`}>
                    {clicked &&
                        DropDownArray.map(({ name, classed }, i) =>


                            // nav &&<Link onClick={handleButtonClick} key={i} to={item.route} className={`item navbar__link dropdown__item`}>{item.name}</Link>
                            <div
                                href="#"
                                key={i}
                                onClick={() => {
                                    handleSelected({ name, classed })
                                    handleFilteredVsSorted(filteredBool, sortedBool, name)
                                }}
                                className={`blog-dropdown-item hover ${addedClass ? addedClass : ""} ${classed ? classed : ''}`}>{name}</div>
                        )
                    }
                </nav>

            </nav>
        </div>
    )
};

export default DropDown;
