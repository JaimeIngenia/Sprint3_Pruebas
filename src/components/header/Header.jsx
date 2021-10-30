import React, { useState } from 'react';
import uno from '../../assets/images/uno.svg';
import dos from '../../assets/images/dos.svg';
import styles from "./Header.module.css"
// import unos from '../../../public/images/unos.svg';


const Header = () => {
    //Hooks
    const [darkMode,setDarkMode]=useState(false);
    //Funciónes
    const manejarClick =()=>{
        setDarkMode(!darkMode)
    }
    
    return (
        <div className="styles headerGeneral">
            <div className={styles.header}>
                <img src={uno} alt="" />
                <button className={styles.botonDark}
                onClick={manejarClick}
                >{darkMode? "MODE DARK" : 'MODE LIGTH' }</button>
            </div>
            <div className={styles.imagen}>
                <img src={dos} alt="" />
            </div>
        </div>

    );
}

export default Header;
