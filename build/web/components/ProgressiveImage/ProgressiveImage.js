import styles from './ProgressiveImage.module.css'
import React, { useState } from 'react';

const ProgressiveImage = React.forwardRef((props, ref) => {

  const [ loaded, setLoaded ] = useState( false );
  
  return (
    <div className={ props.classPassed } ref={ ref }>
     { loaded ? null :
      <img
        src={ props.image.metadata.lqip }
        className={ styles.lowres }
        width={ '100%' }
        alt={ props.alt ? props.alt : null }
      />
      }
      <img
      onLoad={ () => { setLoaded(true); console.log( loaded ); } }
      src={ props.image.url}
      width={ '100%' }
      alt={ props.alt ? props.alt : null }
      />
    </div>
  )
})

export default ProgressiveImage;
