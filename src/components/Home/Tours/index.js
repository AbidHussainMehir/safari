export default function Tours() {
  return (
    <section className="buggy-section our-tour-section">
      <div className="container">
        <h1>
          OUR TOURS<small>SAFARI MOTORCYCLES RENTAL</small>
        </h1>
        <div className="row">
          <div className="col-md-4">
            <div className="img-wrap">
              <a href="/tours/quad-buggy-1000/" className="link_bl">
                <img
                  width="349"
                  height="349"
                  src={require("../../../assets/images/T02I2HyJFIOO.jpg")}
                  className="img-fluid wp-post-image"
                  alt
                  loading="lazy"
                  srcset="images/T02I2HyJFIOO.jpg 349w, images/bxk9J62z8Tgv.jpg 150w"
                  sizes="(max-width: 349px) 100vw, 349px"
                />{" "}
              </a>
              <a href="/tours/quad-buggy-1000/" className="link_bl">
                <div className="overlay">
                  <h3>1 SEATER 1 HOUR - AED 500</h3>

                  <h3>2 SEATER 1 HOUR - AED 600</h3>

                  <h3>4 SEATER 1 HOUR - AED 700</h3>
                </div>
              </a>
            </div>
            <div className="buggy-box">
              <h2>
                <a href="/tours/quad-buggy-1000/" className="link_bl">
                  BUGGY{" "}
                </a>
                Polaris 1000cc <small></small>
              </h2>
              <a href className="link">
                Book Now
              </a>
            </div>
          </div>

          <div className="col-md-4">
            <div className="img-wrap">
              <a href="/tours/307/" className="link_bl"></a>
              <a href="/tours/307/" className="link_bl">
                <div className="overlay"></div>
              </a>
            </div>
            <div className="buggy-box">
              <h2>
                <a href="/tours/307/" className="link_bl">
                  CAN-AM RS{" "}
                </a>
                CAN-AM MAVERICK <small>10 Vehicles</small>
              </h2>
              <a href className="link">
                Book Now
              </a>
            </div>
          </div>

          <div className="col-md-4">
            <div className="img-wrap">
              <a href="/tours/buggy/" className="link_bl">
                <img
                  width="349"
                  height="349"
                  src={require("../../../assets/images/W2od5A39wlXs.jpg")}
                  className="img-fluid wp-post-image"
                  alt
                  loading="lazy"
                  srcset="images/W2od5A39wlXs.jpg 349w, images/XnzMjnIVn7aZ.jpg 150w"
                  sizes="(max-width: 349px) 100vw, 349px"
                />{" "}
              </a>
              <a href="/tours/buggy/" className="link_bl">
                <div className="overlay">
                  <h3>4 SEATER 1 HOUR - 500 AED</h3>
                </div>
              </a>
            </div>
            <div className="buggy-box">
              <h2>
                <a href="/tours/buggy/" className="link_bl">
                  BUGGY{" "}
                </a>
                Kawasaki 800cc <small></small>
              </h2>
              <a href className="link">
                Book Now
              </a>
            </div>
          </div>

          <div className="col-md-6">
            <div className="img-wrap">
              <a href="/tours/camel-ride/" className="link_bl">
                <img
                  width="541"
                  height="349"
                  src={require("../../../assets/images/q9sVg8rjfn8N.jpg")}
                  className="img-fluid wp-post-image"
                  alt
                  loading="lazy"
                  srcset="images/h9c4iQb918ID.jpg 541w, images/okhu2NIa3Jbb.jpg 300w"
                  sizes="(max-width: 541px) 100vw, 541px"
                />{" "}
              </a>
              <a href="/tours/camel-ride/" className="link_bl">
                <div className="overlay"></div>
              </a>
            </div>
            <div className="buggy-box">
              <a href="/tours/camel-ride/" className="link_bl">
                <h2>CAMEL RIDE</h2>
              </a>
              <a href className="link">
                Book Now
              </a>
            </div>
          </div>

          <div className="col-md-6">
            <div className="img-wrap">
              <a href="/tours/take-a-snap-with-falcon2/" className="link_bl">
                <img
                  width="541"
                  height="349"
                  src={require("../../../assets/images/H0TOQhPEJgFZ.png")}
                  className="img-fluid wp-post-image"
                  alt
                  loading="lazy"
                  srcset="images/H0TOQhPEJgFZ.png 541w, images/qfiU6HW9U4o9.png 300w"
                  sizes="(max-width: 541px) 100vw, 541px"
                />{" "}
              </a>
              <a href="/tours/take-a-snap-with-falcon2/" className="link_bl">
                <div className="overlay"></div>
              </a>
            </div>
            <div className="buggy-box">
              <a href="/tours/take-a-snap-with-falcon2/" className="link_bl">
                <h2>TAKE A SNAP WITH FALCON</h2>
              </a>
              <a href className="link">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
