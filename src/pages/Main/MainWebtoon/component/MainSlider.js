import React from "react";

const MainSlider = ({ webtoons }) => {
  console.log("aaa", webtoons);

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${webtoons?.img})`,
          width: "400px",
          height: "600px",
        }}
      ></div>
      <p>{webtoons?.title}</p>
    </div>
  );
};

export default MainSlider;
