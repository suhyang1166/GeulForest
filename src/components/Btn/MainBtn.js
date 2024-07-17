import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";

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
  const [activeMenu, setActiveMenu] = useState("book");
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveMenu("book");
    } else if (location.pathname === "/webtoon") {
      setActiveMenu("toon");
    }
  }, [location.pathname]);

  return (
    <MainMenu>
      <MainButton
        to="/"
        onClick={() => setActiveMenu("book")}
        active={activeMenu == "book"}
      >
        도서
      </MainButton>
      <MainButton
        to="/webtoon"
        onClick={() => setActiveMenu("toon")}
        s
        active={activeMenu == "toon"}
      >
        웹툰
      </MainButton>
    </MainMenu>
  );
};

export default MainBtn;
