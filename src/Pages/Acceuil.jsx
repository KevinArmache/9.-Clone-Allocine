import Slides from "../Components/Slides.jsx";
import "../Styles/Sass/style.scss";
import Modele from "../Components/Modele.jsx";

function Acceuil({ popular, data, upcoming }) {
  return (
    <>
      <h1 id="OnTheTop__Card__Title">A LA UNE</h1>
      <Slides
        titre={data.original_title}
        description={data.overview}
        image={"https://image.tmdb.org/t/p/w500/" + data.backdrop_path}
      />
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
                <h3>{element.original_title}</h3>
              </div>
              <Modele data={element} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Acceuil;
