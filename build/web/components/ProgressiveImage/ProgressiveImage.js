import styles from './ProgressiveImage.module.css'
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProgressiveImage = React.forwardRef(( { alt, image, fade } , ref) => {

  const [ loaded, setLoaded ] = useState( false );
  
  return (
    <>
     { loaded ? null :
      <img
        src={ image.metadata.lqip }
        className={ styles.lowres }
        width={ '100%' }
        alt={ alt ? props.alt : null }
      />
      }
      <motion.img
      onLoad={ () => { setLoaded(true); } }
      src={ image.url}
      ref={ ref }
      width={ '100%' }
      alt={ alt ? alt : null }
      style={ fade }
      />
    </>
  )
})

export default ProgressiveImage;
