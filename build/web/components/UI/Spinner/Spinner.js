import styles from './Spinner.css'
import React from 'react';

const spinner = (props) => (
  <div className={ styles.spinnerContainer }>
    <div className={ styles.spinner }>
      <span className={[ styles.load , styles.one ].join(' ')}></span>
      <span className={[ styles.load , styles.two ].join(' ')}></span>
      <span className={ styles.loadCenter }></span>
    </div>
  </div>
);

export default spinner;
