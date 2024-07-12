import React, { useState } from "react";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  addBookMark,
  removeBookMark,
} from "../../redux/reducers/bookMarkSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";

const AddHeart = styled.span`
  width: 15px;
  height: 15px;
  color: ${(props) => (props.changeIcon ? "red" : "lightgray")};
  text-shadow: 0 0 10px red;
  z-index: 10;
  cursor: pointer;
`;

const Heart = ({ bookTitle }) => {
  const bookMark = useSelector((state) => state.bookMark.bookMark);
  const isBookMarked = bookMark.includes(bookTitle);
  const [changeIcon, setChangeIcon] = useState(isBookMarked);
  const dispatch = useDispatch();

  const toggleBookMark = () => {
    if (changeIcon) {
      dispatch(removeBookMark(bookTitle));
      console.log("remove", removeBookMark(bookTitle));
    } else {
      dispatch(addBookMark(bookTitle));
    }
    setChangeIcon((prev) => !prev);
  };

  // const filterBookMark = bookMark.filter((book) => {
  //   // console.log(book);
  //   // () => {
  //   //   dispatch(removeBookMark(bookTitle));
  //   // };
  // });

  // console.log("bookMark", bookMark);
  // console.log("filterBookMark", filterBookMark);

  return (
    <AddHeart onClick={toggleBookMark} changeIcon={changeIcon}>
      <FontAwesomeIcon
        icon={changeIcon ? solidHeart : regularHeart}
        color={changeIcon ? "red" : "lightgray"}
      />
    </AddHeart>
  );
};

export default Heart;
