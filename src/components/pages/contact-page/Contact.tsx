import "./contact.css";

const Contact = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      ></link>
      <div className="container">
        <div className="header">
          <h1>We're Here to Help You!</h1>
          <p>
            Have questions or need assistance? Our team is ready to help you
            find the perfect stay. Whether it's booking support, inquiries about
            listings, or any other concerns, we're just a message away!
          </p>
        </div>

        <div className="form-container justify-evenly items-start w-full">
          <div className="contact-info flex">
            <h2 className="w-full text-left">
              CONTACT
              <br />
              US
            </h2>
            <div className="contact-details">
              <div className="contact-item">
                <a className="fa-solid fa-headset mr-2"></a>
                <span className="contact-text">+91 91856 XXXXX</span>
              </div>
              <div className="contact-item">
                <a className="fa-solid fa-envelope-open-text mr-3"></a>
                <a href="mailto:homify@gmail.com" className="contact-text">
                  homify@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form flex">
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="form-group form-row">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Phone No."
                  required
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
