import React from "react";
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
  const previewImg = useSelector((state) => state.user.previewImg);
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
          $active={activeMenu === "today"}
          onClick={() => handleMenuClick("today", "/")}
        ></MenuToday>
        <Span>투데이</Span>
      </MenuContainer>

      <MenuContainer>
        <MenuFeed
          onClick={() => handleMenuClick("feed", "/feed")}
          $active={activeMenu === "feed"}
        ></MenuFeed>
        <Span>피드</Span>
      </MenuContainer>

      <MenuContainer>
        <MenuSearch
          onClick={() => handleMenuClick("search", "/search")}
          $active={activeMenu === "search"}
        ></MenuSearch>
        <Span>검색</Span>
      </MenuContainer>

      <MenuContainer>
        {authenciate === true ? (
          <>
            <UserImg
              onClick={() => handleMenuClick("mypage", "/mypage")}
              $active={activeMenu === "mypage"}
              $previewImg={previewImg}
            />
            <Span $active={activeMenu === "mypage"}>내서재</Span>
          </>
        ) : (
          <>
            <MenuUser
              onClick={() => handleMenuClick("mypage", "/mypage")}
              $active={activeMenu === "mypage"}
            />
            <Span>로그인</Span>
          </>
        )}
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
  align-items: center;
  z-index: 100;
`;
const MenuContainer = styled.div`
  width: 100%;
  height: 60px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Span = styled.span`
  /* position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%); */
  width: 100%;
  text-align: center;
  font-size: 12px;
  font-weight: ${({ $active }) => ($active ? "bold" : "none")};
  color: ${({ $active }) => ($active ? "#42D76B" : "#000")};
`;

const MenuToday = styled.div`
  width: 100%;
  height: 50px;
  cursor: pointer;
  background: ${({ $active }) =>
    $active
      ? `url(${menuTodayCheck}) center no-repeat`
      : `url(${menuToday}) center no-repeat`};
`;
const MenuFeed = styled.div`
  width: 100%;
  height: 50px;
  cursor: pointer;
  background: ${({ $active }) =>
    $active
      ? `url(${menuFeedCheck}) center no-repeat`
      : `url(${menuFeed}) center no-repeat`};
`;
const MenuSearch = styled.div`
  width: 100%;
  height: 50px;
  cursor: pointer;
  background: ${({ $active }) =>
    $active
      ? `url(${menuSearchCheck}) center no-repeat`
      : `url(${menuSearch}) center no-repeat`};
`;

const UserImg = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 100%;
  margin-top: 4px;
  background: ${({ $active, $previewImg }) =>
    $previewImg !== ""
      ? `url(${$previewImg}) center/cover no-repeat`
      : $active
      ? `url(${menuUserCheck}) center no-repeat`
      : `url(${menuUser}) center no-repeat`};
  cursor: pointer;
`;

const MenuUser = styled.div`
  width: 100%;
  height: 50px;
  cursor: pointer;
  background: ${({ $active }) =>
    $active
      ? `url(${menuUserCheck}) center no-repeat`
      : `url(${menuUser}) center no-repeat`};
`;

export default Footer;
