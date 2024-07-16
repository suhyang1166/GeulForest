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

const AddHeart = styled.span`
  width: 30px;
  height: 30px;
  color: ${(props) => (props.changeIcon ? "red" : "lightgray")};
  text-shadow: 0 0 10px red;
  z-index: 10;
  cursor: pointer;
`;

const Heart = ({ bookTitle }) => {
  let bookMark = useSelector((state) => state.bookMark.bookMark);
  const authenciate = useSelector((state) => state.auth.authenciate);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isBookMarked = bookMark.includes(bookTitle);
  const [changeIcon, setChangeIcon] = useState(isBookMarked);

  useEffect(() => {
    setChangeIcon(isBookMarked);
  }, [isBookMarked, bookMark]);

  const toggleBookMark = () => {
    if (changeIcon) {
      dispatch(removeBookMark(bookTitle));
    } else {
      dispatch(addBookMark(bookTitle));
    }

    setChangeIcon(!changeIcon);
  };

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
      changeIcon={changeIcon}
    >
      <FontAwesomeIcon
        icon={changeIcon ? solidHeart : regularHeart}
        color={changeIcon ? "red" : "lightgray"}
      />
    </AddHeart>
  );
};

export default Heart;
