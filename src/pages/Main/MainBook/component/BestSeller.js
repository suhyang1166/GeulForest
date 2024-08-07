import React from "react";
import { styled } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";
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

const ItemWrap = styled(Swiper)`
  width: 100%;
  height: 400px;
  margin-bottom: 100px;
`;

const Items = styled(SwiperSlide)`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: calc((100% - 40px) / 3) !important;
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
        <h1>지금! 베스트 셀러 TOP 15</h1>
        <p>
          {month}월 {day}일 {week}요일 업데이트
        </p>
      </Title>
      <ItemWrap
        grid={{
          rows: 3,
        }}
        spaceBetween={20}
        breakpoints={{
          430: {
            slidesPerView: 1.5,
          },
          0: {
            slidesPerView: 1.2,
          },
        }}
        modules={[Grid, Pagination]}
      >
        {bestseller.map((best, idx) => (
          <Items key={idx}>
            <BestBook best={best} />
          </Items>
        ))}
      </ItemWrap>
    </Container>
  );
};

export default BestSeller;
