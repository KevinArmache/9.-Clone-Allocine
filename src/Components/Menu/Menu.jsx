import "../Menu/Menu.scss";
import CardResults from "../CardResults/CardResults.jsx"
import Icon_SearchBar from "../../Images/search-solid.svg";
import {Link} from "react-router-dom"
function Menu({SearchResults, SearchInput, handleChange, handleClick}) {
  return (
    <>
    <nav>
      <div className="Menu">
        <p className="Menu__Logo">KA</p>
        <div className="Menu__title">
          <Link to="/Acceuil">Home</Link>
          <Link to="/Movies">Movies</Link>
          <Link to="/Series">Series</Link>
        </div>
        <div>
          <label className="Menu__Search">
            <input
              id="Menu__Search--Input"
              name="Menu__Search--Input"
              type="text"
              onChange={handleChange}
            />
            <img
              onClick={handleClick}
              src={Icon_SearchBar}
              alt=""
              className="Onclick"
            />
          </label>
        </div>
      </div>
    </nav>

    <CardResults SearchResults={SearchResults} SearchInput={SearchInput} />
    </>
  );
}

export default Menu;
