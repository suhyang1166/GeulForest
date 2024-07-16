import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import menuToday from "../../assets/images/Checkmark.png";
import menuTodayCheck from "../../assets/images/Checkmark-1.png";
import menuFeed from "../../assets/images/Notes.png";
import menuFeedCheck from "../../assets/images/Notes-1.png";
import menuSearch from "../../assets/images/Search Property.png";
import menuSearchCheck from "../../assets/images/Search Property-1.png";
import menuUser from "../../assets/images/Male User.png";
import menuUserCheck from "../../assets/images/Male User-1.png";
import { useDispatch, useSelector } from "react-redux";
import { setActiveMenu } from "../../redux/reducers/menuSlice";

const Footer = () => {
  const authenciate = useSelector((state) => state.auth.authenciate);
  const activeMenu = useSelector((state) => state.menu.activeMenu);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleMenuClick = (menu, path) => {
    dispatch(setActiveMenu(menu));
    navigate(path);
  };

  return (
    <Container>
      <MenuContainer>
        <MenuToday
          active={activeMenu === "today"}
          onClick={() => handleMenuClick("today", "/")}
        >
          <Span>투데이</Span>
        </MenuToday>
      </MenuContainer>

      <MenuContainer>
        <MenuFeed
          onClick={() => handleMenuClick("feed", "/feed")}
          active={activeMenu === "feed"}
        >
          <Span>피드</Span>
        </MenuFeed>
      </MenuContainer>

      <MenuContainer>
        <MenuSearch
          onClick={() => handleMenuClick("search", "/search")}
          active={activeMenu === "search"}
        >
          <Span>검색</Span>
        </MenuSearch>
      </MenuContainer>

      <MenuContainer>
        <MenuUser
          onClick={() => handleMenuClick("mypage", "/mypage")}
          active={activeMenu === "mypage"}
        >
          {authenciate === true ? <Span>내서재</Span> : <Span>로그인</Span>}
        </MenuUser>
      </MenuContainer>
    </Container>
  );
};

//-----------style components--------------

const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 500px;
  height: 80px;
  background: #eee;
  display: flex;
  justify-content: space-around;
  z-index: 100;
`;
const MenuContainer = styled.div`
  width: 100%;
  height: 60px;
  position: relative;
`;
const Span = styled.span`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  font-size: 12px;
`;

const MenuToday = styled.div`
  width: 100%;
  height: 50px;
  cursor: pointer;
  background: ${({ active }) =>
    active
      ? `url(${menuTodayCheck}) center no-repeat`
      : `url(${menuToday}) center no-repeat`};
`;
const MenuFeed = styled.div`
  width: 100%;
  height: 50px;
  cursor: pointer;
  background: ${({ active }) =>
    active
      ? `url(${menuFeedCheck}) center no-repeat`
      : `url(${menuFeed}) center no-repeat`};
`;
const MenuSearch = styled.div`
  width: 100%;
  height: 50px;
  cursor: pointer;
  background: ${({ active }) =>
    active
      ? `url(${menuSearchCheck}) center no-repeat`
      : `url(${menuSearch}) center no-repeat`};
`;
const MenuUser = styled.div`
  width: 100%;
  height: 50px;
  cursor: pointer;
  background: ${({ active }) =>
    active
      ? `url(${menuUserCheck}) center no-repeat`
      : `url(${menuUser}) center no-repeat`};
`;

export default Footer;
