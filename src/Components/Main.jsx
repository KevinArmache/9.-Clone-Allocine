import "../Styles/Sass/style.scss";
import Icon_SearchBar from "../Images/search-solid.svg";
function Main(props) {
  return (
    <nav>
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
              onClick={props.eClick}
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
