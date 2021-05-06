import "../Styles/Sass/style.scss"

function Modele({data}) {
  return (

    <>

      <button
        type="button"
        className="ButtonInfo"
        data-mdb-toggle="modal"
        data-mdb-target={"#exampleModal" + data.id}
      >
        !
      </button>

      <div
        className="modal fade "
        id={"exampleModal" + data.id}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content CustomModel WidthModel">
            <div className="modal-header ">
              <h5 className="modal-title " id="exampleModalLabel">
                {data.title}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-mdb-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body ">
           <img className="ImageModel" src={"https://image.tmdb.org/t/p/original" + data.backdrop_path + " "} alt=""/> 
            {data.overview}
              ...
            
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-mdb-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default Modele;