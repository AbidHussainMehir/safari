export default function OurGallery() {
  return (
    <section className="whychoose-section gallery-section">
      <div className="container">
        <h2>
          Our Gallery<small>SAFARI MOTORCYCLES RENTAL</small>
        </h2>
        <div
          id="carouselGallery"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner gallery-section-popup">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-3">
                  <img
                    src={require("../../../assets/images/TNUIr5tvDkjY.png")}
                    alt
                    className="img-fluid"
                  />
                </div>
                <div className="col-3">
                  <img
                    src={require("../../../assets/images/yOnQy8lAnXPj.png")}
                    alt
                    className="img-fluid"
                  />
                </div>
                <div className="col-3">
                  <img
                    src={require("../../../assets/images/T6N2ZmrD3X59.png")}
                    alt
                    className="img-fluid"
                  />
                </div>
                <div className="col-3">
                  <img
                    src={require("../../../assets/images/bDFQoZgQwHms.png")}
                    alt
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
