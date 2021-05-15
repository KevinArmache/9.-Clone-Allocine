import "./Styles/Sass/style.scss";
import Acceuil from "./Pages/Acceuil.jsx";
import Start from "./Pages/Start.jsx";
import Menu from "./Components/Menu/Menu.jsx";
import Movies from "./Pages/Movies.jsx"
import { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  const [SearchInput, setSearchInput] = useState(null);
  const BaseUrl = "https://api.themoviedb.org/3/";
  const ApiKey = "4521ea8693f4def400a9777ba95e0bc2";
  const Url =(`${BaseUrl}search/movie?api_key=${ApiKey}&query=${SearchInput}`);
 
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  // Search

  const [SearchMovies, SetSearchMovies] = useState([]);

  const handleClick = () => {
    fetch(Url)
      .then((res) => res.json())
      .then(function (data) {
        SetSearchMovies(data.results);
      });
  };

  // First Fetch
  const [TopMovies, SetTopMovies] = useState([]);

  useEffect(function () {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=4521ea8693f4def400a9777ba95e0bc2&language=fr-FR&page=1"
    )
      .then((res) => res.json())
      .then(function (data) {
        SetTopMovies(data.results);
       
        });
        
  }, []);

  // POPULAR_MOVIES

  const [PopularMovies, SetPopularMovies] = useState([]);

  useEffect(function () {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4521ea8693f4def400a9777ba95e0bc2&language=fr-FR&page=1"
    )
      .then((res) => res.json())
      .then(function (data) {
        SetPopularMovies(data.results);
      });
  }, []);

  // Nouveautes
  const [Upcoming, SetUpcoming] = useState([]);

  useEffect(function () {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=4521ea8693f4def400a9777ba95e0bc2&language=fr-FR&page=1"
    )
      .then((res) => res.json())
      .then(function (data) {
        SetUpcoming(data.results);
      });
  }, []);



  return (
    <BrowserRouter>
      <Menu
        handleChange={handleChange}
        handleClick={handleClick}
        SearchResults={SearchMovies}
        SearchInput={SearchInput}
      />
      <Route exact path="/" component={Start} />
      <Route Acceuil path="/Acceuil">
        <Acceuil data={TopMovies} popular={PopularMovies}  upcoming={Upcoming} />
      </Route>
      <Route Movies path="/Movies" component={Movies} />
    </BrowserRouter>
  );
}

export default App;
