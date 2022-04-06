import React from "react";
import imgArrow from "../images/icon-arrow-down.svg";
import "../styles/hero.css";
export default function Hero() {
  return (
    <section className="Hero--section">
      <h1>We are creatives</h1>
      <img src={imgArrow} alt="" />
    </section>
  );
}
