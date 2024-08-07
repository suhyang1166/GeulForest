import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  addBookMark,
  removeBookMark,
} from "../../redux/reducers/bookMarkSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import { setActiveMenu } from "../../redux/reducers/menuSlice";
import { authenciateAction } from "../../redux/actions/authenciateAction";

const AddHeart = styled.span`
  width: 30px;
  height: 30px;
  color: ${(props) => (props.$changeIcon ? "red" : "lightgray")};
  text-shadow: 0 0 10px red;
  z-index: 10;
  cursor: pointer;
`;

const Heart = ({ book }) => {
  let bookMark = useSelector((state) => state.bookMark.bookMark);
  const authenciate = useSelector((state) => state.auth.authenciate);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isBookMarked = bookMark.some(
    (markedBook) => markedBook.itemId === book.itemId
  );
  const [changeIcon, setChangeIcon] = useState(isBookMarked);

  useEffect(() => {
    setChangeIcon(isBookMarked);
  }, [isBookMarked, bookMark]);

  useEffect(() => {
    if (!authenciate) {
      setChangeIcon(false); // 로그아웃 시 하트 표시 초기화
    }
  }, [authenciate]);

  const toggleBookMark = () => {
    if (changeIcon) {
      dispatch(removeBookMark(book));
    } else {
      dispatch(addBookMark(book));
    }

    setChangeIcon(!changeIcon);
  };
  // console.log("BOOKMARK", bookMark);

  return (
    <AddHeart
      onClick={() => {
        if (authenciate === true) {
          toggleBookMark();
        } else {
          alert("로그인 후 이용가능합니다.");
          setActiveMenu("today");
          navigate("/login");
        }
      }}
      $changeIcon={changeIcon}
    >
      <FontAwesomeIcon
        icon={changeIcon ? solidHeart : regularHeart}
        color={changeIcon ? "red" : "lightgray"}
      />
    </AddHeart>
  );
};

export default Heart;
