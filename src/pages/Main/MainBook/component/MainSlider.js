import React from "react";
import { styled } from "styled-components";

// const MainBg

const MainSlider = ({ bestseller }) => {
  console.log(bestseller);
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bestseller?.cover})`,
          width: "200px",
          height: "280px",
        }}
      ></div>
      <p>{bestseller?.title}</p>
    </div>
  );
};

export default MainSlider;
