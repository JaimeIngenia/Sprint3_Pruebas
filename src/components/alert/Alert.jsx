import React from 'react';
import styles from "./Alert.module.css"
import error from '../../assets/images/404.png';

const Alert = () => {
    return (
        <div>
            <img src={error} alt="" />
        </div>
    );
}

export default Alert;
