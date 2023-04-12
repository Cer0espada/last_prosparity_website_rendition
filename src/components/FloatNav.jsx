import React, { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { NONAME } from 'dns';

const FloatNav = () => {
    let location = useLocation();
    let history = useHistory();

    const [itemClicked, setItemClicked] = useState(false)

    const handleClosingNav = () => {

        if (!document.querySelector('.navigation__checkbox').checked) {
            //hides the selected menu items from not being displayed 
            setTimeout(() => {
                document.querySelectorAll('.navigation__item').forEach((item) => {
                    item.style.display = 'none';
                })
            }, 500);


        }


        if (document.querySelector('.navigation__checkbox').checked) {
            document.querySelectorAll('.navigation__item').forEach((item) => {
                item.style.display = 'block';
            })
        }
    }

    useEffect(() => {
        //executes only when the checkbox/ floatNav component exists 
        if (document.querySelector('.navigation__checkbox')) handleClosingNav()


    }, [itemClicked])

    if (location.pathname.match('/donations')
        || location.pathname.match('/people/:')
        || location.pathname.match('/prosperettes/prosperette/')
        || location.pathname.match('/team/team-member/')
        || location.pathname.match('/advisors/advisor/')) {
        return null;
    };


    const onClickClose = () => {
        document.querySelector('.navigation__checkbox').checked = false
        setItemClicked(false)
    }


    const routeArray = [
        { route: '/', name: 'Home' },
        { route: '/engagement', name: 'Engagement' },
        { route: '/issue', name: 'The Issue' },
        { route: '/prosperettes', name: 'prosperettes' },
        { route: '/involvement', name: 'get involved' },
        { route: '/our-story', name: 'Our story' },
        { route: '/team', name: 'team' },
        { route: '/advisors', name: 'advisors' },
        { route: '/blog', name: 'blog' },
        { route: '/donations', name: 'donate', tag: 'donate' }
    ]
    return (
        <div className="navigation">
            <input onClick={() => setItemClicked(!itemClicked)} type="checkbox" className="navigation__checkbox" id="navi-toggle" check="false" />

            <label htmlFor="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>

            <div className="navigation__background">&nbsp;</div>

            <nav className="navigation__nav">
                <ul className="navigation__list">
                    {
                        routeArray.map((item, i) => {
                            return (
                                <li key={i} onClick={() => onClickClose()} className={`navigation__item`}><Link to={item.route} className={`navigation__link ${item.tag ? 'donate' : ''}`}>{item.name}</Link></li>
                            )
                        })
                    }

                </ul>
            </nav>
        </div>
    )
}

export default FloatNav;
