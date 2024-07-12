import React from "react";
import { styled } from "styled-components";

const MainBg = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  height: 490px;
  background: url(${(props) => props.bestseller?.cover}) center / cover
    no-repeat;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 490px;
    background: rgba(0, 0, 0, 0.6);
  }
`;

const MainBook = styled.div`
  position: absolute;
  bottom: 65px;
  left: 50%;
  transform: translateX(-50%);
  width: 180px;
  height: 270px;
  background: url(${(props) => props.bestseller?.cover}) center / cover
    no-repeat;
  z-index: 3;
`;

const Title = styled.p`
  position: absolute;
  bottom: 50px;
  left: 0;
  color: #fff;
  padding-left: 20px;
  font-weight: bold;
  font-size: 20px;
  z-index: 10;
`;

const RankAndAuthor = styled.div`
  position: absolute;
  bottom: 50px;
  left: 0;
  color: #fff;
  padding-left: 20px;
  font-size: 12px;
  letter-spacing: -0.3px;
  z-index: 10;
`;

const SlideBox = styled.div`
  width: 100%;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 200px;
    background: linear-gradient(transparent, #000);
    z-index: 7;
  }
`;

const Line = styled.span``;
const Num = styled.span``;
const Btn = styled.button``;

const MainSlider = ({ bestseller }) => {
  return (
    <MainBg bestseller={bestseller}>
      <MainBook bestseller={bestseller} />
      <Title>"{bestseller?.title.split("-", 1)}"</Title>
      <RankAndAuthor>
        베스트 셀러 : {bestseller?.bestRank}위,{" "}
        {bestseller?.author.split("(", 1)} 저자(글)
      </RankAndAuthor>
      <SlideBox>
        <Line></Line>
        <Num></Num>
        <Btn></Btn>
      </SlideBox>
    </MainBg>
  );
};

export default MainSlider;
