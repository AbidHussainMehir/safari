export default function Tours() {
  return (
    <section className="buggy-section">
      <div className="container">
        <h1>QUAD Biking TOURS</h1>
        <div className="row">
          <div className="col-md-6">
            <a href="/tours/quad-biking/" className="link_bl">
              <img
                width="541"
                height="349"
                src={require("../../../assets/images/88Aa1fOz5HCM.jpg")}
                className="img-fluid wp-post-image"
                alt
                loading="lazy"
                //   srcset="
                //   images/SMmWNG91iM80.jpg 541w,
                //   images/J9KNNvIfJbFj.jpg 300w
                // "
                sizes="(max-width: 541px) 100vw, 541px"
              />
            </a>
            <div className="buggy-box">
              <h2>
                <a href="/tours/quad-biking/" className="link_bl">
                  QUAD BIKING
                </a>
                YAMAHA 700CC
              </h2>

              <a href="/tours/quad-biking/" className="link">
                Book Now
              </a>
            </div>
          </div>

          <div className="col-md-6">
            <a href="/tours/quad-biking-800/" className="link_bl">
              <img
                width="541"
                height="349"
                src={require("../../../assets/images/W3jRkOaVk2rY.jpg")}
                className="img-fluid wp-post-image"
                alt
                loading="lazy"
                //   srcset="
                //   images/LhJhV8ity0PP.jpg 541w,
                //   images/8Ps8ghpSRsso.jpg 300w
                // "
                sizes="(max-width: 541px) 100vw, 541px"
              />
            </a>
            <div className="buggy-box">
              <h2>
                <a href="/tours/quad-biking-800/" className="link_bl">
                  QUAD BIKING
                </a>
                YAMAHA 350CC
              </h2>

              <a href="/tours/quad-biking-800/" className="link">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
