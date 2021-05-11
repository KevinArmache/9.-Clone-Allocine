import { useState, useEffect } from "react";
import Pagination from "../Components/Pagination.jsx";
function Category() {
  // CATEGORY
  const [Category, setCategory] = useState([]);
  useEffect(function () {
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=4521ea8693f4def400a9777ba95e0bc2&language=fr-FR"
    )
      .then((res) => res.json())
      .then(function (data) {
        let Category = data.genres.map(function (element) {
          return (
            <button
              type="button"
              key={element.id}
              onClick={handleclickCategories}
              class="btn btn-outline-light"
            >
              {element.name}
            </button>
          );
        });

        setCategory(Category);
      });
  }, []);

  // DISCOCOVERY

  const [Discovery, setDiscovery] = useState({});

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=4521ea8693f4def400a9777ba95e0bc2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
    )
      .then((res) => res.json())
      .then(function (data) {
        return setDiscovery(data.results);
      });
  }, []);

  function handleclickCategories() {
    return (
      <>
        {
          (console.log("Categories : ", Category),
          console.log("Discovery : ", Discovery))
        }
      </>
    );
  }

  return (
    <>
      <div>
        <div className="Category">{Category}</div>
      </div>

      <div>
        <Pagination />
      </div>
    </>
  );
}
export default Category;
