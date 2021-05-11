function CardResults(props) {
  return (
    <>
      <div>
        <div className="Cards_Results">
          {props.ResultsSearch.map(function (element) {
            return (
              <div key={element.id} className="Card_Results ShowCard">
                <h2>{element.title}</h2>
                <img
                  className="ShowCard_image"
                  src={
                    "https://image.tmdb.org/t/p/w500/" +
                    element.poster_path +
                    " "
                  }
                  alt=""
                />
              </div>
              
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CardResults;
