export default function Tours() {
  return (
    <section className="buggy-section">
      <div className="container">
        <h1>Buggy TOURS</h1>
        <div className="row">
          <div className="col-md-6">
            <a href="/tours/307/" className="link_bl"></a>
            <div className="buggy-box">
              <h2>
                <a href="/tours/307/" className="link_bl">
                  CAN-AM RS
                </a>
                CAN-AM MAVERICK
                <small> 10 Vehicles</small>
              </h2>

              <a href="/tours/307/" className="link">
                Book Now
              </a>
            </div>
          </div>

          <div className="col-md-6">
            <a href="/tours/quad-buggy-1000/" className="link_bl">
              <img
                width="541"
                height="349"
                src={require("../../../assets/images/kQXbaZg73Rr6.jpg")}
                className="img-fluid wp-post-image"
                alt
                loading="lazy"
                sizes="(max-width: 541px) 100vw, 541px"
              />
            </a>
            <div className="buggy-box">
              <h2>
                <a href="/tours/quad-buggy-1000/" className="link_bl">
                  BUGGY
                </a>
                Polaris 1000cc
              </h2>

              <a href="/tours/quad-buggy-1000/" className="link">
                Book Now
              </a>
            </div>
          </div>

          <div className="col-md-6">
            <a href="/tours/buggy/" className="link_bl">
              <img
                width="541"
                height="349"
                src={require("../../../assets/images/eVEm6DBpTsge.jpg")}
                className="img-fluid wp-post-image"
                alt
                loading="lazy"
                srcset={`
            ${require("../../../assets/images/IYXZD39JCyFT.jpg")} 541w,
            ${require("../../../assets/images/Ywyy9E6ihUqX.jpg")} 300w`}
                sizes="(max-width: 541px) 100vw, 541px"
              />
            </a>
            <div className="buggy-box">
              <h2>
                <a href="/tours/buggy/" className="link_bl">
                  BUGGY
                </a>
                Kawasaki 800cc
              </h2>

              <a href="/tours/buggy/" className="link">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
