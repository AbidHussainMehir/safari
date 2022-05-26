export default function Detail() {
  return (
    <section className="details-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="content">
              <h1>
                CAN-AM RS <small>CAN-AM MAVERICK </small>
              </h1>
              <div className="col-lg-6 d-block d-sm-none">
                <img
                  width="540"
                  height="680"
                  src={require("../../../assets/images/Fo6WJUHj7I4H.jpeg")}
                  className="attachment-tours_big size-tours_big"
                  alt
                  loading="lazy"
                />
                <div className="row">
                  <div className="col-6">
                    <h3>CAN-AM MAVERICK</h3>
                  </div>
                  <div className="col-6">
                    <h3>10 Vehicles</h3>
                  </div>
                </div>
              </div>
              <p>
                Discover the unconventional paths in the desert on a powerful
                buggy under the guidance of experienced professionals. We have
                50+1000cc buggy to let you enjoy your trip at the most beautiful
                location in the desert. So, what are you waiting for ? Book your
                tickets and get ready for a thrilling trip through deserts.
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
              width="540"
              height="680"
              src={require("../../../assets/images/Fo6WJUHj7I4H.jpeg")}
              className="attachment-tours_big size-tours_big"
              alt
              loading="lazy"
            />
            <div className="row">
              <div className="col-6">
                <h3>CAN-AM MAVERICK</h3>
              </div>
              <div className="col-6">
                <h3>10 Vehicles</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
