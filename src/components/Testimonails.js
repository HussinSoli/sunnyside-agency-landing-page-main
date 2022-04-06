import React from "react";
import TestimonyCard from "./TestimonyCard";
import imgUser1 from "../images/image-emily.jpg";
import imgUser3 from "../images/image-jennie.jpg";
import imgUser2 from "../images/image-thomas.jpg";
import "../styles/testimonials.css";
export default function Testimonials() {
  return (
    <section className="Testimonials--section">
      <h1>Client Testimontials</h1>
      <div className="test--cards">
        <TestimonyCard
          img={imgUser1}
          tesyimony="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
          name="Emilly R."
          job="Marketing Director"
        />
        <TestimonyCard
          img={imgUser2}
          tesyimony="Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
          name="Thomas S."
          job="Chief Operating Officer"
        />
        <TestimonyCard
          img={imgUser3}
          tesyimony="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
          name="Jennie F."
          job=" Business Owner"
        />
      </div>
    </section>
  );
}
