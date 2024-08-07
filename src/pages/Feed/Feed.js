import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: lightgray;
`;

const Feed = () => {
  return (
    <Container>
      <h3>준비 중 입니다.</h3>
    </Container>
  );
};

export default Feed;
