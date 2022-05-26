export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <h5>About Company</h5>
              <h6>safarimotorcyclerental</h6>
              <p>
                If you want to experience something unconventional on your
                holiday, opt for a unique motorcycle tour , that will give you
                an adventure of a lifetime.
              </p>
            </div>
            <div className="col-lg-2 col-md-6 marg0_ d-none d-sm-block">
              <h5>Quick Links</h5>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about-us">About Us</a>
                </li>
                <li>
                  <a href="/tour">Tours</a>
                </li>
                <li>
                  <a href="/gallery">Gallery</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 get d-none d-sm-block">
              <h5>Get in Touch</h5>
              <ul className="getin-touch">
                <li>
                  <a
                    href="https://www.google.com/maps/place/Safari+motorcycle+rental/@24.959204,55.702285,16z/data=!4m5!3m4!1s0x0:0x2e0cda7b204f4647!8m2!3d24.9592713!4d55.7022734?hl=en"
                    className="location"
                  >
                    Sharjah, United Arab Emirates
                  </a>
                </li>
                <li>
                  <a href="tel:+971508899039" className="call">
                    +971 508899039
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.link/h7czx1"
                    className="chat"
                    target="_blank"
                  >
                    +971 508899039
                  </a>
                </li>
                <li>
                  <a href className="email">
                    info@safarimotorcyclerental.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-xs-6 qlink_ d-block d-sm-none">
              <h5>Quick Links</h5>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about-us/">About Us</a>
                </li>
                <li>
                  <a href="/tour/">Tours</a>
                </li>
                <li>
                  <a href="/gallery/">Gallery</a>
                </li>
                <li>
                  <a href="/contact/">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-xs-6 qlink d-block d-sm-none">
              <h5>Get in Touch</h5>
              <ul className="getin-touch">
                <li>
                  <a
                    href="https://www.google.com/maps/place/Safari+motorcycle+rental/@24.959204,55.702285,16z/data=!4m5!3m4!1s0x0:0x2e0cda7b204f4647!8m2!3d24.9592713!4d55.7022734?hl=en"
                    className="location"
                  >
                    Sharjah, United Arab Emirates
                  </a>
                </li>
                <li>
                  <a href="tel:+971 508899039" className="call">
                    +971 508899039
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.link/h7czx1"
                    className="chat"
                    target="_blank"
                  >
                    +971 508899039
                  </a>
                </li>
                <li>
                  <a href className="email">
                    info@safarimotorcyclerental.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6">
              <h5>Instagram</h5>
              <ul className="instagram-list">
                <li>
                  <a
                    href="https://www.instagram.com/safari.m.r/"
                    target="_blank"
                  >
                    {" "}
                    <img
                      src={require("../../assets/images/HWo5KoSlBjDG.jpg")}
                      alt
                    />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/safari.m.r/"
                    target="_blank"
                  >
                    {" "}
                    <img
                      src={require("../../assets/images/yuY6OwDloyVv.jpg")}
                      alt
                    />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/safari.m.r/"
                    target="_blank"
                  >
                    {" "}
                    <img
                      src={require("../../assets/images/y7sXf9XRVrYp.jpg")}
                      alt
                    />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/safari.m.r/"
                    target="_blank"
                  >
                    {" "}
                    <img
                      src={require("../../assets/images/cVeVkpcHUIgg.jpg")}
                      alt
                    />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/safari.m.r/"
                    target="_blank"
                  >
                    {" "}
                    <img
                      src={require("../../assets/images/xwEtnUrViE4a.jpg")}
                      alt
                    />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/safari.m.r/"
                    target="_blank"
                  >
                    {" "}
                    <img
                      src={require("../../assets/images/XYCPqPwnrn2w.jpg")}
                      alt
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer__bottom">
        <div className="container">
          <p>
            @ All copyright 2021, <span>Safari Motor Cycle Rental</span>.
            Powered by{" "}
            <a href="https://www.coralwebconcept.com" target="_blank">
              <span>
                Coral Web Concept<span></span>
              </span>
            </a>
          </p>
          <ul className="social-media">
            <li>
              <a
                href="https://www.facebook.com/Safarimrmadam/"
                className="facebook"
                target="_blank"
              ></a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/safari.m.r/"
                className="instagram"
                target="_blank"
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
