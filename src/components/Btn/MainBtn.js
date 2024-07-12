import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MainMenu = styled.div`
  position: absolute;
  top: 60px;
  width: 100%;
  max-width: 500px;
  height: 25px;
  z-index: 11;
  display: flex;
  padding-left: 20px;
  gap: 15px;
`;

const MainButton = styled(Link)`
  font: ${({ active }) => (active ? "bold" : "normal")} 18px "SD R";
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  border-bottom: ${({ active }) => (active ? "2px solid #fff" : "none")};
`;

const MainBtn = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <MainMenu>
      <MainButton
        to="/"
        active={activeMenu === "book"}
        onClick={() => handleMenuClick("book")}
      >
        도서
      </MainButton>
      <MainButton
        to="/webtoon"
        active={activeMenu === "toon"}
        onClick={() => handleMenuClick("toon")}
      >
        웹툰
      </MainButton>
    </MainMenu>
  );
};

export default MainBtn;
