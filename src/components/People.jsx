import React from 'react';
import { Helmet } from 'react-helmet';

import Profile from './People/Profile';
import { infoArray } from './People/team.jsx'
import { advisorArray } from './People/advisors';
//photos
import briana from '../img/team/bri.jpg';
import victoria from '../img/team/victoria.jpg';
import ashley from '../img/team/ashley.jpg';
import matt from '../img/team/matt.jpg';
import cori from '../img/team/cori.jpg';
import mark from '../img/advisors/mark.jpg';
import damani from '../img/advisors/damani.jpg';
import logo from '../img/logo/logo-1-dark.png';

const leaderPhotoArray = [briana, victoria, ashley, matt, cori];
const advisorPhotoArray = [mark, damani];

const People = () => {

    return (
        <>
            <Helmet>
                <title>The Prosp(a)riteam | The Prosparity Project</title>
                <meta property="og:title" content="Meet the leaders and advisors of The Prosp(a)rity Project" />
                <meta property="og:image" content={logo} />
                <meta property="og:description" content="Meet and explore the stories and information of the different members of the Prosp(a)riteam!" />
            </Helmet>

            <div className="people-container">

                <div className="people-header__container">
                    <div className="people-header__box">
                        <p className="people-header__box--heading">Meet Our Organization</p>
                        <p className="people-header__box--text">Dedicated to bringing change by defeating disparity</p>
                    </div>
                </div>

                <div className="people-leadership__header">Our Leadership Team</div>

                <div className="people-leadership__grid">
                    {/* <Profile link={"bri"} imgSrc={briana} addedClass="people-leadership__profile"/>  */}
                    {infoArray.map((item, i) => (
                        <Profile
                            key={i}
                            addedClass="people-leadership__profile"
                            imgSrc={leaderPhotoArray[i]}
                            name={item.name}
                            title={item.title}
                            link={item.link}
                            learnMore={item.learnMore}
                        />
                    ))}
                </div>

                <div className="people-advisors__header">Our Advisors</div>
                <div className="people-advisors__grid">
                    {advisorArray.map((item, i) => (
                        <Profile
                            key={i}
                            addedClass="people-advisors__profile"
                            imgSrc={advisorPhotoArray[i]}
                            name={item.name}
                            title={item.title}
                            company={item.company}
                            link={item.link}
                            learnMore={item.learnMore}
                        />
                    ))}
                </div>

                {/* <div className="people-directors__header">Our Directors</div> */}

                {/* <div className="people-directors__grid">
                <Profile addedClass="people-directors__profile"/> 
            </div> */}





            </div>
        </>
    )
}

export default People; 