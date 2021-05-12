import { useState, useEffect } from "react";
import Pagination from "../Components/Pagination.jsx";
import Card from "../Components/Card.jsx";
import "../Styles/Sass/style.scss";
function Category() {
  // CATEGORY

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
  const [GetId, setGetId] = useState("");
  function handleClick(id) {
    setGetId(id);
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
                onClick={() => handleClick(genre.id)}
                class="btn btn-outline-light"
              >
                {genre.name}
              </button>
            );
          })}
        </div>
        <div className="Category__Results">
          {
            Discovery.map(function (element){
              return <Card data={element}/>
            })
          }
          </div>
        <div>
          <Pagination />
        </div>
      </div>
    </>
  );
}
export default Category;
