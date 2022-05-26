export default function Detail() {
  return (
    <section className="details-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="content">
              <h1>
                CAMEL RIDE <small> </small>
              </h1>
              <div className="col-lg-6 d-block d-sm-none">
                <img
                  width="541"
                  height="349"
                  src={require("../../../assets/images/Wdm7t4KLtm1o.jpg")}
                  className="img-fluid wp-post-image"
                  alt
                  loading="lazy"
                  sizes="(max-width: 541px) 100vw, 541px"
                />
                <div className="row"></div>
              </div>
              <p>
                Camel ride has always been the favorite of desert tour lovers.
                We can take you through the deserts on our well decorated camel
                to acquaint you with the traditional Arabian mode of
                transportation. Enjoy your trip to the fullest with in the most
                attractive desert area in UAE.
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
              src={require("../../../assets/images/Wdm7t4KLtm1o.jpg")}
              className="img-fluid wp-post-image"
              alt
              loading="lazy"
              sizes="(max-width: 541px) 100vw, 541px"
            />
            <div className="row"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
