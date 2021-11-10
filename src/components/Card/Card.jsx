import React from 'react';
import styles from "./Card.module.css"

const Card = ({props}) => {
    return (
        <div className={styles.Card}>
            <img className={styles.gif} src={props.images.downsized_medium.url} alt="" />
           {/* <h5>Hola soy la card</h5>   */}
        </div>
    );
}

export default Card;
