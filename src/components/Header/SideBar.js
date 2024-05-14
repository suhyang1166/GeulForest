import React from "react";
import { styled } from "styled-components";
import CLOSE from "../../assets/header/close.svg";
import STAR from "../../assets/header/star.svg";

const SlideBarWrap = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    max-width: 500px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 50px;
    background: #fff;
    z-index: 100;
`;

const UserWrap = styled.article`
    width: 100%;
    height: 100%;
    padding: 0 20px;
`;
const List = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #888;
    p {
        font-size: 18px;
    }
`;

const Title = styled.h1`
    font-size: 18px;
    font-weight: bold;
    color: #000;
`;

const Icon = styled.div`
    width: 30px;
    height: 30px;
    background: url(${(props) => props.icon}) center/cover no-repeat;
    cursor: pointer;
`;
const Icon02 = styled.div`
    width: 20px;
    height: 20px;
    background: url(${(props) => props.icon}) center/cover no-repeat;
    cursor: pointer;
`;

const Log = styled.div`
    width: 140px;
    height: 50px;
    margin: 20px 0;
`;

const LoginUser = styled.div`
    width: 100px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #42d76b;
    border-radius: 10px;
    color: #42d76b;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
        color: #fff;
        background: #42d76b;
    }
`;

const AddStar = styled.div`
    color: #888;
`;

const AddCategory = styled.ul`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 0;
    gap: 10px;
`;

const AddList = styled.li`
    width: auto;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding: 5px 10px;
    border: 1px solid #888;
    border-radius: 30px;
    p {
        width: auto;
        height: 30px;
        line-height: 30px;
        margin: 0;
    }
`;
const CategoryUl = styled.ul`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 0;
    padding-top: 20px;
    margin-top: 10px;
    border-top: 1px solid #888888;
`;

const CategoryWrap = styled.article`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
    background: #fff;
`;

const SideBar = ({ onClose }) => {
    const categorys = [
        "도서",
        "웹툰",
        "소설",
        "경제/경영",
        "자기개발",
        "시/에세이",
        "인문/교양",
        "취미/실용",
        "매거진",
        "판타지/무협",
    ];

    const handleClose = () => {
        onClose();
    };

    return (
        <SlideBarWrap>
            <UserWrap>
                <List>
                    <Title>즐겨찾기</Title>
                    <Icon icon={CLOSE} onClick={handleClose} />
                </List>
                <Log>
                    <LoginUser>로그인</LoginUser>
                </Log>
                <AddStar>
                    <p>카테고리</p>
                    <AddCategory>
                        <AddList>
                            <p>소설</p>
                            <Icon02 icon={CLOSE} onClick={handleClose} />
                        </AddList>
                        <AddList>
                            <p>경제/경영</p>
                            <Icon02 icon={CLOSE} onClick={handleClose} />
                        </AddList>
                    </AddCategory>
                </AddStar>
            </UserWrap>
            <CategoryWrap>
                <Title>분야별 카테고리</Title>
                <CategoryUl>
                    {categorys.map((category) => (
                        <List>
                            <p>{category}</p>
                            <Icon icon={STAR}></Icon>
                        </List>
                    ))}
                </CategoryUl>
            </CategoryWrap>
        </SlideBarWrap>
    );
};

export default SideBar;
