export default function Banner() {
  return (
    <section className="banner-slider">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              width="1366"
              height="768"
              src={require("../../../assets/images/khfE7iUDhI6d.jpg")}
              className="d-block w-100 wp-post-image"
              alt
              loading="lazy"
              // srcset="images/khfE7iUDhI6d.jpg 1366w, images/EwZaCJ2Qabxy.jpg 300w, images/gccc4SFYhRaL.jpg 1024w, images/RvvBJCgcQS7o.jpg 768w, images/1hyCx7bo3dbC.jpg 635w"
              sizes="(max-width: 1366px) 100vw, 1366px"
            />{" "}
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text-uppercase">
                Find your <br />
                next tour
              </h5>
              <p> </p>
              <p>With Safari Motorcycles Rental</p>
              <p></p>
              <a href="/tour/" type="submit" className="btn btn-danger">
                Book Now
              </a>
            </div>
          </div>
          <div className="carousel-item ">
            <img
              width="1366"
              height="768"
              src={require("../../../assets/images/GoNl5EMN2g6F.jpg")}
              className="d-block w-100 wp-post-image"
              alt
              loading="lazy"
              // srcset="images/GoNl5EMN2g6F.jpg 1366w, images/fpzhlid2WsgM.jpg 300w, images/rnkgKpG9o9iM.jpg 1024w, images/OlFqhjFeaNpZ.jpg 768w, images/2hti1ogpqMGN.jpg 635w"
              sizes="(max-width: 1366px) 100vw, 1366px"
            />{" "}
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text-uppercase">
                Ready for a thrilling
                <br />
                desert drive
              </h5>
              <p> </p>
              <p>With Safari Motorcycles Rental</p>
              <p></p>
              <a href="/tour/" type="submit" className="btn btn-danger">
                Book Now
              </a>
            </div>
          </div>
          <div className="carousel-item ">
            <img
              width="1366"
              height="768"
              src={require("../../../assets/images/OFGJlzrD5sAi.jpg")}
              className="d-block w-100 wp-post-image"
              alt
              loading="lazy"
              // srcset="images/OFGJlzrD5sAi.jpg 1366w, images/j6P3YCGLLszD.jpg 300w, images/uH0DZzzrd9nx.jpg 1024w, images/mQ8FRP1VtKF9.jpg 768w, images/mFeo0GAhi6iQ.jpg 635w"
              sizes="(max-width: 1366px) 100vw, 1366px"
            />{" "}
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text-uppercase">
                Fun for family &#038;
                <br />
                friends alike
              </h5>
              <p> </p>
              <p>With Safari Motorcycles Rental</p>
              <p></p>
              <a href="/tour/" type="submit" className="btn btn-danger">
                Book Now
              </a>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span>Prev</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span>Next</span>
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </a>
      </div>
    </section>
  );
}
