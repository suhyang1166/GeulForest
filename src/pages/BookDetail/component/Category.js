import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 120px;
  background: #fcf9ed;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 0 20px;
`;

const Text = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  p {
    font-size: 12px;
    color: #888;
    margin-bottom: 0;
  }
  h3 {
    font-size: 14px;
    font-weight: bold;
    text-decoration: underline;
    margin-bottom: 0;
  }
`;

const Line = styled.span`
  width: 1px;
  height: 60px;
  background: #d9d9d9;
`;

const Category = ({ book }) => {
  const category = book?.categoryName.split(">");
  return (
    <Container>
      <Text>
        <p>카테고리</p>
        <h3>{category[1]}</h3>
      </Text>
      <Line />
      <Text>
        <p>출간일</p>
        <h3>{book?.pubDate}</h3>
      </Text>
      <Line />
      <Text>
        <p>출판사</p>
        <h3>{book?.publisher}</h3>
      </Text>
    </Container>
  );
};

export default Category;
