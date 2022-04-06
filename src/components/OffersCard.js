import React from "react";
export default function offersCard({
  title,
  info,
  colorShadow,
  target,
  classEgg,
}) {
  return (
    <div className="offers--card">
      <h2>{title}</h2>
      <p>{info}</p>
      <div className="link">
        <a href={target}>Learn More</a>
        <div
          className="underline"
          style={{ backgroundColor: `${colorShadow}` }}
        ></div>
      </div>
    </div>
  );
}
