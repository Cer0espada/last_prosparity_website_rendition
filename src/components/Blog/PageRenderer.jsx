import React from 'react';
import { useRouteMatch } from 'react-router-dom';

const generatePage = (page) => {
    const component = () => require(`./pages/${page}`);

    try {
        return React.createElement()
    } catch (err) {
        console.warn(err)
        return React.createElement(() => 404)
    }
}

export default function PageRenderer() {

    const {
        params: { page }
    } = useRouteMatch();

    generatePage(page)

};

