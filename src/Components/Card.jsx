import Modal from "./Modal.jsx"

function Card ({data, classIndex}) {
    return(
        <>
         <div key={data.id} className="Home_Card_TheCard">
             
                <img
                  className={`Home_Card_TheCard__image`}
                  src={
                    "https://image.tmdb.org/t/p/original/" + data.backdrop_path
                  }
                  alt="..."
                />
       
              <div className="Home_Card_TheCard__title">
                <h3><nobr>{data.title}</nobr></h3>
              </div>
              <Modal classIndex = {classIndex} data={data} />
            </div>
        </>
    )
}

export default Card;