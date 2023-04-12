import React,{useState} from 'react';

import {DropDown} from '../../Utilities/Components';
//photos
import christina from '../../../img/prosparettes/christina.jpg';



const MobileProspSquare = () => {

    const [on, toggle] = useState(false);

    const handleClick = () => {
      toggle(!on)
    }

  let lorem = "&quot;Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quomollitia deleniti iure error ab consectetur hic dolores eveniet optio repudiandae consequatur modi quos possimus tempore vitae, cum dignissimos.Officia, ea ?& quot;"

    return (
      <div className="mobile-prospsquare">
        <h2 className="mobile-prospsquare__text-container">
          <p className="mobile-prospsquare__text-container--name">Christina</p>
          <p className="mobile-prospsquare__text-container--title">Student</p>
        </h2>

        <div className="mobile-prospsquare__img-container">
          <img
            src={christina}
            className="mobile-prospsquare__img"
            alt="prosperette"
          />
        </div>

        <div className="mobile-prospsquare__icon-container">
          <i className="mobile-prospsquare__icon-container--icons fab fa-linkedin"></i>
          <i className="mobile-prospsquare__icon-container--icons fab fa-twitter"></i>
          <i className="mobile-prospsquare__icon-container--icons fas fa-external-link-alt"></i>
        </div>

        <div className="mobile-prospsquare__facts-container">
          <p className="mobile-prospsquare__facts-container--age">Age: 24</p>
          <p className="mobile-prospsquare__facts-container--debt">
            Student Debt: $300,000
          </p>
          <p className="mobile-prospsquare__facts-container--degrees">
            Degrees: PhD, BS
          </p>

          <div className="mobile-prospsquare__facts-container--quote-container">
          <p onClick={handleClick} className="mobile-prospsquare__facts-container--quote__drop-down">Read More ^</p>
            {(on)&&
              <p className="mobile-prospsquare__facts-container--quote__quote">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nam labore sint tenetur perspiciatis, nemo accusantium ab consequuntur eveniet blanditiis nostrum libero sed tempora qui consequatur ipsum! Quibusdam, sint non?</p>
            }
          </div>

          
          

            
          
  
        </div>
      </div>
    );
}

export default MobileProspSquare;


{/* <div className="item navbar__link menu-container">
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
</div> */}