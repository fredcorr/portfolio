import React from 'react';
import styles from './Backdrop.css'

const backdrop = (props) => (
    props.show ? <div className={[ props.classPassed, styles.Backdrop ].join(' ')} onClick={ props.clicked } ></div> : null
)

export default backdrop;
