import Slides from "../Components/Slides.jsx";
import "../Styles/Sass/style.scss";
import Modele from "../Components/Modele.jsx";
import Carousel from "../Components/Carousel.jsx"

function Acceuil({ popular, data, upcoming }) {

  return (

  <>
 
    <div className="MyHome">
      <h1 id="OnTheTop__Card__Title">A LA UNE</h1>
      <Carousel data={data} />
      <h2 className="Films__title">Populaires</h2>

      <div className="Home_Card_TheCards">
        {popular.map(function (element, index) {
          return (
            <div key={element.id} className="Home_Card_TheCard">
              <div className="BgColorImg">
                <img
                  className="Home_Card_TheCard__image"
                  src={
                    "https://image.tmdb.org/t/p/original/" + element.backdrop_path
                  }
                  alt=""
                />
              </div>
              <div className="Home_Card_TheCard__title">
                <h3>{element.title} </h3>
              </div>

              <Modele data={element} />
            </div>
          );
        })}
      </div>

      {/* Nouveautes */}

      <h2 className="Films__title">Nouveautés</h2>

      <div className="Home_Card_TheCards">
        {upcoming.map(function (element, index) {
          return (
            <div key={element.id} className="Home_Card_TheCard">
              <div className="BgColorImg">
                <img
                  className="Home_Card_TheCard__image"
                  src={
                    "https://image.tmdb.org/t/p/original/" + element.backdrop_path
                  }
                  alt=""
                />
              </div>
              <div className="Home_Card_TheCard__title">
                <h3>{element.title}</h3>
              </div>
              <Modele data={element} />
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
}

export default Acceuil;
