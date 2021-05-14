import "./Styles/Sass/style.scss";
import Acceuil from "./Pages/Acceuil.jsx";
import Start from "./Pages/Start.jsx";
import Main from "./Components/Main.jsx";
import Films from "./Pages/Films.jsx"
import { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  const [Search, setSearch] = useState(null);
  const Website = "https://api.themoviedb.org/3/";
  const API = "4521ea8693f4def400a9777ba95e0bc2";
  const Url = "".concat(
    Website,
    "search/movie?api_key=",
    API,
    "&query=",
    Search
  );
  const handleChange = (e) => {
    setSearch(e.target.value.replace(" ", "+"));
  };

  // Search

  const [SearchMovies, SetSearchMovies] = useState([]);

  const handleClick = () => {
    fetch(Url)
      .then((res) => res.json())
      .then(function (data) {
        let SearchResult = data.results;
        console.log(SearchResult);
        SetSearchMovies(SearchResult);
      });
    let CardsResults = document.querySelector(".Cards_Results");

    if (Search !== "") {
      CardsResults.style.display = "flex";
    }
  };
  useEffect(
    function () {
    
      let CardsResults = document.querySelector(".Cards_Results");
    

      if (Search === "") {
        CardsResults.style.display = "none";

      } else {
     
      }
    },
    [Search]
  );

  // First Fetch
  const [TopMovies, SetTopMovies] = useState([]);

  useEffect(function () {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=4521ea8693f4def400a9777ba95e0bc2&language=en-US&page=1"
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
      "https://api.themoviedb.org/3/movie/popular?api_key=4521ea8693f4def400a9777ba95e0bc2&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then(function (data) {
        let PopularMovies = data.results.map(function (element) {
          return element;
        });
        SetPopularMovies(PopularMovies);
      });
  }, []);
  // Nouveautes
  const [Upcoming, SetUpcoming] = useState([]);

  useEffect(function () {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=4521ea8693f4def400a9777ba95e0bc2&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then(function (data) {
        
        SetUpcoming(data.results);
      });
  }, []);



  return (
    <BrowserRouter>
      <Main
        eChange={handleChange}
        eClick={handleClick}
        ResultsSearch={SearchMovies}
      />
      <Route exact path="/" component={Start} />
      <Route Acceuil path="/Acceuil">
        <Acceuil data={TopMovies} popular={PopularMovies}  upcoming={Upcoming} />
      </Route>
      <Route Film path="/Films" component={Films} />
    </BrowserRouter>
  );
}

export default App;
