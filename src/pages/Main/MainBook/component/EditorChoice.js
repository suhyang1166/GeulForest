import React from "react";
import { styled } from "styled-components";
import BookItem from "./BookItem";

const Container = styled.div``;

const EditorChoice = () => {
  const categorys = [];
  return (
    <Container>
      <div>
        <h1>여기 주목! 오늘의 추천도서</h1>
        <p>04월 29일 월요일 업데이트</p>
      </div>
      <ul>
        <li>카테고리 삽입예정</li>
      </ul>
      <div>
        <p>책 추천[0]</p>
      </div>
      <div>
        <BookItem />
      </div>
    </Container>
  );
};

export default EditorChoice;
