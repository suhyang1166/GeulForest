import React from "react";
import { styled } from "styled-components";
import Heart from "../../../../components/Heart/Heart";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setActiveMenu } from "../../../../redux/reducers/menuSlice";

const Container = styled.div`
  width: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const BookWrap = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
    background-image: url(${(props) => props.$bgImg});
    background-size: cover;
    background-position: center;
    border: 1px solid gray;
    border-radius: 10px;
    opacity: 0.2;
  }
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
  width: 130px;
  height: 190px;
  position: relative;
  img {
    position: absolute;
    bottom: -15px;
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

const TitleWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

const BookTitle = styled.div`
  width: 100%;
  word-break: keep-all;
  h3 {
    font-size: 16px;
    font-weight: bold;
    margin: 0;
    letter-spacing: -1px;
  }
  p {
    font-size: 12px;
  }
`;

const NewBook = ({ newBook }) => {
  const authenciate = useSelector((state) => state.auth.authenciate);
  const navigate = useNavigate();

  const goToBookDetail = () => {
    if (authenciate === true) {
      navigate(`/${newBook.itemId}`);
    } else {
      alert("로그인 후 이용가능합니다.");
      setActiveMenu("today");
      navigate("/login");
    }
  };
  return (
    <Container>
      <BookWrap onClick={goToBookDetail} $bgImg={newBook?.cover}>
        <BookImg>
          <img src={newBook?.cover} />
        </BookImg>
      </BookWrap>
      <TitleWrap>
        <BookTitle onClick={goToBookDetail}>
          <h3>{newBook?.title.split("-", 1)}</h3>
          <p>{newBook?.author.split(" ", 1)} 저자</p>
        </BookTitle>
        <Heart book={newBook} />
      </TitleWrap>
    </Container>
  );
};

export default NewBook;
