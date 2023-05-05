import React from "react";
import { Link } from "react-router-dom";
import "./NavBarStyle.scss";

function NavBar() {
  return (
    <div>
      <nav>
        <div className="navcontainer1">
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
                <Link to="/About-us">About Us</Link>
              </li>
              <li>
                <Link to="/ConfirmationPage/1">Booking</Link>
              </li>
            </ul>
            <h2 className="navtitle2">Ticket Sale - Space Travel</h2>
          </div>
        </div>
        <div className="navcontainer2">
          <div />
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
