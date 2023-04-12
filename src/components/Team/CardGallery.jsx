import React from 'react';
import Card from './Card';
import { infoArray } from './team';

import ashley from '../../img/team/ashley.jpg';
import bri from '../../img/team/bri.jpg';
import victoria from '../../img/team/victoria.jpg';
import matt from '../../img/team/scaled/matt.jpg'
import cori from '../../img/team/cori.jpg';

const imgArray = [bri, victoria, ashley, matt, cori];

const CardGallery = () => {

    return (
        <div className="cardGallery">
            {
                infoArray.map((item, i) => {
                    return (
                        <Card
                            key={i}
                            imgSrc={imgArray[i]}
                            name={item.front.name}
                            position={item.front.title}
                            quote={item.front.quote}
                            text={item.back.summary}

                        />
                    )

                })
            }
        </div>

    )

}

export default CardGallery;