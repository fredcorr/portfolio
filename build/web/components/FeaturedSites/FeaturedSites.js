import styles from './FeaturedSites.module.css';
import React from 'react';

const FeaturedSites = ({ sites, links }) => sites.map( ({ title, description, image }, i ) => (
    <a href={ links[i] } target="_blank" className={ styles.FeaturedSites }>
        <div className={ styles.siteImage }>
            <img src={ image } alt={ title } />
        </div>
        <p>{ title }</p>
        <p>{ description }</p>
    </a>
))

export default FeaturedSites;
