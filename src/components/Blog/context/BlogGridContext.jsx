import React, { useState, createContext } from 'react';

export const BlogGridContext = createContext(null);

export default ({ children }) => {



    const [filtered, setFiltered] = useState('All Categories')
    const [sorted, setSorted] = useState('Recent')
    const [searchedPosts, setSearchedPosts] = useState([])

    const DropDownContainer = {

        filteredDropDown: [filtered, setFiltered],
        sortedDropDown: [sorted, setSorted],
        searchedPostsContainer: [searchedPosts, setSearchedPosts]
    }

    return <BlogGridContext.Provider value={DropDownContainer}>{children}</BlogGridContext.Provider>
}