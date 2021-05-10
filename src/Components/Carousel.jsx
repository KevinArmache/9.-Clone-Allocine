function Carousel({ data }) {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-mdb-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-mdb-target="#carouselExampleCaptions"
            data-mdb-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselExampleCaptions"
            data-mdb-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselExampleCaptions"
            data-mdb-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselExampleCaptions"
            data-mdb-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselExampleCaptions"
            data-mdb-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselExampleCaptions"
            data-mdb-slide-to="5"
            aria-label="Slide 6"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselExampleCaptions"
            data-mdb-slide-to="6"
            aria-label="Slide 7"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselExampleCaptions"
            data-mdb-slide-to="7"
            aria-label="Slide 8"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselExampleCaptions"
            data-mdb-slide-to="8"
            aria-label="Slide 9"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselExampleCaptions"
            data-mdb-slide-to="9"
            aria-label="Slide 10"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselExampleCaptions"
            data-mdb-slide-to="10"
            aria-label="Slide 11"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselExampleCaptions"
            data-mdb-slide-to="11"
            aria-label="Slide 12"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselExampleCaptions"
            data-mdb-slide-to="12"
            aria-label="Slide 13"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselExampleCaptions"
            data-mdb-slide-to="13"
            aria-label="Slide 14"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselExampleCaptions"
            data-mdb-slide-to="14"
            aria-label="Slide 15"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselExampleCaptions"
            data-mdb-slide-to="15"
            aria-label="Slide 16"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselExampleCaptions"
            data-mdb-slide-to="16"
            aria-label="Slide 17"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselExampleCaptions"
            data-mdb-slide-to="17"
            aria-label="Slide 18"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselExampleCaptions"
            data-mdb-slide-to="18"
            aria-label="Slide 19"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselExampleCaptions"
            data-mdb-slide-to="19"
            aria-label="Slide 20"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselExampleCaptions"
            data-mdb-slide-to="20"
            aria-label="Slide ..."
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active FirstSlideCarousel">
            <div className="carousel-caption d-none d-md-block">
              <h1>TOP 20 DES MEILLEURS FILMS</h1>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
          {data.map(function (element) {
            return (
              <div className="carousel-item" key={data.id}>
                <img
                  src={
                    "https://image.tmdb.org/t/p/original" +
                    element.backdrop_path
                  }
                  className="d-block w-100 ImageCarousel"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h2 className="Title_Carousel">{element.title}</h2>
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p> */}
                </div>
              </div>
            );
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-mdb-target="#carouselExampleCaptions"
          data-mdb-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-mdb-target="#carouselExampleCaptions"
          data-mdb-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Carousel;
