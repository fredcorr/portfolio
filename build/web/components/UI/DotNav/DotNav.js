import styles from './DotNav.module.css'
import React from 'react';

const DotNav = props => {
  return (
    <div className={ styles.dotNav } >
       { props.thumbs.map( ( thumb, i ) => 
         <div
           className={ props.activeDot === i ? styles.active : null }
           onClick={ () => props.setPage([ i, 0 ]), props.setActiveBullet(i) }
           key={ thumb._id }
           id={ i }
           >
         </div> 
        ) }
    </div>
  )
}

export default DotNav;