import styles from './ImageTextBox.module.css';
import React from 'react';

const imageTextBox = (props) => {
  let direction = props.reverse ? styles.reverse : styles.normal ;
  return (
    <div className={ [ styles.imageTextBox, direction ].join( ' ' ) }>
      <div className={ styles.imageBox }>
        <div className={ styles.image } style={{ backgroundImage: `url(${ props.imgUrl })`} }></div>
        <div  className={ styles.grid }style={{ backgroundImage: `url(../assets/images/tile.png)`} }></div>
      </div>
      <div className={ styles.textBox }>
        <h4 dangerouslySetInnerHTML={{ __html: props.title }}></h4>
        <div></div>
        <p dangerouslySetInnerHTML={{ __html: props.paragraph }}></p>
      </div>
    </div>
  )
}

export default imageTextBox;
