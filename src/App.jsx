import { useState } from "react";
import Busqueda from "./components/Busqueda/Busqueda";
import Header from "./components/header/Header";
import styles from "./App.module.css"


function App() {
  const [darkMode,setDarkMode]=useState(true);
  return (
    <div className={ !darkMode? styles.AppDark : styles.AppLigth }>

      <Header 
      darkMode={darkMode} 
      setDarkMode={setDarkMode} 
      />
      <Busqueda/>

    </div>
  );
}

export default App;
