import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import BookItem from "../../Main/MainBook/component/BookItem";
import { authenciateAction } from "../../../redux/actions/authenciateAction";
import { useNavigate } from "react-router-dom";
import { setActiveMenu } from "../../../redux/reducers/menuSlice";

const AddBook = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 20px;
  h3 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 0;
  }
`;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const NoBook = styled.div`
  width: 100%;
  min-height: 195px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 18px;
    text-align: center;
    color: #888;
    margin-bottom: 0;
  }
`;

const BookMark = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-content: space-between;
  gap: 10px;
`;

const Logout = styled.div`
  width: 100%;
  height: 50px;
  p {
    text-align: center;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      color: #42d76b;
      font-weight: bold;
      text-decoration: underline;
    }
  }
`;

const AddBooks = () => {
  const bookMark = useSelector((state) => state.bookMark.bookMark);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(authenciateAction.logout());
    dispatch(setActiveMenu("today"));
    navigate("/");
  };

  return (
    <AddBook>
      <h3>나의 서재</h3>
      <Wrap>
        <p>전체 {bookMark.length}권</p>
        <span>최근 담은순</span>
      </Wrap>
      {bookMark?.length > 0 ? (
        <BookMark>
          {bookMark?.map((item) => (
            <BookItem key={item?.itemId} book={item} />
          ))}
        </BookMark>
      ) : (
        <NoBook>
          <p>맘에 드는 책을 담아주세요!</p>
        </NoBook>
      )}
      <Logout>
        <p onClick={logoutUser}>로그아웃을 하시겠습니까?</p>
      </Logout>
    </AddBook>
  );
};

export default AddBooks;
