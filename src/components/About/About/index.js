export default function About() {
  return (
    <section className="about-section">
      <div className="container">
        <h1>
          About Us<small>SAFARI MOTORCYCLES RENTAL</small>
        </h1>
        <div className="row">
          <div className="col-md-7">
            <p>
              Safari Motorcycle Rental is one of the most promising desert tour
              spots in UAE with a great team of guides, supporting team and
              ample of vehicles to make your trip adventurous. We are blessed
              with a mesmerizing location that turn-on your holiday mood. Along
              with Buggy tours, we have included Camel drive, snap with eagle
              etc. to give your desert tour an Arabic touch. Whether you are a
              passionate and experienced buggy driver or someone who is planning
              to experience such a trip for the first time, Safari Motorcycle
              Rental is the best place to be in. We welcome our guest with great
              pride and walk every step with them to make their trip worthy and
              memorable. If you want to experience something unconventional on
              your holiday, opt for a unique motorcycle tour that will give you
              an adventure of a lifetime.
            </p>
            <div className="row">
              <div className="col-md-4">
                <img
                  src={require("../../../assets/images/7hqsQkKltN1K.png")}
                  alt
                  className="img-fluid"
                />
              </div>
              <div className="col-md-4">
                <img
                  src={require("../../../assets/images/wWv9oxq44bKk.png")}
                  alt
                  className="img-fluid"
                />
              </div>
              <div className="col-md-4">
                <img
                  src={require("../../../assets/images/lyiJIKf6jm73.png")}
                  alt
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <img
              src={require("../../../assets/images/zipdGIyI8jsn.png")}
              alt
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
