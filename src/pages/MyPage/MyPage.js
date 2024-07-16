import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import BookItem from "../Main/MainBook/component/BookItem";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 30px;
  margin-top: 80px;
`;

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

const MyPage = () => {
  const bookMark = useSelector((state) => state.bookMark.bookMark);
  const authId = useSelector((state) => state.auth.id);
  return (
    <Container>
      <h3>
        <b>{authId.split("@", 1)}</b>님의 서재
      </h3>
      <AddBook>
        <p>나의 서재</p>
        <BookMark>
          {bookMark?.map((item) => (
            <BookItem key={item?.itemId} book={item} />
          ))}
        </BookMark>
      </AddBook>
    </Container>
  );
};

export default MyPage;
