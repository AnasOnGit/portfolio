import React from "react";

function Banner({ text }) {
  return (
    <div className="big-banner">
      <div className="banner-text">{text}</div>
    </div>
  );
}

export default Banner;
