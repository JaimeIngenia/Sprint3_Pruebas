import React, { useState } from 'react';
import uno from '../../assets/images/uno.svg';
import dos from '../../assets/images/dos.svg';
import styles from "./Header.module.css"
// import unos from '../../../public/images/unos.svg';


const Header = ({setDarkMode , darkMode}) => {
    //Hooks

    //Funciónes
    const manejarClick =()=>{
        setDarkMode(!darkMode)
    }
    
    return (
        <div className="styles headerGeneral">
            <div className={styles.linea}></div>
            <div className={styles.header}>
                <img src={uno} alt="" />
                {/* ------------------------Boton------------------------ */}
                <button className={darkMode?styles.botonDark:styles.botonLigth}
                onClick={manejarClick}
                >{darkMode? "MODE DARK" : 'MODE LIGTH' }</button>
            </div>
            <div className={styles.titulo}>
                <h1 className={styles.mini}>!Inspírate y busca los mejores&nbsp;<b> GIFS</b> <spam className={styles.spam}>!</spam> </h1>
            </div>
            
            <div className={styles.imagen}>
                <img src={dos} alt="" />
            </div>
        </div>

    );
}

export default Header;
