import React from "react";
import { styled } from "styled-components";
import NewBook from "./NewBook";

const NewBookWrap = styled.div``;

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

const NewBooks = ({ itemNewSpecialBooks }) => {
  console.log("ttt", itemNewSpecialBooks);

  const categorys = itemNewSpecialBooks.map((category) => {
    console.log("ccc", category.categoryName);
    return category.categoryName.split(">", 2)[1];
  });

  console.log(categorys);

  return (
    <NewBookWrap>
      <h1>따끈따근 신간 도서</h1>
      <p>모두가 기다리던 신간 바로 여기서 확인하세요!</p>
      <ul>
        <li>categorys</li>
      </ul>
      <ItemWrap>
        {itemNewSpecialBooks.map((newBook, idx) => (
          <NewBook key={idx} newBook={newBook} />
        ))}
      </ItemWrap>
    </NewBookWrap>
  );
};

export default NewBooks;
