import React from "react";
import { styled } from "styled-components";

const BookWrap = styled.div`
  height: 100%;
  p:nth-of-type(1) {
    font-weight: bold;
    font-size: 12px;
    margin: 0;
  }
  p:nth-of-type(2) {
    font-size: 10px;
    margin: 0;
  }
`;

const BookImg = styled.div`
  width: 120px;
  height: 180px;
  position: relative;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  span {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

const BestBook = ({ best }) => {
  return (
    <BookWrap>
      <BookImg>
        <img src={best?.cover} />
      </BookImg>
      <p>{best?.title.split("-", 1)}</p>
      <p>{best?.author.split(" ", 1)} 저자</p>
    </BookWrap>
  );
};

export default BestBook;
