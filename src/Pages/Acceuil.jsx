import "../Styles/Sass/style.scss";
import Carousel from "../Components/Carousel/Carousel.jsx";
import Card from "../Components/Card/Card.jsx";
import Footer from "../Components/Footer/Footer";

function Acceuil({ popular, data, upcoming }) {
  return (
    <>
      <h1 className="OnTheTop__Card__Title">
        <strong>ON THE TOP</strong>
      </h1>
      <Carousel data={data} />
      <h2 className="PopularMovies">
        <strong>POPULAR</strong>
      </h2>

      <div className="Home__TheCards">
        {popular.map(function (element, index) {
          return <Card data={element} id={index} />;
        })}
      </div>

      {/* Nouveautes */}

      <h2 className="UpcomingMovies">
        <strong>NEWS</strong>
      </h2>

      <div className="Home__TheCards">
        {upcoming.map(function (element, index) {
          return <Card data={element} id={index} />;
        })}
      </div>

      <Footer />
    </>
  );
}

export default Acceuil;
