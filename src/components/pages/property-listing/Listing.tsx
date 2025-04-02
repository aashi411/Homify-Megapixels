import "./listing.css";

import myImage1 from "/room2.png";
import myImage2 from "/house3.jpg";
import myImage3 from "/room3.png";
import myImage4 from "/house6.jpg";
import myImage5 from "/house5.jpg";
import myImage6 from "/house4.jpg";

const Listing = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      ></link>
      {/*- Banner Section */}
      <section className="banner">
        <img src={myImage2} alt="Housing Property" />
        {/* <div className="banner-"></div> */}
        <div className="w-full justify-start">
          <div className="w-full flex justify-start items-end">
            <h1 className="text-[#2D555D] w-full pt-28 text-left ml-32">
              PROPERTY
            </h1>
          </div>
          <div className="bg-[url('/terrace.jpg')] bg-cover w-full flex justify-start items-end">
            <h1 className="w-full text-left ml-32">LISTING</h1>
          </div>
        </div>
      </section>

      {/*Filter Section */}
      <section className="filter-section">
        <button className="filter-button">Location</button>
        <button className="filter-button">Price Range</button>
        <button className="filter-button">Amenities</button>
        <button className="filter-button">Ratings</button>
        <button className="filter-button">Hostel Type</button>
      </section>

      {/* Property Grid */}
      <section className="container">
        {/*Property card 1*/}
        <div className="card yellow-card">
          <div className="card-image">
            <img src={myImage1} alt="Yellow and blue themed hotel room" />
          </div>
          <div className="card-content">
            <p className="location">Location</p>
            <h2 className="property-name">Wanderer's Nest</h2>
            <div className="icon-row">
              <div className="icon-item">
                <a className="fas fa-tag"></a>
                <span>PRICE</span>
              </div>
              <div className="icon-item">
                <a href="/room-detail" className="fas fa-home"></a>
                <span>ROOMS</span>
              </div>
              <div className="icon-item">
                <a className="fas fa-star"></a>
                <span>RATINGS</span>
              </div>
              <div className="icon-item">
                <a href="/booking" className="flex flex-col">
                  <i className="far fa-calendar"></i>
                  <span>BOOKING</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Property card 2*/}
        <div className="card white-card">
          <div className="card-image">
            <img src={myImage2} alt="Blue themed hotel room" />
          </div>
          <div className="card-content">
            <p className="location">Location</p>
            <h2 className="property-name">Urban Retreat Hostel</h2>
            
            <div className="icon-row">
              <div className="icon-item">
                <a className="fas fa-tag"></a>
                <span>PRICE</span>
              </div>
              <div className="icon-item">
                <a href="/room-detail" className="fas fa-home"></a>
                <span>ROOMS</span>
              </div>
              <div className="icon-item">
                <a className="fas fa-star"></a>
                <span>RATINGS</span>
              </div>
              <div className="icon-item">
                <a href="/booking" className="flex flex-col">
                  <i className="far fa-calendar"></i>
                  <span>BOOKING</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/*Property card 3*/}
        <div className="card blue-card">
          <div className="card-image">
            <img src={myImage3} alt="Bunk bed hotel room" />
          </div>
          <div className="card-content">
            <p className="location">Location</p>
            <h2 className="property-name">Chill & Chill Hostel</h2>
            <div className="icon-row">
              <div className="icon-item">
                <a className="fas fa-tag"></a>
                <span>PRICE</span>
              </div>
              <div className="icon-item">
                <a href="/room-detail" className="fas fa-home"></a>
                <span>ROOMS</span>
              </div>
              <div className="icon-item">
                <a className="fas fa-star"></a>
                <span>RATINGS</span>
              </div>
              <div className="icon-item">
                <a href="/booking" className="flex flex-col">
                  <i className="far fa-calendar"></i>
                  <span>BOOKING</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/*Property card 4*/}
        <div className="card blue-card">
          <div className="card-image">
            <img src={myImage4} alt="Bunk bed hotel room" />
          </div>
          <div className="card-content">
            <p className="location">Location</p>
            <h2 className="property-name">Scholar's Heaven</h2>
            <div className="icon-row">
              <div className="icon-item">
                <a className="fas fa-tag"></a>
                <span>PRICE</span>
              </div>
              <div className="icon-item">
                <a href="/room-detail" className="fas fa-home"></a>
                <span>ROOMS</span>
              </div>
              <div className="icon-item">
                <a className="fas fa-star"></a>
                <span>RATINGS</span>
              </div>
              <div className="icon-item">
                <a href="/booking" className="flex flex-col">
                  <i className="far fa-calendar"></i>
                  <span>BOOKING</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/*Property card 5*/}
        <div className="card white-card">
          <div className="card-image">
            <img src={myImage5} alt="Blue themed hotel room" />
          </div>
          <div className="card-content">
            <p className="location">Location</p>
            <h2 className="property-name">Riverside Students Home</h2>
            <div className="icon-row">
              <div className="icon-item">
                <a className="fas fa-tag"></a>
                <span>PRICE</span>
              </div>
              <div className="icon-item">
                <a href="/room-detail" className="fas fa-home"></a>
                <span>ROOMS</span>
              </div>
              <div className="icon-item">
                <a className="fas fa-star"></a>
                <span>RATINGS</span>
              </div>
              <div className="icon-item">
                <a href="/booking" className="flex flex-col">
                  <i className="far fa-calendar"></i>
                  <span>BOOKING</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/*Property card 6*/}
        <div className="card yellow-card">
          <div className="card-image">
            <img src={myImage6} alt="Yellow and blue themed hotel room" />
          </div>
          <div className="card-content">
            <p className="location">Location</p>
            <h2 className="property-name">University Square Hostel</h2>
            <div className="icon-row">
              <div className="icon-item">
                <a className="fas fa-tag"></a>
                <span>PRICE</span>
              </div>
              <div className="icon-item">
                <a href="/room-detail" className="fas fa-home"></a>
                <span>ROOMS</span>
              </div>
              <div className="icon-item">
                <a className="fas fa-star"></a>
                <span>RATINGS</span>
              </div>
              <div className="icon-item">
                <a href="/booking" className="flex flex-col">
                  <i className="far fa-calendar"></i>
                  <span>BOOKING</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/*Property card 7*/}
        <div className="card yellow-card">
          <div className="card-image">
            <img src={myImage1} alt="Yellow and blue themed hotel room" />
          </div>
          <div className="card-content">
            <p className="location">Location</p>
            <h2 className="property-name">Home Away PG</h2>
            <div className="icon-row">
              <div className="icon-item">
                <a className="fas fa-tag"></a>
                <span>PRICE</span>
              </div>
              <div className="icon-item">
                <a href="/room-detail" className="fas fa-home"></a>
                <span>ROOMS</span>
              </div>
              <div className="icon-item">
                <a className="fas fa-star"></a>
                <span>RATINGS</span>
              </div>
              <div className="icon-item">
                <a href="/booking" className="flex flex-col">
                  <i className="far fa-calendar"></i>
                  <span>BOOKING</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Property card 8*/}
        <div className="card white-card">
          <div className="card-image">
            <img src={myImage2} alt="Blue themed hotel room" />
          </div>
          <div className="card-content">
            <p className="location">Location</p>
            <h2 className="property-name">Safe Heaven PG</h2>
            <div className="icon-row">
              <div className="icon-item">
                <a className="fas fa-tag"></a>
                <span>PRICE</span>
              </div>
              <div className="icon-item">
                <a href="/room-detail" className="fas fa-home"></a>
                <span>ROOMS</span>
              </div>
              <div className="icon-item">
                <a className="fas fa-star"></a>
                <span>RATINGS</span>
              </div>
              <div className="icon-item">
                <a href="/booking" className="flex flex-col">
                  <i className="far fa-calendar"></i>
                  <span>BOOKING</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/*Property card 9*/}
        <div className="card blue-card">
          <div className="card-image">
            <img src={myImage3} alt="Bunk bed hotel room" />
          </div>
          <div className="card-content">
            <p className="location">Location</p>
            <h2 className="property-name">City Light PG</h2>
            <div className="icon-row">
              <div className="icon-item">
                <a className="fas fa-tag"></a>
                <span>PRICE</span>
              </div>
              <div className="icon-item">
                <a href="/room-detail" className="fas fa-home"></a>
                <span >ROOMS</span>
              </div>
              <div className="icon-item">
                <a className="fas fa-star"></a>
                <span>RATINGS</span>
              </div>
              <div className="icon-item">
                <a href="/booking" className="flex flex-col">
                  <i className="far fa-calendar"></i>
                  <span>BOOKING</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Listing;
