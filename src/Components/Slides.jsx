import "../Styles/Sass/style.scss";
import Carousel  from "../Components/Carousel.jsx"

const Slides = (props) => {
  return (
      <div>
        <Carousel image={props.image} />
      </div>
  );
};

export default Slides;
