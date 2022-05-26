export default function Nav({ page }) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light navbar-fixed-top ${
        page === "home" && "navbar-home"
      }`}
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src={require("../../assets/images/vg2F1t3QfcuR.png")}
            alt="Logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <a
                className={`nav-link ${page === "home" && "active"} `}
                href="/"
              >
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${page === "about" && "active"}`}
                href="/about-us"
              >
                ABOUT US
              </a>
            </li>
            <li className="nav-item sub-menu">
              <a
                className={`nav-link ${page === "tours" && "active"}`}
                href="/tour"
              >
                TOURS
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="/buggy">
                  <img
                    src={require("../../assets/images/rCog5P1YlIOn.png")}
                    className="img-fluid"
                  />
                  <div>
                    <h4>Buggy</h4>
                    <p>Enjoy the real charm of desert</p>
                  </div>
                </a>
                <a className="dropdown-item" href="/quad-biking">
                  <img
                    src={require("../../assets/images/bStKVwVzVs8g.png")}
                    className="img-fluid"
                  />
                  <div>
                    <h4>Quad Biking</h4>
                    <p>A drive of your life time</p>
                  </div>
                </a>
                <a className="dropdown-item" href="/tours/camel-ride/">
                  <img
                    src={require("../../assets/images/XE9HAooMULr8.png")}
                    className="img-fluid"
                  />
                  <div>
                    <h4>Camel Ride</h4>
                    <p>Dive into the Arabic tradition</p>
                  </div>
                </a>
                <a
                  className="dropdown-item"
                  href="/tours/take-a-snap-with-falcon"
                >
                  <img
                    src={require("../../assets/images/sDejwCxirHEa.png")}
                    className="img-fluid"
                  />
                  <div>
                    <h4>Snap With Eagle</h4>
                    <p>Take home evergreen memories</p>
                  </div>
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${page === "gallery" && "active"}`}
                href="/gallery"
              >
                GALLERY
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${page === "contact" && "active"}`}
                href="/contact"
              >
                CONTACT
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <div className="menu-icon"></div>
          </form>
        </div>
      </div>
    </nav>
  );
}
