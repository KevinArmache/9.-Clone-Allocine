import Modal from "./Modal.jsx"

function Card ({data, id, idNews}) {
    return(
        <>
         <div key={data.id} className="Home_Card_TheCard">
         <div className="HiddenScale">
                <img
                  className={`Home_Card_TheCard__image ScaleImage-${id} ScaleImage2-${idNews}`}
                  src={
                    "https://image.tmdb.org/t/p/original/" + data.backdrop_path
                  }
                  alt="..."
                />
        </div>
              <div className="Home_Card_TheCard__title">
                <h3><nobr>{data.title}</nobr></h3>
              </div>
              <Modal id={id} data={data} idNews={idNews} />
            </div>
        </>
    )
}

export default Card;