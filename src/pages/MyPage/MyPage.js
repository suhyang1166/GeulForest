import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import BookItem from "../Main/MainBook/component/BookItem";
import MyProfile from "./component/MyProfile";
import AddBooks from "./component/AddBooks";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 30px;
  margin: 80px 0;
  padding: 0 20px;
  position: relative;
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
`;

const MyPage = () => {
  return (
    <Container>
      <Bg />
      <MyProfile />
      <AddBooks />
    </Container>
  );
};

export default MyPage;
