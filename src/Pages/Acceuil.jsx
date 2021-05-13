import "../Styles/Sass/style.scss";
import Modal from "../Components/Modal.jsx";
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
            return (
              <div key={element.id} className="Home_Card_TheCard">
                <div className="HiddenScale">
                  <img
                    className={`Home_Card_TheCard__image ScaleImage-${index}`}
                    src={
                      "https://image.tmdb.org/t/p/original/" +
                      element.backdrop_path
                    }
                    alt=""
                  />
                </div>
                <div className="Home_Card_TheCard__title">
                  <h3>
                    {" "}
                    <nobr> {element.title} </nobr>
                  </h3>
                </div>

                <Modal classIndex={index} data={element} />
              </div>
            );
          })}
        </div>

        {/* Nouveautes */}

        <h2 className="Films__title">
          <strong>NEWS</strong>
        </h2>

        <div className="Home_Card_TheCards">
          {upcoming.map(function (element, index) {
            return <Card classIndex={index} data={element} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Acceuil;
