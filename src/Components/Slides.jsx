import "../Styles/Sass/style.scss";
import Carousel  from "../Components/Carousel.jsx"

const Slides = (props) => {
  return (
      <div>
        <Carousel image={props.image} />
      </div>
    // <div id="OnTheTop">
    //   <div>
    //     <a href="google.fr">
    //       <img src={FlecheGauche} alt="Fleche Gauche" />
    //     </a>
    //   </div>

    //   <div id="OnTheTop__Column">
    //     <div id="OnTheTop__Card">
    //       <img id="OnTheTop__Card__Image" src={props.image} alt="A la une" />
    //       <div id="OnTheTop__Card__Text">
    //         <h2>{props.titre}</h2>
    //         <p>{props.description}</p>
    //         <button id="Button--Watch">VISUALISER</button>
    //       </div>
    //     </div>
    //   </div>
    //   <div>
    //     <a href="google.fr">
    //       <img src={FlecheDroite} alt="Fleche Droite" />
    //     </a>
    //   </div>
    // </div>
  );
};

export default Slides;
