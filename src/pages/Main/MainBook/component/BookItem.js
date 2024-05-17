import React from "react";
import { styled } from "styled-components";

const BookWrap = styled.div``;

const BookItem = () => {
  return (
    <BookWrap>
      <div>
        <div>책 이미지</div>
        <span>하트</span>
      </div>
      <p>Title</p>
      <p>author</p>
    </BookWrap>
  );
};

export default BookItem;
