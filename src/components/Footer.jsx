import React from 'react';
// import { Link } from 'react-router-dom'

// import {useViewport} from './Utilities';
const Footer = () => {

  const year = new Date().getFullYear()
  // const {width} = useViewport();

  return (
    <>
      <section className="footer-mobile">
        <div className="footer-mobile__content-container">
          <div className="footer-mobile__social-media">
            <h2 className="footer-mobile__social-media--heading">We're on social media!</h2>
            <div className="footer-mobile__social-media--icon-container">
              <a href="https://instagram.com/theprosparityproject"><i className="footer-mobile__social-media--icon fab fa-instagram" id="icons"></i></a>
              <a href="https://www.facebook.com/theprosparityproject"><i className="footer-mobile__social-media--icon fab fa-facebook" id="icons"></i></a>
              <a href="https://www.linkedin.com/company/the-prosparity-project"><i className="footer-mobile__social-media--icon fab fa-linkedin" id="icons"></i></a>
              <a href="https://twitter.com/prosparityproj"><i className="footer-mobile__social-media--icon fab fa-twitter" id="icons"></i></a>

            </div>

            <div className="footer-mobile__question-container">Have a question? Reach out!</div>
            <a className="footer-mobile__question-container--link" href="mailto:info@theprosparityproject.org">info@theprosparityproject.org</a>
          </div>

          <p className="footer-mobile__legal-text">The Prosp(a)rity Project is a not for profit organization operating with 501(c)(3) status headquartered in Palo Alto, CA with a presence throughout the U.S. Our organization is fiscally sponsored by Players Philanthropy Fund, a 501(c)(3) nonprofit based in Towson, MD.</p>
        </div>

      </section>
    </>
  )
}
export default Footer;
