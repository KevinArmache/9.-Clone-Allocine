import { useState, useEffect } from "react";

import Pagination from "../Pagination/Pagination.jsx";
import Card from "../Card/Card.jsx";
import Loader from "../Spinner/Spinner.jsx";
import "../Category/Category.scss";

function Category() {
  const [Spinner, setSpinner] = useState(false);
  const [Category, setCategory] = useState([]);
  useEffect(function () {
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=4521ea8693f4def400a9777ba95e0bc2&language=en-US"
    )
      .then((res) => res.json())
      .then(function (data) {
        setCategory(data.genres);
       
      });
  }, []);

  // GetID By Genre
  const [GetName, setGetName] = useState("");
  const [GetId, setGetId] = useState("");

  function handleClick(id, name) {
    setGetId(id);
    setGetName(name);
    
  }

  // DISCOVERY
  const [Discovery, setDiscovery] = useState([]);
  useEffect(
    function () {
      fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=4521ea8693f4def400a9777ba95e0bc2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=" +
          GetId +
          "&with_watch_monetization_types=flatrate"
      )
        .then((res) => res.json())
        .then(function (data) {
          setDiscovery(data.results);
        
        });
        
    },
    [GetId]
   
  );

  return (
    <>
      <div>
        <div className="Category">
          {Category.map((genre) => {
            return (
              <button
                type="button"
                key={genre.id}
                name={genre.name}
                onClick={() => handleClick(genre.id, genre.name)}
                class="btn btn-outline-light"
              >
                {genre.name}
              </button>
            );
          })}
        </div>
        <p className="Category__title">{GetName}</p>
        <div className="Category__Results">
            {Discovery.map(function (element, id) {
              console.log(id);
              return (
                <>
                  <Card data={element} id={id} />
                </>
              );
            })}
          </div>
        <div>
          <Pagination />
        </div>
      </div>
    </>
  );
}
export default Category;
