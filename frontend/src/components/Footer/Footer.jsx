import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import "./Footer.scss";

function Footer() {
  return (
    <div>
      <div className="footer">
        <ul className="footer2">
          <li className="footer3">
            <a
              href="https://fr-fr.facebook.com/"
              className="logofooter"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookSquare />
            </a>
          </li>
          <li className="footer3">
            <a
              href="https://github.com/"
              className="logofooter"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubSquare />
            </a>
          </li>
          <li className="footer3">
            <a
              href="https://twitter.com/"
              className="logofooter"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitterSquare />
            </a>
          </li>
        </ul>
        <div className="copyright"> © Wild Code School 2023</div>
      </div>
    </div>
  );
}

export default Footer;
