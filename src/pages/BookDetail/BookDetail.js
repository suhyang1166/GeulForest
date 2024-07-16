import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { bookAction } from "../../redux/actions/bookAction";
import styled from "styled-components";
import Loading2 from "../Nodata/Loading2";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    <Container>
      {data.item && (
        <div>
          <h3>{data?.item[0].title}</h3>
          <p>{data?.item[0].description}</p>
        </div>
      )}
    </Container>
  );
};
export default BookDetail;
