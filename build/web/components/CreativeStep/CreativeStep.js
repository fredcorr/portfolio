import styles from './CreativeStep.module.css';
import React from 'react';

const creativeStep = (props) => (
  <div className={ styles.CreativeStep }>
    <div className={ styles.textWrapper }>
      <h5><span>{ ( props.index + 1 ) + '. '}</span>{ props.title }</h5>
      <p>{ props.copy }</p>
    </div>
    <div className={ styles.grid }style={{ backgroundImage: `url(../assets/images/tile.png)`} }></div>
  </div>
)

export default creativeStep;
