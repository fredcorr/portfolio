import styles from './FeaturedSite.module.css'
import { MetaScraper } from '_types/local'
import Image from 'next/image'
import React from 'react'

const FeaturedSite = ({ url, title, image, description }: MetaScraper) => (
  <a href={url} target="_blank" className={styles.FeaturedSites} key={title}>
    <div className={styles.siteImage}>
      <img src={image} alt={title} />
    </div>
    <div>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  </a>
)

export default FeaturedSite
