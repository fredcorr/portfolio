import styles from './SkillSet.module.css';
import React from 'react';

const creativeStep = (props) => (
  <div className={ styles.skillSet }>
      <h3>{ props.title }</h3>
      <p>{ props.copy }</p>
  </div>
)

export default creativeStep;
