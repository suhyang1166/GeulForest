import React, { useState } from "react";
import LOGO from "../../assets/header/logo.svg";
import MENU from "../../assets/header/menu.svg";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";

const Container = styled.div`
  position: fixed;
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 50px;
  z-index: 100;
`;

const Logo = styled.div`
  width: 35px;
  height: 40px;
  background: url(${LOGO}) center/contain no-repeat;
  cursor: pointer;
`;

const Toggle = styled.div`
  width: 35px;
  height: 35px;
  background: url(${MENU}) center/cover no-repeat;
  z-index: 150;
  cursor: pointer;
`;

const Header = () => {
  const [isToggle, setToggle] = useState(false);

  const isToggleOpen = () => {
    setToggle((istoggle) => !istoggle);
  };

  const handleCloseSideBar = () => {
    setToggle(false);
  };
  return (
    <>
      {isToggle ? (
        <SideBar onClose={handleCloseSideBar} />
      ) : (
        <Container>
          <Link to="/">
            <Logo />
          </Link>
          <Toggle onClick={isToggleOpen} />
        </Container>
      )}
    </>
  );
};

export default Header;
