import React, { useEffect, useState } from "react";
import ARR from "../../assets/header/arr.svg";
import MENU02 from "../../assets/header/menu-gray.svg";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  position: fixed;
  top: ${(props) =>
    props.$showNav ? "0" : "-50px"}; /* showNav 상태에 따라 top 위치 설정 */
  width: 100%;
  max-width: 500px;
  height: 50px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 10000;
  transition: all 0.3s ease-in-out;
  border-bottom: 1px solid #d9d9d9;
`;

const Arr = styled.div`
  width: 20px;
  height: 50px;
  color: #666;
  background: url(${ARR}) center/cover no-repeat;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Toggle = styled.div`
  width: 35px;
  height: 35px;
  background: url(${MENU02}) center/cover no-repeat;
  z-index: 150;
  cursor: pointer;
`;

const DetailHeader = () => {
  const [isToggle, setToggle] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const isToggleOpen = () => {
    setToggle(!isToggle);
  };

  const handleCloseSideBar = () => {
    setToggle(false);
  };

  const updateScroll = () => {
    setScrollPosition(window.scrollY);
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

  return (
    <>
      {isToggle ? (
        <SideBar onClose={handleCloseSideBar} />
      ) : (
        <Container $showNav={showNav}>
          <Arr onClick={goBack} />
          <Toggle onClick={isToggleOpen} />
        </Container>
      )}
    </>
  );
};

export default DetailHeader;
