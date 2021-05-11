import { useState, useEffect } from "react";

function Category () {
    const [Category, setCategory] = useState([]);
    useEffect(function () {
  fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=4521ea8693f4def400a9777ba95e0bc2&language=en-US"
  )
    .then((res) => res.json())
    .then(function (data) {
    let Category = data.genres.map(function (element){
    return <button type="button" class="btn btn-outline-light">{element.name}</button>
        
    })
    setCategory(Category)
    });
}, []);
// https://api.themoviedb.org/3/discover/movie?api_key=4521ea8693f4def400a9777ba95e0bc2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate
const [Discovery, setDiscovery] = useState([]);
useEffect(function () {
    let TableDiscovery= []

    for(let i=1; i <)
fetch(
" https://api.themoviedb.org/3/discover/movie?api_key=4521ea8693f4def400a9777ba95e0bc2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
)
.then((res) => res.json())
.then(function (data) {
let Category = data.genres.map(function (element){
return <button type="button" class="btn btn-outline-light">{element.name}</button>
    
})
setCategory(Category)
});
}, []);

return (
    <div>
        <div className="Category">
        {Category}
        </div>
    </div>
)
}
export default Category