import React from 'react';

import logo from '../img/logo/logo-1-dark-cut.png';
import logoMed from '../img/logo/scaled/logo-1-dark-cut-800.png';
import logoLarge from '../img/logo/scaled/logo-1-dark-cut-2000.png';
const LoadingLogo = () => {

    return (
        <div className="logo-effect">
            <div className="logo-content-container">
                <div className="logo-image-container">
                    <img src={logo} srcSet={`${logoMed} 600w, ${logoLarge}1500w, ${logo} 2000w `} alt="" className="logo-image" />
                </div>

                <p className="logo-description">Pursuing Prosp(a)rity by defeating disparity</p>
            </div>

        </div>
    )

}

export default LoadingLogo;