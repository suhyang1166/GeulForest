import React from "react";
import { styled } from "styled-components";
import NewBook from "./NewBook";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 20px;
  padding: 0 20px;
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

const ItemWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 50px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const NewBooks = ({ itemNewSpecialBooks }) => {
  return (
    <Container>
      <Title>
        <h1>따끈따근 신간 도서</h1>
        <p>모두가 기다리던 신간 바로 여기서 확인하세요!</p>
      </Title>
      <ItemWrap>
        {itemNewSpecialBooks.map((newBook, idx) => (
          <NewBook key={idx} newBook={newBook} />
        ))}
      </ItemWrap>
    </Container>
  );
};

export default NewBooks;
