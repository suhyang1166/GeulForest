import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { setActiveMenu } from "../../../../redux/reducers/menuSlice";

const MainBg = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  height: 490px;
  background: url(${(props) => props.$bestseller?.cover}) center / cover
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
  background: url(${(props) => props.$bestseller?.cover}) center / cover
    no-repeat;
  z-index: 3;
  cursor: pointer;
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
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.8);
  word-break: keep-all;
  cursor: pointer;
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
  cursor: pointer;
`;

const MainSlider = ({ bestseller }) => {
  const authenciate = useSelector((state) => state.auth.authenciate);
  const navigate = useNavigate();

  const goToBookDetail = () => {
    if (authenciate === true) {
      navigate(`/${bestseller.itemId}`);
    } else {
      alert("로그인 후 이용가능합니다.");
      setActiveMenu("today");
      navigate("/login");
    }
  };
  return (
    <MainBg $bestseller={bestseller}>
      <MainBook onClick={goToBookDetail} $bestseller={bestseller} />
      <Title onClick={goToBookDetail}>
        "{bestseller?.title.split("-", 1)}"
      </Title>
      <RankAndAuthor onClick={goToBookDetail}>
        베스트 셀러 : {bestseller?.bestRank}위,{" "}
        {bestseller?.author.split("(", 1)} 저자(글)
      </RankAndAuthor>
    </MainBg>
  );
};

export default MainSlider;
