import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { bookAction } from "../../redux/actions/bookAction";
import styled from "styled-components";
import Loading2 from "../Nodata/Loading2";
import DetailHeader from "../../components/Header/DetailHeader";
import BookDetailMain from "./component/BookDetailMain";
import BookIntroduction from "./component/BookIntroduction";
import Comment from "./component/Comment";
import Category from "./component/Category";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin: 80px 0;
`;

const BookDetail = () => {
  const { itemId } = useParams();
  const data = useSelector((state) => state.book.bookDetailBooks);

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bookAction.getBooksApi(itemId)).then(() => setLoading(false));
  }, [dispatch, itemId]);

  console.log("detailData", data);

  if (loading) {
    return <Loading2 />;
  }
  return (
    <>
      <DetailHeader />
      {data?.item[0] && (
        <Container>
          <BookDetailMain book={data?.item[0]} />
          <Category book={data?.item[0]} />
          <BookIntroduction book={data?.item[0]} />
          <Comment />
        </Container>
      )}
    </>
  );
};
export default BookDetail;
