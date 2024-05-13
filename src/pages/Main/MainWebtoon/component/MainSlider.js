import React from "react";

const MainSlider = ({ webtoons }) => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${webtoons?.img})`,
          width: "200px",
          height: "280px",
        }}
      ></div>
      <p>{webtoons?.title}</p>
    </div>
  );
};

export default MainSlider;
