import React from "react";
import styled from "styled-components";
import Reviews from "./Reviews";
import Heart from "../../../components/Heart/Heart";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 30px;
`;

const Cover = styled.div`
  width: 200px;
  height: 320px;
  background: url(${(props) => props.img}) center / cover no-repeat;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #333;
  h3 {
    width: 80%;
    margin-bottom: 0;
    font-size: 20px;
    line-height: 20px;
    font-weight: bold;
    text-align: center;
    word-break: keep-all;
  }
  div {
    height: 25px;
    display: flex;
    gap: 5px;
    p {
      margin-bottom: 0;
      line-height: 23px;
    }
  }
`;

const GradeWrap = styled.div`
  width: 100%;
  height: 100%;
  gap: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Line = styled.span`
  width: 1px;
  height: 50px;
  background: #d9d9d9;
`;

const BookDetailMain = ({ book }) => {
  const star = book?.subInfo?.ratingInfo?.ratingCount;
  console.log(book);

  return (
    <Container>
      <Cover img={book?.cover} />
      <Title>
        <h3>{book?.title}</h3>
        <div>
          <p>{book?.author.split(" (", 1)}</p>
          <Heart book={book} />
        </div>
      </Title>
      <GradeWrap>
        <Reviews book={book} type={star} />
        <Line></Line>
        <Reviews book={book} />
      </GradeWrap>
    </Container>
  );
};

export default BookDetailMain;
