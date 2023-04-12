import React, {createContext, useState} from 'react';

export const ProsparetteContext = createContext(null);

export const ProsparetteContextProvider = ({children}) => {
    const [idValue, setIdValue] = useState(false);

    return(
    <ProsparetteContext.Provider value={[idValue, setIdValue]}>
    {children}
    </ProsparetteContext.Provider>
)
}

// export const ProsparetteContextProvider = (props) => {
//     const [id, setId] = useState(null);

//     return(
//         <ProsparetteContext.Provider value={{id, setId}}>
//         {props.children}
//         </ProsparetteContext.Provider>
//     )

// }
