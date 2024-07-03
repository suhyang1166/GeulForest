import React from "react";
import { styled } from "styled-components";
import { useSelector } from "react-redux";
import BookItem from "./BookItem";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 20px;
  padding: 0 20px;
  margin-top: 33px;
  overflow: hidden;
`;

const Title = styled.div`
  h1 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  P {
    font-size: 12px;
    color: #888;
    margin: 0;
  }
`;

const RandomBook = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
    background-image: url(${(props) => props.backgroundImage});
    background-size: cover;
    background-position: center;
    box-shadow: 0 0 3px #d9d9d9;
    border-radius: 10px;
    opacity: 0.2;
    z-index: -1;
  }
`;

const RandomItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 20px;
`;

const RandomTitle = styled.div`
  h3 {
    font-size: 16px;
    font-weight: bold;
    margin: 0;
  }
  p {
    font-size: 12px;
  }
`;

const RandomImg = styled.div`
  /* position: relative; */
  img {
    width: 100px;
    height: 100%;
    box-shadow: 0 0 3px #d9d9d9;
  }
  /* span {
    position: absolute;
    top: 5px;
    right: 5px;
  } */
`;

const ItemWrap = styled.div`
  /* width: 100%; */
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 100px;
  overflow-y: hidden;
`;

const EditorChoice = ({ itemEditorChoiceBooks }) => {
  console.log("iiii", itemEditorChoiceBooks);
  const randomIdx = Math.floor(Math.random() * 15);

  // 현재시간함수
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const date = new Date();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const week = days[date.getDay()];

  return (
    <Container>
      <Title>
        <h1>여기 주목! 오늘의 추천도서</h1>
        <p>
          {month}월 {day}일 {week}요일 업데이트
        </p>
      </Title>
      <RandomBook backgroundImage={itemEditorChoiceBooks[randomIdx]?.cover}>
        <RandomItem>
          <RandomTitle>
            <h3>{itemEditorChoiceBooks[randomIdx]?.title.split(" ", 1)}</h3>
            <p>{itemEditorChoiceBooks[randomIdx]?.author.split(" ", 1)} 저자</p>
          </RandomTitle>
          <RandomImg>
            <img src={itemEditorChoiceBooks[randomIdx]?.cover} />
            {/* <span>하트</span> */}
          </RandomImg>
        </RandomItem>
      </RandomBook>
      <ItemWrap>
        {itemEditorChoiceBooks.map((book, idx) => (
          <BookItem key={idx} book={book} />
        ))}
      </ItemWrap>
    </Container>
  );
};

export default EditorChoice;
