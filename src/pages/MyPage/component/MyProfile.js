import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UserImg = styled.div``;

const MyProfile = () => {
  const bookMark = useSelector((state) => state.bookMark.bookMark);
  const authId = useSelector((state) => state.auth.id);
  return (
    <Container>
      <UserImg />
      <div>
        <h3>
          <b>{authId.split("@", 1)}</b>님의 서재
        </h3>
        <p>
          좋아하는 책 <b>{bookMark.length}권</b>
        </p>
      </div>
    </Container>
  );
};

export default MyProfile;
