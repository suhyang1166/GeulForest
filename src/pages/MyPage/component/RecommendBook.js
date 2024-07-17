import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import BookItem from "../../Main/MainBook/component/BookItem";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 10px;
  overflow: hidden;
  p {
    font-size: 18px;
    margin-bottom: 0;
  }
`;

const RecommendWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 10px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const RecommendBook = ({ authId }) => {
  const { itemEditorChoiceBooks } = useSelector((state) => state.book);

  return (
    <Container>
      <p>
        <b>{authId.split("@", 1)}</b>님 이런 도서는 어떠신가요?
      </p>
      <RecommendWrap>
        {itemEditorChoiceBooks.item.map((book) => (
          <BookItem book={book} />
        ))}
      </RecommendWrap>
    </Container>
  );
};

export default RecommendBook;
