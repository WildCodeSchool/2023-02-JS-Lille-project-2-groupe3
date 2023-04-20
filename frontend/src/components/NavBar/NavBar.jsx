import React from "react";
import { Link } from "react-router-dom";
import "./NavBarStyle.scss";

function NavBar() {
  return (
    <div>
      <nav>
        <div className="navcontainer1">
          <div className="">
            <h1 className="navtitle">SpaceW</h1>
          </div>
          <div>
            <img
              src="/src/components/NavBar/images/logonav.png"
              alt="logo"
              className="navlogo"
            />
          </div>
          <div className="navbardeskstop">
            <ul className="navbar">
              <li className="navli">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Booking-form">Booking</Link>
              </li>
              <li>
                <Link to="/About-us">About Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navcontainer2">
          <div>
            <h2 className="navtitle2">Ticket Sale - Space Travel</h2>
          </div>
          <div>
            <p className="navtexte">
              Transporter 7 missions is a dedicated rideshare flight to a
              sun-synchronous orbit with dozens of small microsatellites
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
