import React from 'react';
import classNames from 'classnames';
import styles from './Input.css';

const input = (props) => {

  let inputType = null;

  switch (props.type) {
    case 'textarea':
      inputType = (
        <span className={classNames(styles.dropShadow, styles.heightTextarea, props.class)}>
          <textarea name={props.name} placeholder={props.name} className={styles.textArea} rows={7}/>
        </span>
      )
      break;
    case 'submit':
      inputType =  <input type={props.type}  name={props.name} placeholder={props.name} className={[styles.submit, props.class].join(' ')}/>
      break;
    default:
    inputType = (
      <span className={classNames(styles.dropShadow, styles.heightInput, props.class)}>
        <input type={props.type}  name={props.name} placeholder={props.name} className={styles.input}/>
      </span>
    )
  }

  return inputType

}

export default input;
