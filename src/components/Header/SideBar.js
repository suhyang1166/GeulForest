import React from "react";
import { styled } from "styled-components";
import CLOSE from "../../assets/header/close.svg";
import BookItem from "../../pages/Main/MainBook/component/BookItem";
import { useSelector } from "react-redux";

const SlideBarWrap = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 50px;
  background: #fff;
  overflow-x: hidden;
  z-index: 100;
`;

const UserWrap = styled.article`
  width: 100%;
  height: 100%;
  padding: 0 20px;
`;
const List = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #888;
  p {
    font-size: 18px;
  }
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;

const Icon = styled.div`
  width: 30px;
  height: 30px;
  background: url(${(props) => props.icon}) center/cover no-repeat;
  cursor: pointer;
`;

const Log = styled.div`
  width: 140px;
  height: 50px;
  margin: 20px 0;
`;

const LoginUser = styled.div`
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #42d76b;
  border-radius: 10px;
  color: #42d76b;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    color: #fff;
    background: #42d76b;
  }
`;

const AddStar = styled.div`
  color: #888;
`;

const SideBar = ({ onClose }) => {
  const bookMark = useSelector((state) => state.bookMark.bookMark);

  const handleClose = () => {
    onClose();
  };

  return (
    <SlideBarWrap>
      <UserWrap>
        <List>
          <Title>즐겨찾기</Title>
          <Icon icon={CLOSE} onClick={handleClose} />
        </List>
        <Log>
          <LoginUser>로그인</LoginUser>
        </Log>
        <AddStar>
          <p>즐겨찾기</p>
          {bookMark.map((item, idx) => (
            <BookItem key={idx} book={item} />
          ))}
          {/* <BookItem book={bookMark} /> */}
        </AddStar>
      </UserWrap>
    </SlideBarWrap>
  );
};

export default SideBar;
