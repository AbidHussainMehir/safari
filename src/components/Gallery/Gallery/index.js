export default function Gallery() {
  return (
    <section className="gallery-section">
      <div className="container">
        <h1>
          Gallery<small>SAFARI MOTORCYCLES RENTAL</small>
        </h1>

        <div>
          <div>
            <div className="carousel-inner gallery-section-popup">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-sm-3">
                    <a href="https://www.safaribuggyrental.com/wp-content/uploads/2021/06/1.png">
                      <img
                        src={require("../../../assets/images/GadzNOlTWxyq.png")}
                        className="img-fluid"
                        alt
                      />
                    </a>
                  </div>

                  <div className="col-sm-3">
                    <a href="https://www.safaribuggyrental.com/wp-content/uploads/2021/06/g2.png">
                      <img
                        src={require("../../../assets/images/dtJgA9e0qZCa.png")}
                        className="img-fluid"
                        alt
                      />
                    </a>
                  </div>

                  <div className="col-sm-6">
                    <a href="https://www.safaribuggyrental.com/wp-content/uploads/2021/06/g11.png">
                      <img
                        src={require("../../../assets/images/AmsVP8sNvdQr.png")}
                        className="img-fluid"
                        alt
                      />
                    </a>
                  </div>

                  <div className="col-sm-6 h4">
                    <a href="https://www.safaribuggyrental.com/wp-content/uploads/2021/06/g4.png">
                      <img
                        src={require("../../../assets/images/SuabYDYqZJ0G.png")}
                        className="img-fluid"
                        alt
                      />
                    </a>
                  </div>

                  <div className="col-sm-6 h5">
                    <a href="https://www.safaribuggyrental.com/wp-content/uploads/2021/06/g4-541x562.jpg">
                      <img
                        src={require("../../../assets/images/gbPe3zkxQxND.jpg")}
                        className="img-fluid"
                        alt
                      />
                    </a>
                  </div>

                  <div className="col-sm-3 h6">
                    <a href="https://www.safaribuggyrental.com/wp-content/uploads/2021/06/g5.png">
                      <img
                        src={require("../../../assets/images/508VOJswDOfu.png")}
                        className="img-fluid"
                        alt
                      />
                    </a>
                  </div>

                  <div className="col-sm-3 h7">
                    <a href="https://www.safaribuggyrental.com/wp-content/uploads/2021/06/g6.png">
                      <img
                        src={require("../../../assets/images/9vvr0qJPJ869.png")}
                        className="img-fluid"
                        alt
                      />
                    </a>
                  </div>

                  <div className="col-sm-6 h8">
                    <a href="https://www.safaribuggyrental.com/wp-content/uploads/2021/06/g3.png">
                      <img
                        src={require("../../../assets/images/w5bEB8OeP7EQ.png")}
                        className="img-fluid"
                        alt
                      />
                    </a>
                  </div>

                  <div className="col-sm-3 h9">
                    <a href="https://www.safaribuggyrental.com/wp-content/uploads/2021/06/g7.png">
                      <img
                        src={require("../../../assets/images/sLqKMHJzPfKH.png")}
                        className="img-fluid"
                        alt
                      />
                    </a>
                  </div>

                  <div className="col-sm-3 h10">
                    <a href="https://www.safaribuggyrental.com/wp-content/uploads/2021/06/g8.png">
                      <img
                        src={require("../../../assets/images/me9scjJwo3Ju.png")}
                        className="img-fluid"
                        alt
                      />
                    </a>
                  </div>

                  <div className="col-sm-3 h11">
                    <a href="https://www.safaribuggyrental.com/wp-content/uploads/2021/06/g9.png">
                      <img
                        src={require("../../../assets/images/Ur0xq4Xrse3d.png")}
                        className="img-fluid"
                        alt
                      />
                    </a>
                  </div>

                  <div className="col-sm-3 h12">
                    <a href="https://www.safaribuggyrental.com/wp-content/uploads/2021/06/g10.png">
                      <img
                        src={require("../../../assets/images/1GfxEC2usIlY.png")}
                        className="img-fluid"
                        alt
                      />
                    </a>
                  </div>
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
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
            <div className="num"></div>
            <div className="current"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
