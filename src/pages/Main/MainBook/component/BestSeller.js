import React from "react";
import { styled } from "styled-components";
import BestBook from "./BestBook";
import BookItem from "./BookItem";

const BestBookWrap = styled.div``;

const ItemWrap = styled.div`
  /* width: 100%; */
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 100px;
  overflow-y: hidden;
`;

// 현재시간함수
const days = ["일", "월", "화", "수", "목", "금", "토"];
const date = new Date();
const month = String(date.getMonth() + 1).padStart(2, "0");
const day = String(date.getDate()).padStart(2, "0");
const week = days[date.getDay()];

const BestSeller = ({ bestseller }) => {
  return (
    <BestBookWrap>
      <h1>지금! 베스트 셀러 TOP 10</h1>
      <p>
        {month}월 {day}일 {week}요일 업데이트
      </p>
      <ItemWrap>
        {bestseller.map((book, idx) => (
          <BookItem key={idx} book={book} />
        ))}
      </ItemWrap>
    </BestBookWrap>
  );
};

export default BestSeller;
