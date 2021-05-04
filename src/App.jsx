import "./Styles/Sass/style.scss";
import Acceuil from "./Pages/Acceuil.jsx";
import Start from "./Pages/Start.jsx";
import Main from "./Components/Main.jsx";
import { BrowserRouter, Route } from "react-router-dom";
import { useState } from "react";
function App() {
  const [Search, setSearch] = useState(null)
  const Website = "https://api.themoviedb.org/3/";
  const API = "4521ea8693f4def400a9777ba95e0bc2";
  const Url = "".concat(Website, "search/movie?api_key=", API, "&query=", Search);

  
  

  
  const handleChange = (e) => {
    setSearch(e.target.value)
    console.log(e.target.value)
   
  }
  const handleClick = () => {
    console.log(Url)
  }

 

 
  return (
    <BrowserRouter>
      <Main eChange={handleChange} eClick ={handleClick} />
      <Route exact path="/" component={Start} />
      <Route path="/Acceuil" component={Acceuil} />
    </BrowserRouter>
  );
}

export default App;

// https://api.themoviedb.org/3/search/movie?api_key=4521ea8693f4def400a9777ba95e0bc2&query=super+man
