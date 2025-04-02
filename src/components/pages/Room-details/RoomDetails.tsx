import "./room-detail.css";

import myImage from "/roomdetail-new.png";
import myImage1 from "/room1.png";
import myImage2 from "/house2.png";
import myImage3 from "/room4.jpg";

const RoomDetails = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      ></link>

      <main>
        <section className="header-content">
          <img src={myImage} alt="Housing Property" />
        </section>

        {/*Room Card 1*/}
        <div className="room-details">
          <div className="container">
            <div className="room-images">
              <img src={myImage1} alt="Room Image" />
            </div>

            <div className="property-card">
              {/*Rating Stars*/}
              <div className="rating">
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star empty">★</span>
              </div>

              {/*Room Details*/}
              <h2 className="property-title">Room Details</h2>

              <div className="location">
                Location <i className="fas fa-map-marker-alt location-icon"></i>
              </div>

              <p className="amenities">
                Amenities: Laundry, AC, Food, WiFi, Gym, Security, 24×7
                Electricity
              </p>

              {/*Info buttons grid*/}
              <div className="button-grid">
                <button className="info-button">
                  All Room Details
                  <br />
                  Summary
                </button>
                <button className="info-button">Virtual Room Tour</button>
                <button className="info-button">Nearby Facilities</button>
                <button className="info-button">Pricing & Lease Details</button>
              </div>

              {/*Action Buttons*/}
              <div className="action-buttons">
                <button className="action-button book-button">
                  <a href="/booking">BOOK NOW</a>
                </button>
                <button className="action-button">Schedule a Visit</button>
                <button className="action-button">Compare</button>
              </div>
            </div>
          </div>
        </div>

        {/*Room card-2*/}
        <div className="room-details">
          <div className="container">
            <div className="property-card">
              {/*Rating Stars*/}
              <div className="rating">
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star empty">★</span>
                <span className="star empty">★</span>
              </div>

              {/*Room Details*/}
              <h2 className="property-title">Room Details</h2>

              <div className="location">
                Location <i className="fas fa-map-marker-alt location-icon"></i>
              </div>

              <p className="amenities">
                Amenities: Laundry, AC, Food, WiFi, Gym, Security, 24×7
                Electricity
              </p>

              {/* Info buttons grid */}
              <div className="button-grid">
                <button className="info-button">
                  All Room Details
                  <br />
                  Summary
                </button>
                <button className="info-button">Virtual Room Tour</button>
                <button className="info-button">Nearby Facilities</button>
                <button className="info-button">Pricing & Lease Details</button>
              </div>

              {/*Action buttons */}
              <div className="action-buttons">
                <button className="action-button book-button">
                  <a href="/booking">BOOK NOW</a>
                </button>
                <button className="action-button">Schedule a Visit</button>
                <button className="action-button">Compare</button>
              </div>
            </div>
            <div className="room-images">
              <img src={myImage2} alt="Room Image" />
            </div>
          </div>
        </div>

        {/*Room card-3*/}
        <div className="room-details">
          <div className="container">
            <div className="room-images">
              <img src={myImage3} alt="Room Image" />
            </div>

            <div className="property-card">
              {/*Rating stars*/}
              <div className="rating">
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star empty">★</span>
              </div>

              {/*Room Details*/}
              <h2 className="property-title">Room Details</h2>

              <div className="location">
                Location <i className="fas fa-map-marker-alt location-icon"></i>
              </div>

              <p className="amenities">
                Amenities: Laundry, AC, Food, WiFi, Gym, Security, 24×7
                Electricity
              </p>

              {/*Info Buttons Grid*/}
              <div className="button-grid">
                <button className="info-button">
                  All Room Details
                  <br />
                  Summary
                </button>
                <button className="info-button">Virtual Room Tour</button>
                <button className="info-button">Nearby Facilities</button>
                <button className="info-button">Pricing & Lease Details</button>
              </div>

              {/*Action Buttons*/}
              <div className="action-buttons">
                <button className="action-button book-button">
                  <a href="/booking">BOOK NOW</a>
                </button>
                <button className="action-button">Schedule a Visit</button>
                <button className="action-button">Compare</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RoomDetails;
