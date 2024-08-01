import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SearchDetail from "../SearchDetail/SearchDetail";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const Form = styled.form`
  width: 100%;
  height: 55px;
  margin-top: 60px;
  margin-bottom: 30px;
  padding: 15px 20px;
  border-bottom: 1px solid #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const SearchIcon = styled(FontAwesomeIcon)`
  width: 30px;
  height: 20px;
`;

const Input = styled.input`
  display: inline-block;
  width: 100%;
  height: 30px;
  border: none;
  font-size: 18px;
  font-weight: bold;
  color: #888;
  &:focus {
    outline: none;
    text-decoration: none;
  }
`;

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.target.placeholder = "";
  };

  const handleBlur = (e) => {
    if (keyword === "") {
      e.target.placeholder = "검색어를 입력하세요";
    }
  };

  const onChange = (e) => {
    setKeyword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?Query=${keyword}`);
    setShowResults(true);
    setKeyword("");
  };

  return (
    <Container>
      <Form method="post" onSubmit={onSubmit}>
        <SearchIcon icon={faSearch} />
        <Input
          type="text"
          placeholder="검색어를 입력하세요"
          value={keyword}
          onChange={onChange}
          onClick={handleClick}
          onBlur={handleBlur}
        />
      </Form>
      {showResults && <SearchDetail />}
    </Container>
  );
};

export default Search;
