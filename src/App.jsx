import { useState } from "react";
import Busqueda from "./components/Busqueda/Busqueda";
import Header from "./components/header/Header";
import styles from "./App.module.css"
import Resultado from "./components/resultado/Resultado";


function App() {
  const [darkMode,setDarkMode]=useState(true);
  const [gifSugerido,setGifSugerido]=useState("")
  const [clickSugerido,setClickSugerido]=useState([])
  return (
    <div className={ !darkMode? styles.AppDark : styles.AppLigth }>

      <Header 
      darkMode={darkMode} 
      setDarkMode={setDarkMode} 
      />
      <Busqueda 
      clickSugerido={clickSugerido}
      setClickSugerido={setClickSugerido}
      />
      <Resultado
      clickSugerido={clickSugerido}
      setClickSugerido={setClickSugerido}
      />

    </div>
  );
}

export default App;
