import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
import "../styles/footer.css";

export default function Footer({ target }) {
  return (
    <footer>
      <div className="footer-nav">
        <h1>sunnyside</h1>
        <ul className="footer-list">
          <li>
            <a href={target}>About</a>
          </li>
          <li>
            <a href={target}>Services</a>
          </li>
          <li>
            <a href={target}>Projects</a>
          </li>
        </ul>
      </div>
      <div className="footer--icons">
        <i>
          <FaFacebookSquare />
        </i>
        <i>
          <FaInstagram />
        </i>
        <i>
          <FaTwitter />
        </i>
        <i>
          <FaPinterest />
        </i>
      </div>
    </footer>
  );
}
