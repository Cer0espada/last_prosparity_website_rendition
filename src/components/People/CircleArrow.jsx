import React from 'react';

const CircleArrow = ({ addedClass }) => {

  return (
    <svg className={addedClass} width="59" height="60" viewBox="0 0 59 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d)">
        <ellipse cx="29.5" cy="26" rx="25.5" ry="26" fill="#F5F5F5" />
      </g>
      <path d="M38.3536 26.3536C38.5488 26.1583 38.5488 25.8417 38.3536 25.6464L35.1716 22.4645C34.9763 22.2692 34.6597 22.2692 34.4645 22.4645C34.2692 22.6597 34.2692 22.9763 34.4645 23.1716L37.2929 26L34.4645 28.8284C34.2692 29.0237 34.2692 29.3403 34.4645 29.5355C34.6597 29.7308 34.9763 29.7308 35.1716 29.5355L38.3536 26.3536ZM20 26.5H38V25.5H20V26.5Z" fill="#DB3DB5" />
      <defs>
        <filter id="filter0_d" x="0" y="0" width="59" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>


  )
}

export default CircleArrow;