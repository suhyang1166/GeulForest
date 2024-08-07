import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 85px;
  padding: 10px;
  display: flex;
  justify-content: start;
  align-items: flex-end;
  border-radius: 10px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  transition: all 0.3s;
  font-weight: normal;
  cursor: pointer;
  p {
    width: 100%;
    height: auto;
    margin: 0;
  }
  &:hover {
    color: #42d76b;
    font-weight: bold;
    box-shadow: 0 0 3px rgba(66, 215, 107, 1);
  }
`;

const CategorySearch = ({ category, handleCategoryClick }) => {
  return (
    <Container onClick={() => handleCategoryClick(category)}>
      <p>{category}</p>
    </Container>
  );
};

export default CategorySearch;
