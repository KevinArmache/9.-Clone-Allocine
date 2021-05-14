import "../Styles/Sass/style.scss";
import Carousel from "../Components/Carousel.jsx";
import Card from "../Components/Card.jsx";
import Footer from "../Components/Footer";

function Acceuil({ popular, data, upcoming }) {
  return (
    <>
      <div className="MyHome">
        <h1 id="OnTheTop__Card__Title">
          <strong>ON THE TOP</strong>
        </h1>
        <Carousel data={data} />
        <h2 className="Films__title">
          <strong>POPULAR</strong>
        </h2>

        <div className="Home_Card_TheCards">
          {popular.map(function (element, index) {
            return <Card data={element} id={index} />;
          })}
        </div>

        {/* Nouveautes */}

        <h2 className="Films__title">
          <strong>NEWS</strong>
        </h2>

        <div className="Home_Card_TheCards">
          {upcoming.map(function (element, index) {
            return <Card data={element} idNews={index} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Acceuil;
