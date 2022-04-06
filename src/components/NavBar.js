import React from "react";
import ButtonCustom from "../shared/ButtonCustom";
import imgDropNav from "../images/icon-hamburger.svg";
import Media from "react-media";

export default function NavBar({ img, target, onDropNav = (f) => f, hidden }) {
  return (
    <Media query="(min-width: 600px)">
      {(matches) => {
        return matches ? (
          <nav>
            <img src={img} alt="" id="logo" />
            <ul className="desk-list">
              <li>
                <a href={target}>About</a>
              </li>
              <li>
                <a href={target}>Services</a>
              </li>
              <li>
                <a href={target}>Projects</a>
              </li>
              <li>
                <ButtonCustom btnClass="primary" content="Contact" />
              </li>
            </ul>
          </nav>
        ) : (
          <nav>
            <img src={img} alt="" id="logo" />
            <div className="nav-bar">
              <img
                src={imgDropNav}
                alt=""
                id="drop-list"
                onClick={() => onDropNav()}
              />

              <div className="list-container">
                <ul
                  className={`nav-list mobile-lsit ${hidden ? "hidden" : ""}`}
                >
                  <li>
                    <a href={target}>About</a>
                  </li>
                  <li>
                    <a href={target}>Services</a>
                  </li>
                  <li>
                    <a href={target}>Projects</a>
                  </li>
                  <li>
                    <ButtonCustom content="Contact" btnClass="secondary" />
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        );
      }}
    </Media>
  );
}
