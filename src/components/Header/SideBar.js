import React, { useState } from "react";
import { styled } from "styled-components";
import CLOSE from "../../assets/header/close.svg";

const Container = styled.div`
    position: fixed;
    width: 100%;
    max-width: 500px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0 20px;
    background: #fff;
    z-index: 100;
`;

const UserWrap = styled.article`
    width: 100%;
    height: 100%;
`;
const List = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 18px;
    font-weight: bold;
`;

const CloseBtn = styled.div`
    width: 30px;
    height: 30px;
    background: url(${CLOSE});
    cursor: pointer;
`;

const Log = styled.div`
    width: 140px;
    height: 50px;
`;

const LoginUser = styled.div``;

const Category = styled.article`
    width: 100%;
    height: 100%;
`;

const SideBar = ({ onClose }) => {
    const handleClose = () => {
        onClose();
    };

    return (
        <Container>
            <UserWrap>
                <List>
                    <Title>즐겨찾기</Title>
                    <CloseBtn onClick={handleClose} />
                </List>
                <Log>
                    <Title>로그인</Title>
                </Log>
                <ul>
                    <li>
                        <p>소설</p>
                        <p>X</p>
                    </li>
                    <li>
                        <p>소설</p>
                        <p>X</p>
                    </li>
                </ul>
            </UserWrap>
            <Category>
                <Title>분야별 카테고리</Title>
                <hr />
                <ul>
                    <List>
                        <p>도서</p>
                        <div>☆</div>
                    </List>
                    <List>
                        <p>웹툰</p>
                        <div>☆</div>
                    </List>
                </ul>
            </Category>
        </Container>
    );
};

export default SideBar;
