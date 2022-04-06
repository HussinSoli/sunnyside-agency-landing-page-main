import React from "react";
export default function InfoCard({ title, info, img, colorFont }) {
  return (
    <div className="card--info" style={{ backgroundImage: `url(${img})` }}>
      <h3 style={{ color: `${colorFont}` }}>{title}</h3>
      <p style={{ color: `${colorFont}` }}>{info}</p>
    </div>
  );
}
