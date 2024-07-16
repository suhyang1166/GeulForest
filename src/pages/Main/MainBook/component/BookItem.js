import React from "react";
import { styled } from "styled-components";
import Heart from "../../../../components/Heart/Heart";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { setActiveMenu } from "../../../../redux/reducers/menuSlice";

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
  div {
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 100;
  }
`;

const BookItem = ({ book }) => {
  const authenciate = useSelector((state) => state.auth.authenciate);
  const navigate = useNavigate();

  const goToBookDetail = () => {
    if (authenciate === true) {
      navigate(`/${book.itemId}`);
    } else {
      alert("로그인 후 이용가능합니다.");
      setActiveMenu("today");
      navigate("/login");
    }
  };
  return (
    <BookWrap>
      <BookImg>
        <img onClick={goToBookDetail} src={book?.cover} />
        <div>
          <Heart book={book} />
        </div>
      </BookImg>
      <div onClick={goToBookDetail}>
        <p>{book?.title.split("-", 1)}</p>
        <p>{book?.author.split(" ", 1)} 저자</p>
      </div>
    </BookWrap>
  );
};

export default BookItem;
