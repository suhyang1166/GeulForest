import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import BookItem from "../../Main/MainBook/component/BookItem";

const AddBook = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

const BookMark = styled.div`
  width: 120px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: start;
  align-items: center;
  gap: 15px;
`;

const AddBooks = () => {
  const bookMark = useSelector((state) => state.bookMark.bookMark);

  return (
    <AddBook>
      <p>나의 서재</p>
      <BookMark>
        {bookMark?.map((item) => (
          <BookItem key={item?.itemId} book={item} />
        ))}
      </BookMark>
    </AddBook>
  );
};

export default AddBooks;
