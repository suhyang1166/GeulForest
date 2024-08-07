import React, { useEffect, useState } from "react";
import LOGO from "../../assets/header/logo.svg";
import MENU from "../../assets/header/menu.svg";
import MENUBK from "../../assets/header/menu-bk.svg";
import { styled } from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import { useDispatch } from "react-redux";
import { setActiveMenu } from "../../redux/reducers/menuSlice";

const Container = styled.div`
  position: fixed;
  top: ${(props) =>
    props.$showNav ? "0" : "-50px"}; /* showNav 상태에 따라 top 위치 설정 */
  width: 100%;
  max-width: 500px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 100;
  transition: all 0.3s ease-in-out;
`;

const Bg = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 500px;
  height: 50px;
  background: rgba(0, 0, 0, ${(props) => (props.$showNav ? "0.3" : "0")});
  z-index: 100;
  transition: all 0.3s ease-in-out;
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
  background: url(${(props) => (props.$isMenuIconBk ? MENUBK : MENU)})
    center/cover no-repeat;
  z-index: 150;
  cursor: pointer;
`;

const Header = () => {
  const [isToggle, setToggle] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const isToggleOpen = () => {
    setToggle(!isToggle);
  };

  const handleCloseSideBar = () => {
    setToggle(false);
  };

  const updateScroll = () => {
    setScrollPosition(window.scrollY);
  };

  const goToMain = () => {
    dispatch(setActiveMenu("today"));
    navigate("/");
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      // 마지막 스크롤 위치 업데이트
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const isMenuIconBk =
    location.pathname.includes("feed") || location.pathname.includes("search");

  return (
    <>
      {isToggle ? (
        <SideBar onClose={handleCloseSideBar} />
      ) : (
        <>
          {scrollPosition > 490 ? <Bg $showNav={showNav} /> : null}
          <Container $showNav={showNav}>
            <Logo onClick={goToMain} />
            <Toggle $isMenuIconBk={isMenuIconBk} onClick={isToggleOpen} />
          </Container>
        </>
      )}
    </>
  );
};

export default Header;
