import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import SearchDetail from "../SearchDetail/SearchDetail";
import SearchMain from "./component/SearchMain";

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
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("Query") || "";

  const categoryList = [
    "소설/시/희곡",
    "경제경영",
    "자기계발",
    "에세이",
    "인문학",
    "여행",
    "예술/대중문화",
    "역사",
    "종교/역학",
    "청소년",
    "잡지",
    "장르소설",
  ];

  // useEffect(() => {
  //   if (query) {
  //     setKeyword(query);
  //   }
  // }, [query]);

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
    setKeyword("");
  };

  const handleCategoryClick = (category) => {
    navigate(`/search?Query=${category}`);
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
      {!query ? (
        categoryList.map((li, idx) => (
          <p key={idx} onClick={() => handleCategoryClick(li)}>
            {li}
          </p>
        ))
      ) : query.trim() === "" ? (
        <p>검색어가 없습니다. 다시 검색해 주세요.</p>
      ) : (
        <SearchDetail query={query} />
      )}
    </Container>
  );
};

export default Search;
