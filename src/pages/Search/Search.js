import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
  /* height: 100%; */
`;

const Input = styled.input`
  width: 80%;
  height: 30px;
  margin-top: 60px;
`;

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

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
        <FontAwesomeIcon icon={faSearch} />
        <Input
          type="text"
          placeholder="검색어를 입력하세요"
          value={keyword}
          onChange={onChange}
        />
      </Form>
      {/* {showResults && <SearchDetail />} */}
    </Container>
  );
};

export default Search;
