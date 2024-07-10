import React from "react";
import { styled } from "styled-components";
import BestBook from "./BestBook";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 20px;
  padding: 0 20px;
  overflow: hidden;
`;

const Title = styled.div`
  h1 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  P {
    font-size: 12px;
    color: #888;
    margin: 0;
  }
`;

const ItemWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 100px;
  overflow-x: scroll;
  cursor: pointer;
  &::-webkit-scrollbar {
    display: none;
  }
`;

// 현재시간함수
const days = ["일", "월", "화", "수", "목", "금", "토"];
const date = new Date();
const month = String(date.getMonth() + 1).padStart(2, "0");
const day = String(date.getDate()).padStart(2, "0");
const week = days[date.getDay()];

const BestSeller = ({ bestseller }) => {
  return (
    <Container>
      <Title>
        <h1>지금! 베스트 셀러 TOP 10</h1>
        <p>
          {month}월 {day}일 {week}요일 업데이트
        </p>
      </Title>
      <ItemWrap>
        {bestseller.map((best, idx) => (
          <BestBook key={idx} best={best} />
        ))}
      </ItemWrap>
    </Container>
  );
};

export default BestSeller;
