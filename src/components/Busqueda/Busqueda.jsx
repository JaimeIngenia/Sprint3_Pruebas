import React, { useEffect, useState } from 'react';
import styles from './Busqueda.module.css'
import tres from '../../assets/images/icon-search.svg'
// import Card from '../Card/Card';

const Busqueda = ({clickSugerido,setClickSugerido,clickNormal,setClickNormal,sugerencias,setSugerencias,setTrending,trending}) => {
    //-------------------------------Hooks------------------------------------
    const[gif,setGif] =useState("");
    const[mostrarAutoCompletacion,setMostrarAutoCompletacion]=useState(false)
    // const [sugerencias,setSugerencias]=useState([])
    const [loading,setLoading]=useState(false)
    const [gifSugerido,setGifSugerido]=useState("");
    // const [clickNormal, setClickNormal] = useState(false);
    // const [clickSugerido,setClickSugerido]=useState([])
    // const [trending,setTrending]=useState([])

    useEffect(()=>{
        let peticion = fetch("https://api.giphy.com/v1/gifs/trending?api_key=nUNTIQy4xKKNgSXeNU5e11JARe54a9Lo&limit=25&rating=g");
        setLoading(true);
        peticion
            .then((res0)=>{
                return res0.json();
            })
            .then ((data0)=>{
                setTrending(data0.data);
                setLoading(false);
            })
            .catch((error)=>{
                alert(error);
            })
    },[]);


    useEffect(() => {
        if(gif.length>2){
            setMostrarAutoCompletacion(true);
        }else{
            setMostrarAutoCompletacion(false);
        }
        //console.clear();
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
        setLoading(true);
        url2
        .then((res2)=>{
            return res2.json();
        })
        .then((data2)=>{
            console.log(data2);
            setClickSugerido(data2.data);
            setLoading(false);
        })
    },[gifSugerido])
    //-----------------------------------funciones Eventos-------------------------------------
    const manejoInput=(e)=>{
        setGif(e.target.value)
        if (gif===""){
            setLoading(false);
        }

        // console.log(gif)
        // console.log("hola"+"andres");   
    }
    const manejoSugerencia=(e)=>{
        setGifSugerido(e.target.innerText)
        setGif("");
        //console.log(e.target.innerText);
        // console.log("Hiciste click");
        
    }
    const manejoBoton=(e)=>{
        setClickNormal(!clickNormal)
        
    }
    const manejoClickBtnCristian=(e)=>{
        e.preventDefault();
        // setBuscar(true);
        setGifSugerido(gif)
        setGif("");   

    }
    return (
        <div className={styles.App}>
            <form onSubmit={manejoClickBtnCristian}>
                <input type="text" 
                placeholder="busca un gif"
                onChange={manejoInput}
                value={gif}/>
                <button onClick={manejoBoton} > 
                    <img src={tres} className={styles.lupa} alt="" />
                </button>
            </form>

                
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
                {/* {loading===true?<h1>Loading...</h1>:null}  */}
                {loading===true?<div className={styles.anonimo}><h1>Loading...</h1><div class="contener_general"> <div class="contener_mixte"><div class="ballcolor ball_1">&nbsp;</div></div> <div class="contener_mixte"><div class="ballcolor ball_2">&nbsp;</div></div> <div class="contener_mixte"><div class="ballcolor ball_3">&nbsp;</div></div> <div class="contener_mixte"><div class="ballcolor ball_4">&nbsp;</div></div> </div></div>:null} 

                 {/* <div>
                    {clickSugerido.map((item)=>{
                        return (
                            <div>
                                <img className={styles.imagen} src={item.images.downsized_medium.url} alt="" />
                            </div>
                        )
                    })} 
                </div>  */}

                
                {/* <div>
                    {trending.map((item)=>{
                        return (
                            <div>
                                <img className={styles.imagen} src={item.images.downsized_medium.url} alt="" />
                            </div>
                        )
                    })} 
                </div>   */}


                
                {clickNormal? console.log( sugerencias):null}
                 {/* {clickNormal? sugerencias.forEach((props)=>{
                return (<p>{props.images.fixed_heigth.url}</p>) 
                 }):null} */}
                 {/* {clickNormal? sugerencias.forEach((props)=>{
                return (<p>{props.images.fixed_heigth.url}</p>) 
                }):null}
                 */}
        


                
     
        </div>
    );
}

export default Busqueda;
//rfc