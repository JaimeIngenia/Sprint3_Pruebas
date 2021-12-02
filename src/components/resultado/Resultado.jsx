import React from 'react';
import Card from '../Card/Card';
import styles from "./Resultado.module.css"


const Resultado = ({clickSugerido,setClickSugerido,clickNormal,setClickNormal,sugerencias,setSugerencias,setTrending,trending}) => {
    return (
        <div className={styles.Resultado}>

            {clickSugerido.map((props)=>{
                return <Card key={props.id} props={props} />
            })} 
            {trending.map((props)=>{
                return <Card key={props.id} props={props} />
            })} 
            {/* {clickNormal? sugerencias.map((props)=>{
                return <Card key={props.id} props={props} />
            }):null} */}
            {/* {clickNormal? sugerencias.map((props)=>{
                return (<p>{props.name}</p>) 
            }):null} */}
            {/* {clickNormal? sugerencias.forEach((props)=>{
                return (<p>{props.images.fixed_heigth.url}</p>) 
            }):null}
         */}
            

        </div>
        
    );
}

export default Resultado;
