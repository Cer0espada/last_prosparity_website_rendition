import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { analytics } from '../firebaseApp'
import prosperetteLogo from '../img/logo/prosperettes-logo.png'
import { Link } from 'react-router-dom';

import mainLogo from '../img/logo/logo-1-dark.png';

//components
import MobileProspCards from './Mobile/Prosperettes/MobileProspCards';
import MainHeader from './Mobile/MainHeader';
import prosparetteArray from './Prosperettes/data';



const Prosperettes = () => {
  useEffect(() => {

    const prosperettePage = async () => {
      analytics.logEvent('prosperettepage_visited')
    }
    prosperettePage();
  }, [])
  const getAge = (dob) => {
    let todayDate = new Date().getTime();
    let birthDate = new Date(dob).getTime();
    let age = Math.round((todayDate - birthDate) / (1000 * 60 * 60 * 24 * 365))

    return age;
  }

  const handleLink = (name) => name.toLowerCase().split(' ').join('-');

  return (
    <>

      <Helmet>
        <title>Meet the Prosperettes | The Prosp(a)rity Project</title>
        <meta property="og:title" content="Meet the Prosperettes |The Prosp(a)rity Project" />
        <meta property="og:image" content={prosperetteLogo} />
        <meta property="og:description" content="The Prosperettes are our prospective awardees, Our Terrific 22, A Group of Women dedicated to making a difference in their community by starting black owned business and organizations while at the same time encouraging financial literacy in their communities " />
      </Helmet>
      {/* <div className="main-mobile-header prosperettes" id="prosperettes">
                <img
                    src={mainLogo}
                    alt="prosperette logo"
                    className="main-mobile-header__mainlogo"
                />
                <div className="main-mobile-header__textcontainer">
                    <h1 className="main-mobile-header__textcontainer--maintitle">
                    The Prosperettes
                    </h1>

                    <p className="main-mobile-header__textcontainer--caption">
                        Meet the 22 outstanding women in the 2020 EEI cohort!
                    </p>

                    
                </div>
            </div> */}
      <MainHeader
        title="The Prosperettes"
        text="Meet the 22 outstanding women in the 2020 EEI cohort!"
        addedClass="prosperettes"
      />

      <div className="mobile-prospsquare-container">
        {prosparetteArray.map((item, i) => (
          <MobileProspCards
            key={i}
            imgSrc={item.imgSrc}
            name={item.name}
            job={item.job}
            // age={getAge(item.age)}
            link={`/prosperettes/prosperette/${handleLink(item.name)}`}
          />
        ))}
      </div>
    </>
  );
};

export default Prosperettes;