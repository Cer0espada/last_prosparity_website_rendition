import React from 'react';

//utilities
import {useViewport} from '../Utilities/';

//photos 
import mainLogo from '../../img/logo/scaled/logo-1-dark-cut-600.png';

const MainHeader = ({addedClass, title, text}) => {
    const {width} = useViewport(); 

    return(
        
        <div className={`main-mobile-header ${addedClass&&addedClass}`} id={addedClass}>
          {(width < 600) && <img
            src={mainLogo}
            alt="main logo"
            className="main-mobile-header__mainlogo"
          />}

          <div className={`main-mobile-header__content-container ${addedClass&&addedClass}`}>

        
          <div className={`main-mobile-header__textcontainer ${addedClass&&addedClass}`}>
            <h1 className={`main-mobile-header__textcontainer--maintitle ${addedClass&&addedClass}`}>
              {title}
            </h1>

            <p className={`main-mobile-header__textcontainer--caption ${addedClass&&addedClass}`}>
              {text}
            </p>
          </div>
        </div>
        </div>
    )
}

export default MainHeader;