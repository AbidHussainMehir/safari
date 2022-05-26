export default function Form() {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <h1>Contact</h1>
            <ul>
              <li>
                <a href className="location">
                  Sharjah, United Arab Emirates
                </a>
              </li>
              <li>
                <a href className="call">
                  +971 508899039
                </a>
              </li>
              <li>
                <a href className="chat">
                  +971 508899039
                </a>
              </li>
              <li>
                <a href="info@safarimotorcyclerental.com" className="email">
                  info@safarimotorcyclerental.com
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-5">
            <div className="form">
              <div
                role="form"
                className="wpcf7"
                id="wpcf7-f5-o1"
                lang="en-US"
                dir="ltr"
              >
                <div className="screen-reader-response">
                  <p role="status" aria-live="polite" aria-atomic="true"></p>
                  <ul></ul>
                </div>
                <form className="wpcf7-form init">
                  <div style={{ display: "none" }}>
                    <input type="hidden" name="_wpcf7" value="5" />
                    <input type="hidden" name="_wpcf7_version" value="5.4.1" />
                    <input type="hidden" name="_wpcf7_locale" value="en_US" />
                    <input
                      type="hidden"
                      name="_wpcf7_unit_tag"
                      value="wpcf7-f5-o1"
                    />
                    <input
                      type="hidden"
                      name="_wpcf7_container_post"
                      value="0"
                    />
                    <input type="hidden" name="_wpcf7_posted_data_hash" />
                  </div>
                  <div className="form-group">
                    <label for="inputName">Name</label>
                    <br />
                    <span className="wpcf7-form-control-wrap text-113">
                      <input
                        type="text"
                        name="text-113"
                        size="40"
                        className="wpcf7-form-control wpcf7-text form-control"
                        aria-invalid="false"
                      />
                    </span>
                  </div>
                  <div className="form-group">
                    <label for="inputEmail3">Email</label>
                    <br />
                    <span className="wpcf7-form-control-wrap email-160">
                      <input
                        type="email"
                        name="email-160"
                        size="40"
                        className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-email form-control"
                        aria-invalid="false"
                      />
                    </span>
                  </div>
                  <div className="form-group">
                    <label for="inputMobile">Mobile</label>
                    <br />
                    <span className="wpcf7-form-control-wrap text-859">
                      <input
                        type="text"
                        name="text-859"
                        size="40"
                        className="wpcf7-form-control wpcf7-text form-control"
                        aria-invalid="false"
                      />
                    </span>
                  </div>
                  <div className="form-group">
                    <label for="Message">Message</label>
                    <br />
                    <span className="wpcf7-form-control-wrap textarea-10">
                      <textarea
                        name="textarea-10"
                        cols="40"
                        rows="10"
                        className="wpcf7-form-control wpcf7-textarea form-control"
                        aria-invalid="false"
                      ></textarea>
                    </span>
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Send Message"
                      className="wpcf7-form-control wpcf7-submit btn btn-danger"
                    />
                  </div>
                  <div
                    className="wpcf7-response-output"
                    aria-hidden="true"
                  ></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
