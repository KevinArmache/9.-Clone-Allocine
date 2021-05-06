import "../Styles/Sass/style.scss";
import CardResults from "../Components/CardResults.jsx"

import Icon_SearchBar from "../Images/search-solid.svg";
function Main(props) {
  console.log(props.ResultsSearch)
  return (
    <nav>
      <CardResults ResultsSearch={props.ResultsSearch} />
      <div id="Main">
        <p id="Main--Logo">KA</p>
        <div id="Main--title">
          <a href="/Acceuil">Acceuil</a>
          <a href="/Films">Films</a>
          <a href="/Series">Series</a>
          <a href="/Mangas">Mangas</a>
        </div>
        <div>
          <label htmlFor="Main--Search" id="Main--Search">
            <input
              id="Main--Search--Input"
              name="Main--Search--Input"
              type="text"
              onChange={props.eChange}
            />
            <img
              onClick={props.SearchClick}
              src={Icon_SearchBar}
              alt=""
              className="Onclick"
            />
          </label>
        </div>
      </div>
    </nav>
  );
}

export default Main;
