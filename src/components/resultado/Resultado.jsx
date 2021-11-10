import React from 'react';
import Card from '../Card/Card';
import styles from "./Resultado.module.css"


const Resultado = ({clickSugerido,setClickSugerido}) => {
    return (
        <div className={styles.Resultado}>

            {clickSugerido.map((props)=>{
                return <Card key={props.id} props={props} />
            })} 
{/* 
            <h1>Hola soy el resultados</h1> */}

        </div>
        
    );
}

export default Resultado;
