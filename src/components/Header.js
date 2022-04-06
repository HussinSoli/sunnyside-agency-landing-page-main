import React from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import "../styles/Header.css";
import navImg from "../images/logo.svg";
export default function Header({
  onDropNav = (f) => f,

  hidden,
}) {
  return (
    <header>
      <NavBar img={navImg} onDropNav={onDropNav} hidden={hidden} />
      <Hero />
    </header>
  );
}
