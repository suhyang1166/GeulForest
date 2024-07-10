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
  margin-bottom: 100px;
  overflow-x: scroll;
  cursor: pointer;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const NewBooks = ({ itemNewSpecialBooks }) => {
  // console.log("ttt", itemNewSpecialBooks);

  const categorys = itemNewSpecialBooks.map((category) => {
    // console.log("ccc", category.categoryName);
    return category.categoryName.split(">", 2)[1];
  });

  // console.log(categorys);

  return (
    <Container>
      <Title>
        <h1>따끈따근 신간 도서</h1>
        <p>모두가 기다리던 신간 바로 여기서 확인하세요!</p>
      </Title>
      <ul>
        <li>categorys</li>
      </ul>
      <ItemWrap>
        {itemNewSpecialBooks.map((newBook, idx) => (
          <NewBook key={idx} newBook={newBook} />
        ))}
      </ItemWrap>
    </Container>
  );
};

export default NewBooks;
