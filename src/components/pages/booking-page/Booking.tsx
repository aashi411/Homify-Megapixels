import "./booking.css";

const Booking = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      ></link>
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-text">
            BOOKING
          </div>
          <div className="laptop-image">
            {/*Image of laptop with booking interface and plant are part of the background */}
          </div>
        </div>
      </section>

      {/*Main Content */}
      <div className="container">
        {/*Property Images Grid */}
        <div className="property-grid">
          <img src="/room3.png" alt=" Exterior" className="property-image" />
          <img
            src="/room1.png"
            alt="Room Interior"
            className="property-image"
          />
          <img
            src="/room2.png"
            alt="Room Interior"
            className="property-image"
          />
          <img src="/room4.jpg" alt="Exterior" className="property-image" />
        </div>

        {/* Two Column Layout */}
        <div className="main-content">
          <div className="left-column">
            <div className="property-details">
              <h2>Property Details</h2>
              <div className="star-rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="price">Rs. 20,000/month</div>
              <div className="description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>

            <div className="room-features">
              <h3>Room Features</h3>
              <div className="feature-icons">
                <div className="feature">
                  <i className="fas fa-concierge-bell"></i>
                  <span>Room Service</span>
                </div>
                <div className="feature">
                  <i className="fas fa-wifi"></i>
                  <span>WiFi</span>
                </div>
                <div className="feature">
                  <i className="fas fa-tshirt"></i>
                  <span>Laundry</span>
                </div>
                <div className="feature">
                  <i className="fas fa-wind"></i>
                  <span>Air-Conditioned</span>
                </div>
              </div>
              <div className="urgency-message">Only few rooms left! Hurry!</div>
            </div>
          </div>

          {/*Right Column */}
          <div className="right-column">
            <div className="booking-form">
              <h2>BOOK A ROOM</h2>
              <form>
                <div className="form-group">
                  <select id="stayDuration" className="form-control">
                    <option value="">Select Stay Duration</option>
                    <option value="1month">1 Month</option>
                    <option value="3months">3 Months</option>
                    <option value="6months">6 Months</option>
                    <option value="12months">12 Months</option>
                  </select>
                </div>

                <div className="form-group">
                  <select id="roomType" className="form-control">
                    <option value="">Select Room Type</option>
                    <option value="single">Single Room</option>
                    <option value="double">Double Room</option>
                    <option value="suite">Suite</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="checkIn">Check-in Date</label>
                  <div className="date-input">
                    <input
                      type="date"
                      id="checkIn"
                      className="form-control"
                      value="2025-03-30"
                    ></input>
                    <i className="far"></i>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="checkOut">Check-out Date</label>
                  <div className="date-input">
                    <input
                      type="date"
                      id="checkOut"
                      className="form-control"
                      value="2025-03-30"
                    ></input>
                    <i className="far"></i>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="adults">Adults</label>
                  <input
                    type="number"
                    id="adults"
                    className="form-control"
                    placeholder="Enter number of adults"
                  ></input>
                </div>
              </form>
            </div>

            <div className="booking-summary">
              <h3>Booking Summary & Confirmation</h3>
              <div className="summary-item">
                <span className="summary-label">Hostel Name:</span>
                <span className="summary-value"></span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Address:</span>
                <span className="summary-value"></span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Room Type:</span>
                <span className="summary-value"></span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Price:</span>
                <span className="summary-value"></span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Selected Stay Duration:</span>
                <span className="summary-value"></span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Adults:</span>
                <span className="summary-value"></span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Adult 1:</span>
                <span className="summary-value"></span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Adult 2:</span>
                <span className="summary-value"></span>
              </div>

              <button type="button" className="btn-submit">
                Confirm & Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
