import React from "react";
import "../styles/testimonials.css";
export default function TestimonyCard({ img, name, tesyimony, job }) {
  return (
    <div className="test--card">
      <img src={img} alt="" />
      <p>{tesyimony}</p>
      <h4>{name}</h4>
      <p id="job">{job}</p>
    </div>
  );
}
