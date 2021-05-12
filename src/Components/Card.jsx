import Modele from "../Components/Modele.jsx"

function Card ({data}) {
    return(
        <>
         <div key={data.id} className="Home_Card_TheCard">
              <div className="BgColorImg">
                <img
                  className="Home_Card_TheCard__image"
                  src={
                    "https://image.tmdb.org/t/p/original/" + data.backdrop_path
                  }
                  alt=""
                />
              </div>
              <div className="Home_Card_TheCard__title">
                <h3><nobr>{data.title}</nobr></h3>
              </div>
              <Modele data={data} />
            </div>
        </>
    )
}

export default Card;