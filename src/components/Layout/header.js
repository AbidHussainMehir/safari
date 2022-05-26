export default function Header() {
  return (
    <div className="top_sticky">
      <div className="container">
        <div className="header-top">
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
          <ul className="getin-touch">
            <li>
              <a
                href="mailto:info@safarimotorcyclerental.com"
                className="email"
              >
                info@safarimotorcyclerental.com
              </a>
            </li>
            <li>
              <a href="tel:+971508899039" className="call">
                +971 508899039{" "}
              </a>
            </li>

            <li>
              <a href="https://wa.link/h7czx1" className="chat" target="_blank">
                +971 508899039
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/place/Safari+motorcycle+rental/@24.959204,55.702285,16z/data=!4m5!3m4!1s0x0:0x2e0cda7b204f4647!8m2!3d24.9592713!4d55.7022734?hl=en"
                className="location"
              >
                Sharjah, United Arab Emirates
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
