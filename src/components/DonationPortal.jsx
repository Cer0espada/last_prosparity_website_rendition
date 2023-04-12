import React from 'react';
import { Helmet } from 'react-helmet';
// import {analytics} from '../firebaseApp';
import Modal from './Modal';

import logo from '../img/logo/logo-1-dark.png';


const Donations = () => {

  return (
    <>
      <Helmet>
        <title>Empower Black Women Excellence and Success, Donate Now! | TPP</title>
        <meta property="og:title" content="Donate to the Prosp(a)rity Project !" />
        <meta property="og:image" content={logo} />
        <meta property="og:description" content="Donate Now to empower black excellence and success, your donations go a long way to advancing the debt relief,financial empowerment, and success black women everywhere" />
      </Helmet>
      <div className="donations__backgroundContainer">

      </div>
      <Modal />
    </>
  )
};

export default Donations;
