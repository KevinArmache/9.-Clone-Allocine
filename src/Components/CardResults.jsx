function CardResults(props) {
  console.log(props.ResultsSearch);
  return (
    <div className="Cards_Results">
        {
            props.ResultsSearch.map(function(element, index){
                return (
                    <div className="Card_Results">
                        <h2>{element.title}</h2>
                    </div>

                )
            })
        }
     
    </div>
    
  );
}

export default CardResults;
