import React from "react";
import { styled } from "styled-components";
import Heart from "../../../../components/Heart/Heart";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setActiveMenu } from "../../../../redux/reducers/menuSlice";

const BookWrap = styled.div`
  width: 280px;
  height: 120px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  cursor: pointer;
`;

const BookImg = styled.div`
  width: 80px;
  height: 120px;
  position: relative;
  box-shadow: 0 0 2px #d9d9d9;
  img {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: 80px;
    height: 120px;
  }
`;

const HeartWrap = styled.div`
  position: absolute;
  top: 2px;
  right: 0;
`;

const TextWrap = styled.div`
  width: 200px;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
  h3 {
    font-size: 24px;
    font-weight: bold;
    margin: 0;
  }
`;

const BookTitle = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 5px;
  p:nth-of-type(1) {
    font-weight: bold;
    font-size: 14px;
    margin: 0;
    word-break: keep-all;
  }
  p:nth-of-type(2) {
    font-size: 12px;
    margin: 0;
    line-height: 10px;
  }
`;

const BestBook = ({ best }) => {
  const authenciate = useSelector((state) => state.auth.authenciate);
  const navigate = useNavigate();

  const goToBookDetail = () => {
    if (authenciate === true) {
      navigate(`/${best.itemId}`);
    } else {
      alert("로그인 후 이용가능합니다.");
      setActiveMenu("today");
      navigate("/login");
    }
  };

  return (
    <BookWrap>
      <BookImg>
        <img src={best?.cover} onClick={goToBookDetail} />
        <HeartWrap>
          <Heart book={best} />
        </HeartWrap>
      </BookImg>
      <TextWrap onClick={goToBookDetail}>
        <h3>{best?.bestRank}</h3>
        <BookTitle>
          <p>{best?.title.split("-", 1)}</p>
          <p>{best?.author.split(" ", 1)} 저자</p>
        </BookTitle>
      </TextWrap>
    </BookWrap>
  );
};

export default BestBook;
