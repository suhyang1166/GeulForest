import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { bookAction } from "../../redux/actions/bookAction";
import BookItem from "../Main/MainBook/component/BookItem";
import styled from "styled-components";
import Loading2 from "../Nodata/Loading2";
import AtoH from "../../assets/source/atoh";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 20px;
  margin-bottom: 100px;
`;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const BooksWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-content: space-between;
  gap: 10px;
`;

// 한영변환 / 한영 인식
const isKorean = (text) => /[가-힣]/.test(text);

const translateToKorean = (keyword) => {
  // AtoH 모듈을 사용하여 영어를 한글로 변환합니다.
  return AtoH.convert(keyword) || keyword;
};

const SearchDetail = () => {
  const [query] = useSearchParams();
  const keyword = query.get("Query");
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.book.bookSearchBooks);
  const [loading, setLoading] = useState(true);
  const [displayKeyword, setDisplayKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const ITEMS_PER_PAGE = 15;

  useEffect(() => {
    const fetchBooks = async (page) => {
      const startIndex = page * ITEMS_PER_PAGE;
      const translatedKeyword = translateToKorean(keyword);
      await dispatch(
        bookAction.getBooksApi(null, translatedKeyword, startIndex)
      );
      if (searchResults && searchResults.totalResults !== undefined) {
        setTotalResults(searchResults.totalResults);
      }
    };

    if (keyword) {
      setLoading(true);
      fetchBooks(currentPage).finally(() => setLoading(false));

      setDisplayKeyword(translateToKorean(keyword));
    }
  }, [keyword, currentPage, dispatch, searchResults]);

  if (loading) {
    return <Loading2 />;
  }

  const handleChangePage = (_, newPage) => {
    setCurrentPage(newPage);
  };

  // 페이지에 맞는 데이터 필터링
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedBooks = searchResults?.item?.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <Container>
      <h4>
        {isKorean(keyword)
          ? `"${keyword}"에 대한 검색 결과입니다`
          : `검색하신 "${keyword}"의 수정된 대한 결과입니다 :  "${displayKeyword}"`}
      </h4>
      <Wrap>
        <p>전체 {searchResults?.totalResults}권</p>
        <span>인기순</span>
      </Wrap>
      <BooksWrap>
        {paginatedBooks?.map((book) => (
          <BookItem key={book.itemId} book={book} />
        ))}
      </BooksWrap>
      <Stack
        spacing={2}
        style={{
          marginTop: "20px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Pagination
          count={Math.ceil(totalResults / ITEMS_PER_PAGE)}
          page={currentPage}
          onChange={handleChangePage}
          color="primary"
        />
      </Stack>
    </Container>
  );
};

export default SearchDetail;
