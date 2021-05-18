import "../Modal/Modal.scss";
import Number_of_views from "../../Images/eye-solid.svg";
import { useState, useEffect } from "react";

function Modal({ data, id, idNews}) {
  function handleOver(e) {


    let ScaleImage = document.querySelector(`.ScaleImage-${id}`)
    ScaleImage.classList.add("ScaleImage")
    console.log(ScaleImage)

  }
  function handleOverOut() {
    let ScaleImage = document.querySelector(`.ScaleImage-${id}`)
    ScaleImage.classList.remove("ScaleImage")
    console.log(ScaleImage)
  }
  const [Details, SetDetails] = useState([]);

  useEffect(
    function () {
      // Loading Start
      fetch(
        "https://api.themoviedb.org/3/movie/" +
          data.id +
          "?api_key=4521ea8693f4def400a9777ba95e0bc2&language=en-US"
      )
        .then((res) => res.json())
        .then(function (details) {
          //  Loading End
          SetDetails(details);
        });
    },
    [data.id]
  );
  return (
    <>
      <button
        type="button"
        className="ButtonInfo"
        data-mdb-toggle="modal"
        data-mdb-target={"#exampleModal" + data.id}
      >
        <button
          type="button"
          className="btn btn-dark btn-rounded ColorBtnSynopsis ScaleStarter"
          onMouseEnter={handleOver}
          onMouseLeave={handleOverOut}
        >
          SYNOPSIS
        </button>
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
                {data.title}{data.original_name}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-mdb-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img
                className="ImageModel"
                src={
                  "https://image.tmdb.org/t/p/original" +
                  data.backdrop_path +
                  " "
                }
                alt=""
              />
              {data.overview}
              ...
            </div>

            <div className="modal-footer">
              <div className="Number_of_views">
                <img src={Number_of_views} alt="" /> {Details.popularity}
              </div>
              <button
                type="button"
                className="btn btn-secondary BtnColorModal"
                data-mdb-dismiss="modal"
              >
                <b>Close</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
