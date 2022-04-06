import React from "react";
import img1 from "../images/desktop/image-gallery-cone.jpg";
import img2 from "../images/desktop/image-gallery-milkbottles.jpg";
import img3 from "../images/desktop/image-gallery-orange.jpg";
import img4 from "../images/desktop/image-gallery-sugarcubes.jpg";
import "../styles/gallery.css";
export default function Gallery() {
  return (
    <section className="gallery--section">
      <img src={img1} alt="" />
      <img src={img2} alt="" />
      <img src={img3} alt="" />
      <img src={img4} alt="" />
    </section>
  );
}
