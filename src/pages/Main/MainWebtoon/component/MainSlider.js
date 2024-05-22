import React from "react";

const MainSlider = ({ webtoons }) => {
  console.log("aaa", webtoons);

  return (
    <div>
      <div
        style={{
          background: `url(${webtoons?.img})`,
          width: "100vw",
          height: "50vh",
        }}
      ></div>
      <h3>{webtoons?.title}</h3>
      <p>작가 | {webtoons?.author}</p>
      <p>관심 | {webtoons?.fanCount}만</p>
    </div>
  );
};

export default MainSlider;
