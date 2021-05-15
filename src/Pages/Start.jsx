import "../Styles/Sass/style.scss";
import "../Styles/Sass/Ocean.scss";
import { Link } from "react-router-dom";

function Start() {
  return (
    <>
      <div className="Start">
        <h1 className="Start-Text">FIRST ONLINE STREAMING PLATFORM</h1>
      </div>
      <div className="Start-Button">
        <Link to="/Acceuil">START</Link>
      </div>
      {/* <div class="ocean">
          <div class="wave"></div>
          <div class="wave"></div>
        </div> */}
    </>
  );
}

export default Start;
