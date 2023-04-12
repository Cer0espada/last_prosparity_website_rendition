import React from 'react';

const CircleArrow = ({addedClass}) => {

    return(
        <svg className={`${addedClass}`} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="18.5" stroke="#DB5DB3" strokeWidth="3" />
            <path d="M25.6593 20.3748L19.0762 26.0397C18.6212 26.4312 17.8854 26.4312 17.4352 26.0397L16.3413 25.0983C15.8862 24.7068 15.8862 24.0736 16.3413 23.6862L21.0076 19.6708L16.3413 15.6554C15.8862 15.2639 15.8862 14.6307 16.3413 14.2434L17.4304 13.2937C17.8854 12.9021 18.6212 12.9021 19.0713 13.2937L25.6545 18.9586C26.1144 19.3501 26.1144 19.9832 25.6593 20.3748Z" fill="#DB5DB3" />
        </svg>

    )
}

export default CircleArrow;