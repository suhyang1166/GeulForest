import React from "react";
import styled from "styled-components";
import LOAD2 from "../../assets/loading/Loading2.svg";
import Lottie from "lottie-react";
import spinnerGreen from "../../assets/lottie/spinner-green.json";

const Container = styled.div`
  width: 100%;
  height: 90vh;
  background: transparent;
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
  background: url(${(props) => props.img}) center/contain no-repeat;
  z-index: 100;
`;

const Spinner = styled(Lottie)`
  width: 150px;
  height: 100px;
  position: absolute;
  top: 55%;
`;

const Loading2 = () => {
  return (
    <Container>
      <Load img={LOAD2} />
      <Spinner animationData={spinnerGreen} />
    </Container>
  );
};

export default Loading2;
