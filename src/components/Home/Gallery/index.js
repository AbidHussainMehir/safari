export default function Gallery() {
  return (
    <section className="our-gallery-section">
      <div className="container">
        <h2 className="heading-text">
          Our Gallery<small>Safari Motorcycles Rental</small>
        </h2>
        <div className="gallery-container">
          <div className="item-1">
            {" "}
            <img
              src={require("../../../assets/images/BjG5nWx0w0IX.png")}
              srcOn="https://www.safaribuggyrental.com/wp-content/uploads/2021/06/our-gallery-1.png"
              alt
              className="img-fluid img"
            />
          </div>
          <div className="item-2">
            {" "}
            <img
              src={require("../../../assets/images/9sUvKU5HhjkH.png")}
              srcOn="https://www.safaribuggyrental.com/wp-content/uploads/2021/06/our-gallery-2.png"
              alt
              className="img-fluid img"
            />
          </div>
          <div className="item-3">
            {" "}
            <img
              src={require("../../../assets/images/WsqdkMWnLRru.png")}
              srcOn="https://www.safaribuggyrental.com/wp-content/uploads/2021/06/our-gallery-3.png"
              alt
              className="img-fluid img"
            />
          </div>
          <div className="item-4">
            {" "}
            <img
              src={require("../../../assets/images/RAFFL4nIScjo.png")}
              srcOn="https://www.safaribuggyrental.com/wp-content/uploads/2021/06/our-gallery-4.png"
              alt
              className="img-fluid img"
            />
          </div>
          <div className="item-5">
            {" "}
            <img
              src={require("../../../assets/images/QK09jG4fhle1.png")}
              srcOn="https://www.safaribuggyrental.com/wp-content/uploads/2021/06/our-gallery-5.png"
              alt
              className="img-fluid img"
            />
          </div>
          <div className="item-6">
            {" "}
            <img
              src={require("../../../assets/images/BZUgqyqzMB6x.png")}
              srcOn="https://www.safaribuggyrental.com/wp-content/uploads/2021/06/our-gallery-6.png"
              alt
              className="img-fluid img"
            />
          </div>
          <div className="zoom-img">
            {" "}
            <img
              src={require("../../../assets/images/B6aqPSwCEL5O.png")}
              alt="Our Gallery"
              className="img-fluid focus"
              id="focus"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
