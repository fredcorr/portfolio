import styles from './FeaturedSites.module.css';
import React from 'react';

const FeaturedSites = ({ sites, links }) => sites.map( ({ title, description, image }, i ) => (
    <a href={ links[i] } target="_blank" className={ styles.FeaturedSites } key={ i }>
        <div className={ styles.siteImage }>
            <img src={ image } alt={ title } />
        </div>
        <div>
            <p>{ title }</p>
            <p>{ description }</p>
        </div>
    </a>
))

export default FeaturedSites;
