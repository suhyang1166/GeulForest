import React from "react";
import { styled } from "styled-components";
import Heart from "../../../../components/Heart/Heart";

const BookWrap = styled.div`
  height: 100%;
  p:nth-of-type(1) {
    font-weight: bold;
    font-size: 12px;
    margin: 0;
    margin-top: 8px;
  }
  p:nth-of-type(2) {
    font-size: 10px;
    margin: 0;
    line-height: 10px;
  }
`;

const BookImg = styled.div`
  width: 120px;
  height: 180px;
  position: relative;
  box-shadow: 0 0 2px #d9d9d9;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  span {
    width: 15px;
    height: 15px;
    position: absolute;
    top: 5px;
    right: 5px;
    text-shadow: 0 0 10px red;
    cursor: pointer;
  }
`;

const BookMark = ({ book }) => {
  return (
    <BookWrap>
      <BookImg>
        <img src={book?.cover} />
        <div>
          <Heart bookTitle={book} />
        </div>
      </BookImg>
      <p>{book?.title.split("-", 1)}</p>
      <p>{book?.author.split(" ", 1)} 저자</p>
    </BookWrap>
  );
};

export default BookMark;
