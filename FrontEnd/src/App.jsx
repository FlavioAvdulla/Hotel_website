import React, { useState } from "react";
import NavbarTop from "./components/NavbarTop/NavbarTop";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavbarBottom from "./components/NavbarBottom/NavbarBottom";
import Header from "./components/Home/Header/Header";
import HotelBayView from "./components/Home/HotelBayView/HotelBayView";
import BestRooms from "./components/Home/BestRooms/BestRooms";
import HotelLocation from "./components/Home/HotelLocation/HotelLocation";
import Restaurant from "./components/Home/Restaurant/Restaurant";
import HotelVideo from "./components/Home/HotelVideo/HotelVideo";
import HotelNews from "./components/Home/HotelNews/HotelNews";
import Hotel_Footer from "./components/Hotel_Footer/Hotel_Footer";
import Rooms from "./components/Pages/Rooms/Rooms";
import AboutUs from "./components/Pages/AboutUs/AboutUs";
import Contacts from "./components/Pages/Contacts/Contacts";
import Login from "./components/Pages/Login/Login";
import Signup from "./components/Pages/Signup/Signup";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
      {showLogin && <Login path="/login" setShowLogin={setShowLogin} setShowSignup={setShowSignup} />}
      {showSignup && <Signup path="/signup" setShowSignup={setShowSignup} setShowLogin={setShowLogin} />}
      <div className="app">
        <Router>
          <NavbarTop setShowLogin={setShowLogin} />
          <NavbarBottom />
          <Routes>
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/" element={
              <>
                <Header />
                <HotelBayView />
                <BestRooms />
                <HotelLocation />
                <Restaurant />
                <HotelVideo />
                <HotelNews />
              </>
            } />
          </Routes>
          <Hotel_Footer />
        </Router>
      </div>
    </>
  );
};

export default App;
