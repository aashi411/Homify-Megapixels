import { HeroUIProvider } from "@heroui/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import LandingPage from "./components/pages/landing-page/LandingPage.tsx";

import "./index.css";
import Navbar from "./components/global/Navbar.tsx";
import Footer from "./components/global/Footer.tsx";
import Listing from "./components/pages/property-listing/Listing.tsx";
import Booking from "./components/pages/booking-page/Booking.tsx";
import Login from "./components/pages/login-page/Login.tsx";
import RoomDetails from "./components/pages/Room-details/RoomDetails.tsx";
import Contact from "./components/pages/contact-page/Contact.tsx";
import Register from "./components/pages/registration-page/Register.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <HeroUIProvider>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <LandingPage />
                <Footer />
              </>
            }
          />

          <Route
            path="/login"
            element={
              <>
                <Navbar />
                <Login />
                <Footer />
              </>
            }
          />

          <Route
            path="/properties"
            element={
              <>
                <Navbar />
                <Listing />
                <Footer />
              </>
            }
          />

          <Route
            path="/booking"
            element={
              <>
                <Navbar />
                <Booking />
                <Footer />
              </>
            }
          />

          <Route
            path="/room-detail"
            element={
              <>
                <Navbar />
                <RoomDetails />
                <Footer />
              </>
            }
          />

          <Route
            path="/contact"
            element={
              <>
                <Navbar />
                <Contact />
                <Footer />
              </>
            }
          />

          <Route
            path="/register"
            element={
              <>
                <Navbar />
                <Register />
                <Footer />
              </>
            }
          />

          <Route
            path="*"
            element={
              <div className="text-5xl font-bold text-textColor1 h-screen w-full justify-center items-center flex">
                Not Found
              </div>
            }
          />
        </Routes>
      </HeroUIProvider>
    </BrowserRouter>
  </StrictMode>
);
