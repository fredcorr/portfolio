import styles from './ProgressiveImage.module.css'
import React, { useState } from 'react';

const ProgressiveImage = props => {

  const [ loaded, setLoaded ] = useState( false );
  
  return (
    <>
     { loaded ? null :
      <img
        src={ props.image.metadata.lqip }
        className={ styles.lowres }
        width={ '100%' }
        alt={ props.alt ? props.alt : null }
      />
      }
      <img
      onLoad={ () => { setLoaded(true); } }
      src={ props.image.url}
      width={ '100%' }
      alt={ props.alt ? props.alt : null }
      />
    </>
  )
}

export default ProgressiveImage;
