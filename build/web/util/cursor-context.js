import React from 'react';

const hoverElements = React.createContext({
    link: [],
    images: [],
    updateElems: function( links, images ) {
        this.link = [...document.querySelectorAll('a')];
    }
});

export default hoverElements;