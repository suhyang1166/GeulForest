import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import BookItem from "../../Main/MainBook/component/BookItem";

const AddBook = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 20px;
  h3 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 0;
  }
`;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  p {
    font-size: 18px;
    color: #888;
    margin-bottom: 0;
  }
`;

const BookMark = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-content: space-between;
  gap: 10px;
`;

const AddBooks = () => {
  const bookMark = useSelector((state) => state.bookMark.bookMark);

  return (
    <AddBook>
      <h3>나의 서재</h3>
      <Wrap>
        <p>전체 {bookMark.length}권</p>
        <span>최근 담은순</span>
      </Wrap>
      {bookMark?.length > 0 ? (
        <BookMark>
          {bookMark?.map((item) => (
            <BookItem key={item?.itemId} book={item} />
          ))}
        </BookMark>
      ) : (
        <p>맘에 드는 책을 담아주세요!</p>
      )}
    </AddBook>
  );
};

export default AddBooks;
