import React from "react";
import styled from "styled-components";
import LOAD from "../../assets/loading/Loading.svg";
import Lottie from "lottie-react";
import spinner from "../../assets/lottie/spinner.json";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #42d76b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  position: relative;
`;

const Load = styled.div`
  width: 120px;
  height: 160px;
  background: url(${(props) => props.$img}) center/contain no-repeat;
  z-index: 100;
`;

const Spinner = styled(Lottie)`
  width: 150px;
  height: 100px;
  position: absolute;
  top: 55%;
`;

const Loading = () => {
  return (
    <Container>
      <Load $img={LOAD} />
      <Spinner animationData={spinner} />
    </Container>
  );
};

export default Loading;
