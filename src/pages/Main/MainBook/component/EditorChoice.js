import React from "react";
import { styled } from "styled-components";
import { useSelector } from "react-redux";
import BookItem from "./BookItem";

const Container = styled.div``;

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
  const randomIdx = Math.floor(Math.random() * 15);

  // 현재시간함수
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const date = new Date();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const week = days[date.getDay()];

  return (
    <Container>
      <div>
        <h1>여기 주목! 오늘의 추천도서</h1>
        <p>
          {month}월 {day}일 {week}요일 업데이트
        </p>
      </div>
      <div>
        <img src={itemEditorChoiceBooks[randomIdx]?.cover}></img>
        <p>{itemEditorChoiceBooks[randomIdx]?.title}</p>
      </div>
      <ItemWrap>
        {itemEditorChoiceBooks.map((book, idx) => (
          <BookItem key={idx} book={book} />
        ))}
      </ItemWrap>
    </Container>
  );
};

export default EditorChoice;
