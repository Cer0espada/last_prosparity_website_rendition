import React from 'react';



const JumbotronComp = ({addedClass, heading,text,imgArray }) => {
      console.log("images", imgArray)
    return (
        <div className={`jumbotronComp ${addedClass}`}>
            <h1 className={`jumbotronComp__heading ${addedClass}__heading`}>{heading}</h1>
            <p className={`jumbotronComp__text ${addedClass}__text`}>{text}</p>
            {
                imgArray &&
                imgArray.map((item, i) =>{

                    return(<img key={i} className={`jumbotronComp__img--${i} ${addedClass}__img--${i}`} src={item} alt=""/>)
                })

            }
        </div>

    )
};

export default JumbotronComp;
