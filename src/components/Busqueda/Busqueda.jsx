import React, { useEffect, useState } from 'react';
import styles from './Busqueda.module.css'
import tres from '../../assets/images/icon-search.svg'

const Busqueda = () => {
    //Hooks
    const[gif,setGif] =useState("");
    const[mostrarAutoCompletacion,setMostrarAutoCompletacion]=useState(false)

    useEffect(() => {
        if(gif.length>2){
            setMostrarAutoCompletacion(true);
        }else{
            setMostrarAutoCompletacion(false);
        }
        console.clear();
        let url = fetch("https://api.giphy.com/v1/gifs/search/tags"+"?"+
        "api_key=nUNTIQy4xKKNgSXeNU5e11JARe54a9Lo"+"&"+
        "q="+gif)
        url
            .then((res)=>{
                return res.json();
            })
            .then ((datos)=>{
                console.log(datos);
                datos.data.map((item)=>{
                    console.log(item.name);
                })

            });
    });
    //funciones Eventos
    const manejoInput=(e)=>{
        setGif(e.target.value)
        console.log(gif)
        console.log("hola"+"andres");;
    }
    return (
        <div className={styles.busquedaGeneral}>
            <div className={styles.busqueda}>
                <input type="text" 
                placeholder="busca un gif"
                onChange={manejoInput}
                value={gif}/>
                <button>
                    <img src={tres} alt="" />
                </button>
            </div>
            {/* ------------------------Bloque de autocompletado------------------------ */}
            {mostrarAutoCompletacion ? 
                <div className={styles.autocompletacion}></div>
                :
                null}
        </div>
    );
}

export default Busqueda;
//rfc