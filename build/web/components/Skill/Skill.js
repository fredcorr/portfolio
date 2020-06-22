import styles from './Skill.module.css';
import React from 'react';

const skill = (props) => (
  <React.Fragment>
    <p className={ styles.skillName } >{ props.skillName }</p>
    <div className={ styles.progressBar }>
      <div className={ styles.bar } style={{ width: props.amount }}></div>
    </div>
  </React.Fragment>
)

export default skill;
