import React from 'react';

const DefualtPersonIcon = ({addedClass, addedIcon}) => {


    return(
        <svg className={addedClass && addedClass} addedIcon={addedIcon && addedIcon} width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.2857 6.01514C16.2857 8.73358 13.9639 11.0151 11 11.0151C8.03606 11.0151 5.71429 8.73358 5.71429 6.01514C5.71429 3.29669 8.03606 1.01514 11 1.01514C13.9639 1.01514 16.2857 3.29669 16.2857 6.01514ZM11 15.2651C12.3429 15.2651 13.623 14.9945 14.7838 14.5151H15.4C18.5358 14.5151 21 16.9326 21 19.8151V21.7651C21 22.4117 20.4363 23.0151 19.6429 23.0151H2.35714C1.56374 23.0151 1 22.4117 1 21.7651V19.8151C1 16.9326 3.46418 14.5151 6.6 14.5151H7.21695C8.38023 14.994 9.65582 15.2651 11 15.2651Z" stroke="#FCBDE8" stroke-width="2" />
        </svg>

    )
}
export default DefualtPersonIcon;