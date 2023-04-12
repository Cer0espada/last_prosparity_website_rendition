import React, { useState, createContext } from 'react';

export const TagContext = createContext(null);

export default ({ children }) => {

    const [blogTags, setBlogTags] = useState(["defeatingdisparity",
        "financialliteracy",
        "postgrad",
        "university",
        "enteringtheworkforce",
        "disparity",
        "health",
        "loans",
        "tuesdaytipoftheday",
        "wellness",
        "studentdebt",
        "interviews"])

    const blogTagsContainer = {
        blogTags: [blogTags, setBlogTags]
    }

    return <TagContext.Provider value={blogTagsContainer}>{children}</TagContext.Provider>
}