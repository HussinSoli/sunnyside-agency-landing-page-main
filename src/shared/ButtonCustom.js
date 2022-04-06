import React from "react";
import "../styles/button-custom.css";
export default function ButtonCustom({ content, btnClass }) {
  return <button className={btnClass}>{content}</button>;
}
