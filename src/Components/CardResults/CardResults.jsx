import "../CardResults/CardResults.scss"

import Card from "../Card/Card.jsx"
function CardResults({SearchResults, SearchInput}) {
  return (
    <>
      <div>
        <div className={SearchInput ? "Cards__Results": "d-none"}>
          {SearchResults.map(function (element) {
            return (
              <div key={element.id}>
              <Card data={element} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CardResults;
