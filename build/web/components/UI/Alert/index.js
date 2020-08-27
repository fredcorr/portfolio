import styles from './alert.module.css';
import React from 'react';

const alert = ({ preview }) => {
    return preview ? 
     (<p className={styles.alert }>
        This is a preview. <a href="/api/exit-preview">Click here</a> to exit preview mode
    </p>)
     : null
}

export default alert;
