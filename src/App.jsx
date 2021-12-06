import { useState } from "react";
import Busqueda from "./components/Busqueda/Busqueda";
import Header from "./components/header/Header";
import styles from "./App.module.css"
import Resultado from "./components/resultado/Resultado";
import Alert from "./components/alert/Alert";


function App() {
  const [darkMode,setDarkMode]=useState(true);
  const [gifSugerido,setGifSugerido]=useState("")
  const [clickSugerido,setClickSugerido]=useState([])
  const [clickNormal, setClickNormal] = useState(false);
  const [sugerencias,setSugerencias]=useState([])
  const [trending,setTrending]=useState([])
  return (
    <div className={ !darkMode? styles.AppDark : styles.AppLigth }>

      <Header 
      darkMode={darkMode} 
      setDarkMode={setDarkMode} 
      />
      <Busqueda 
      clickSugerido={clickSugerido}
      setClickSugerido={setClickSugerido}
      clickNormal={clickNormal}
      setClickNormal={setClickNormal}
      sugerencias={sugerencias}
      setSugerencias={setSugerencias}
      trending={trending}
      setTrending={setTrending}


      />
      <Resultado
      clickSugerido={clickSugerido}
      setClickSugerido={setClickSugerido}
      clickNormal={clickNormal}
      setClickNormal={setClickNormal}
      trending={trending}
      setTrending={setTrending}
      />
      <Alert/>
    </div>
  );
}

export default App;
