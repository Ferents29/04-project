import React from 'react';
import styles from './MyInput.module.css';

const MyInput = (props) => {
    debugger
    return (
        <input {...props} className={styles.MyInput}/>
    );
};

export default MyInput;