import "../Styles/Sass/style.scss";
import CardResults from "../Components/CardResults.jsx"

import Icon_SearchBar from "../Images/search-solid.svg";
function Main(props) {
  return (
    <>
    <nav>
      <div id="Main">
        <p id="Main--Logo">KA</p>
        <div id="Main--title">
          <a  href="/Acceuil">Home</a>
          <a href="/Films">Movies</a>
          <a href="/Series">Series</a>
          {/* <a href="/Mangas">Mangas</a> */}
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
              onClick={props.eClick}
              src={Icon_SearchBar}
              alt=""
              className="Onclick"
            />
          </label>
        </div>
      </div>
    </nav>

    <CardResults ResultsSearch={props.ResultsSearch} />
    </>
  );
}

export default Main;
