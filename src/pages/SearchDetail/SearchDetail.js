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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 100px;
  padding: 0 20px;
  p {
    width: 100%;
  }
`;

const InfoText = styled.div`
  font-size: 18px;
`;

const Select = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-content: space-between;
  p {
    font-size: 18px;
    font-weight: bold;
    margin: 0;
    line-height: 30px;
    color: #888;
  }
  select {
    /* width: 80px; */
    height: 30px;
    padding: 5px;
    border: 1px solid #888;
    border-radius: 20px;
    color: #888;
    cursor: pointer;
    &:focus {
      border: 1px solid #42d76b;
    }
  }
`;

const BooksWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
`;

// 한영변환 / 한영 인식
const isKorean = (text) => /[가-힣]/.test(text);
const translateToKorean = (keyword) => AtoH.convert(keyword) || keyword;

const SearchDetail = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("Query") || "";
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.book.bookSearchBooks);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [originalBooks, setOriginalBooks] = useState([]);

  // console.log("search", searchResults);

  // 페이지네이션 적용
  const ITEMS_PER_PAGE = 15;

  useEffect(() => {
    const fetchBooks = async () => {
      const translatedKeyword = translateToKorean(query);
      await dispatch(bookAction.getBooksApi(null, translatedKeyword));
      setLoading(false);
    };

    if (query) {
      setLoading(true);
      fetchBooks();
    }
  }, [query, dispatch]);

  const handleChangePage = (_, newPage) => {
    window.scroll(0, 0);
    setCurrentPage(newPage);
  };

  useEffect(() => {
    if (searchResults?.item) {
      setOriginalBooks(searchResults.item);
      const translatedQuery = translateToKorean(query);

      // 키워드와 카테고리로 필터링
      const filtered = searchResults.item.filter((book) => {
        const category = book?.categoryName.split(">");
        return (
          book?.title.includes(translatedQuery) ||
          book?.author.includes(translatedQuery) ||
          category[1]?.includes(query)
        );
      });

      setFilteredBooks(filtered);
    }
  }, [searchResults, query]);

  if (loading) {
    return <Loading2 />;
  }

  // 정렬된 도서를 기준으로 페이지네이션 자르기
  const paginatedBooks = filteredBooks.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // console.log("filteredBooks", filteredBooks);

  const handleSortDefault = () => {
    setFilteredBooks(
      originalBooks.filter((book) => {
        const category = book?.categoryName.split(">");
        return book?.title.includes(query) || category[1]?.includes(query);
      })
    );
  };

  const handleSortTitle = () => {
    const sorted = [...filteredBooks].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setFilteredBooks(sorted);
  };

  const handleSortDate = () => {
    const sorted = [...filteredBooks].sort(
      (a, b) => new Date(b.pubDate) - new Date(a.pubDate)
    );
    setFilteredBooks(sorted);
  };

  return (
    <Container>
      <InfoText>
        {isKorean(query) ? (
          <p>
            <b>"{query}"</b>에 대한 검색 결과입니다
          </p>
        ) : (
          <p>
            검색하신 <b>"{query}"</b>의 대한 수정된 결과입니다 :
            <b>"{translateToKorean(query)}"</b>
          </p>
        )}
      </InfoText>
      <Select>
        {searchResults?.totalResults <= 15 ? (
          <p>전체 {filteredBooks?.length}권</p>
        ) : (
          <p>전체 {searchResults?.totalResults}권</p>
        )}

        <select
          onChange={(e) => {
            if (e.target.value === "default") handleSortDefault();
            if (e.target.value === "name") handleSortTitle();
            if (e.target.value === "date") handleSortDate();
          }}
        >
          <option value="default">기본순</option>
          <option value="name">이름순</option>
          <option value="date">출간순</option>
        </select>
      </Select>
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
          alignItems: "center",
        }}
      >
        <Pagination
          count={Math.ceil(searchResults?.totalResults / ITEMS_PER_PAGE)}
          page={currentPage}
          onChange={handleChangePage}
          color="standard"
        />
      </Stack>
    </Container>
  );
};

export default SearchDetail;
