import React, { useEffect } from "react";
import { styled } from "styled-components";
import CLOSE from "../../assets/header/close.svg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddBooks from "../../pages/MyPage/component/AddBooks";
import UserImg from "../../pages/MyPage/component/UserImg";
import BookItem from "../../pages/Main/MainBook/component/BookItem";

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
  &::-webkit-scrollbar {
    display: none;
  }
`;

const UserWrap = styled.article`
  width: 100%;
  height: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const List = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 500px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.5);
  color: #888;
  z-index: 500;
  padding: 0 20px;
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

const LogWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin-top: 100px;
`;

const Log = styled.div`
  width: 140px;
  height: 50px;
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

const WrapBook = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-top: 20px;
`;

const User = styled.div`
  width: 500px;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid #d9d9d9;
  margin: 30px 0;
`;

const RecommendWrap = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const SideBar = ({ onClose }) => {
  const auth = useSelector((state) => state.auth);
  const { bestsellerBooks } = useSelector((state) => state.book);
  const navigate = useNavigate();

  const handleClose = () => {
    onClose();
  };

  const goToLogin = () => {
    onClose();
    navigate("/mypage");
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <SlideBarWrap>
      <UserWrap>
        <List>
          <Title>즐겨찾기</Title>
          <Icon icon={CLOSE} onClick={handleClose} />
        </List>
        {auth.authenciate === true ? (
          <WrapBook>
            <User>
              <UserImg />
              <h3>
                <b>{auth.id.split("@", 1)}</b>님 안녕하세요!
              </h3>
            </User>
            <AddBooks />
          </WrapBook>
        ) : (
          <LogWrap>
            <Log>
              <LoginUser onClick={goToLogin}>로그인</LoginUser>
            </Log>
            <p>베스트셀러 TOP 10</p>
            <RecommendWrap>
              {bestsellerBooks.item.map((book) => (
                <BookItem book={book} />
              ))}
            </RecommendWrap>
          </LogWrap>
        )}
      </UserWrap>
    </SlideBarWrap>
  );
};

export default SideBar;
