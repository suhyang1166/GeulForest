import React from "react";
import styled from "styled-components";
import MyProfile from "./component/MyProfile";
import AddBooks from "./component/AddBooks";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 30px;
  margin: 80px 0;
  padding: 0 20px;
  position: relative;
`;

const MyPage = () => {
  return (
    <Container>
      <MyProfile />
      <AddBooks />
    </Container>
  );
};

export default MyPage;
