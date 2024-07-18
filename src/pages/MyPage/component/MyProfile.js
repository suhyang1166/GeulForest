import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import UserImg from "./UserImg";
import RecommendBook from "./RecommendBook";

const Container = styled.div`
  width: 100%;
  height: 410px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 20px;
`;

const Bg = styled.div`
  position: absolute;
  top: -80px;
  left: 0;
  width: 100%;
  height: 490px;
  background: linear-gradient(#42d76b, transparent);
  opacity: 0.5;
  z-index: -1;
  border-bottom: 1px solid #d9d9d9;
`;

const UserWrap = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
`;

const UserText = styled.div`
  h3 {
    font-size: 24px;
    margin-bottom: 0;
  }
  p {
    font-size: 16px;
    color: #888;
    b {
      color: #42d76b;
    }
  }
`;

const MyProfile = () => {
  const bookMark = useSelector((state) => state.bookMark.bookMark);
  const authId = useSelector((state) => state.auth.id);
  return (
    <Container>
      <Bg />
      <UserWrap>
        <UserImg />
        <UserText>
          <h3>
            <b>{authId.split("@", 1)}</b>님의 서재
          </h3>
          <p>
            좋아하는 책 <b>{bookMark.length}</b>권
          </p>
        </UserText>
      </UserWrap>
      <RecommendBook authId={authId} />
    </Container>
  );
};

export default MyProfile;
