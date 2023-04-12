import React from 'react';

//import {ProsparetteContext} from './context';

import ProspSquare from './ProspSquare';

import prosparetteArray from './data';

const Gallery = () => {
    // const [idValue, setIdValue] = useContext(ProsparetteContext);

    return (
        <div className="gallery">
            {
                prosparetteArray.map((item, i) => {


                    return (
                        <ProspSquare
                            key={item._id}
                            imgSrc={item.imgSrc}
                            text={item.name}
                            toggle={false}
                            quote={item.quote}
                        />
                    )
                }
                )
            }
        </div>
    )
};
export default Gallery;
