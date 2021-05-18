import "../Card/Card.scss"
import Modal from "../Modal/Modal.jsx"

function Card ({data, id}) {
    return(
        <>
         <div key={data.id} className="Home__TheCard">
         <div className="HiddenScale">
                <img
                  className={`Home__TheCard-image ScaleImage-${id}`}
                  src={
                    "https://image.tmdb.org/t/p/original/" + data.backdrop_path
                  }
                  alt="..."
                />
        </div>
              <div className="Home__TheCard-title">
                <h3><nobr>{data.title}{data.original_name}</nobr></h3>
              </div>
              <Modal id={id} data={data}/>
            </div>
        </>
    )
}

export default Card;