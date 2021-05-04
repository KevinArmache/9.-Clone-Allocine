import "../Styles/Sass/style.scss";
import FlecheGauche from "../Images/chevron-circle-left-solid.svg";
import FlecheDroite from "../Images/chevron-circle-right-solid.svg";
import DemonSlayer from "../Images/kny.png";

const Slides = () => {
  return (
    <div id="OnTheTop">
      <div>
        <a href="google.fr">
          <img src={FlecheGauche} alt="Fleche Gauche" />
        </a>
      </div>

      <div id="OnTheTop__Column">
        <h1 id="OnTheTop__Card__Title">A LA UNE</h1>
        <div id="OnTheTop__Card">
          <img id="OnTheTop__Card__Image" src={DemonSlayer} alt="kny" />
          <div id="OnTheTop__Card__Text">
            <h2>Kimetsu No Yaiba</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
        
            </p>
            <button id="Button--Watch">VISUALISER</button>
          </div>
        </div>
      </div>
      <div>
        <a href="google.fr">
          <img src={FlecheDroite} alt="Fleche Droite" />
        </a>
      </div>
    </div>
  );
};

export default Slides;
