export default function Detail() {
  return (
    <section className="details-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="content">
              <h1>
                TAKE A SNAP WITH FALCON <small> </small>
              </h1>
              <div className="col-lg-6 d-block d-sm-none">
                <img
                  width="541"
                  height="349"
                  src={require("../../../assets/images/ESGweTzr6AGC.png")}
                  className="img-fluid wp-post-image"
                  alt
                  loading="lazy"
                  //       srcset="
                  //   images/ESGweTzr6AGC.png 541w,
                  //   images/xboueywrHzfd.png 300w
                  // "
                  sizes="(max-width: 541px) 100vw, 541px"
                />
                <div className="row"></div>
              </div>
              <p>
                To add a pitch of excitement to your trip, we let you take a
                snap with an Eagle on your hand. We have eagles of good race and
                professional guides to organize the photoshoot. Your hand is
                covered with specialized designed gloves for protection and the
                live eagle is made to sit on your hand. It’s a thrilling
                experience and wonderful moment that you would always recall
                when you think of your trip to deserts.
              </p>
              <p>
                <a
                  className="btn btn-danger start_booking_btn"
                  href="/contact/"
                  data-calendar="calendar_17"
                >
                  Enquiry
                </a>
              </p>
              <div className="tour_price">
                <ul></ul>
              </div>
              <div className="tour_calendar">
                <button type="submit" className="btn btn-danger back_btn">
                  Back
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-none d-sm-block">
            <img
              width="541"
              height="349"
              src={require("../../../assets/images/ESGweTzr6AGC.png")}
              className="img-fluid wp-post-image"
              alt
              loading="lazy"
              //       srcset="
              //   images/ESGweTzr6AGC.png 541w,
              //   images/xboueywrHzfd.png 300w
              // "
              sizes="(max-width: 541px) 100vw, 541px"
            />
            <div className="row"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
