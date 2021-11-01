import React, { useEffect, useState } from 'react';
import styles from './Busqueda.module.css'
import tres from '../../assets/images/icon-search.svg'

const Busqueda = () => {
    //-------------------------------Hooks------------------------------------
    const[gif,setGif] =useState("");
    const[mostrarAutoCompletacion,setMostrarAutoCompletacion]=useState(false)
    const [sugerencias,setSugerencias]=useState([])
    const [loading,setLoading]=useState(false)
    const [gifSugerido,setGifSugerido]=useState("")

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
        setLoading(true);
        url
            .then((res)=>{
                return res.json();
            })
            .then ((datos)=>{
                console.log(datos);
                datos.data.map((item)=>{
                    setSugerencias(datos.data);
                    setLoading(false);
                    // console.log(item.name);
                })
            })            
            .catch ((error)=>{
                console.log("Algo salió mal");
            })

        
    },[gif]);

    useEffect(()=>{
        let url2= fetch(`https://api.giphy.com/v1/gifs/search?api_key=nUNTIQy4xKKNgSXeNU5e11JARe54a9Lo&q=${gifSugerido}&limit=25&offset=0&rating=g&lang=en`)
        url2
        .then((res2)=>{
            return res2.json();
        })
        .then((data2)=>{
            console.log(data2);
        })
    },[gifSugerido])
    //-----------------------------------funciones Eventos-------------------------------------
    const manejoInput=(e)=>{
        setGif(e.target.value)
        console.log(gif)
        console.log("hola"+"andres");;
    }
    const manejoSugerencia=(e)=>{
        setGifSugerido(e.target.innerText)
        //console.log(e.target.innerText);
        // console.log("Hiciste click");
    }


    return (
        <div className={styles.App}>

                <input type="text" 
                placeholder="busca un gif"
                onChange={manejoInput}
                value={gif}/>
                <button>
                    <img src={tres} className={styles.lupa} alt="" />
                </button>
                {/* {loading===true?<h1>Loading...</h1>:null} */}
                {/* ------------------------Bloque de autocompletado------------------------ */}
                {mostrarAutoCompletacion === true? 
                <div className={styles.autocompletacion}>
                    {
                    sugerencias.map((sugerencia)=>{
                        return <p onClick={manejoSugerencia}>{sugerencia.name}</p>
                    })
                    }
                </div>
                :
                null}


        </div>
    );
}

export default Busqueda;
//rfc