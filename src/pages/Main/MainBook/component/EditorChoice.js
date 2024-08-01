import React, { useRef, useState, useEffect } from "react";
import { styled } from "styled-components";
import BookItem from "./BookItem";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setActiveMenu } from "../../../../redux/reducers/menuSlice";
import Heart from "../../../../components/Heart/Heart";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 20px;
  padding: 0 20px;
  margin-top: 33px;
  overflow: hidden;
  cursor: pointer;
`;

const Title = styled.div`
  h1 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  P {
    font-size: 12px;
    color: #888;
    margin: 0;
  }
`;

const RandomBook = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
    background-image: url(${(props) => props.$bgImg});
    background-size: cover;
    background-position: center;
    box-shadow: 0 0 2px #000;
    border-radius: 10px;
    opacity: 0.2;
    z-index: -1;
  }
  span {
    position: absolute;
    top: 14%;
    right: 5px;
    z-index: 50;
  }
`;

const RandomItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 20px;
`;

const RandomTitle = styled.div`
  h3 {
    font-size: 16px;
    font-weight: bold;
    margin: 0;
  }
  p {
    font-size: 12px;
  }
`;

const RandomImg = styled.div`
  img {
    width: 100px;
    height: 100%;
    box-shadow: 0 0 3px #d9d9d9;
  }
`;

const ItemWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 50px;
  overflow-x: scroll;
  cursor: pointer;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const EditorChoice = ({ itemEditorChoiceBooks }) => {
  // 가로스크롤 이벤트 함수
  const scrollRef = useRef(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const authenciate = useSelector((state) => state.auth.authenciate);
  const navigate = useNavigate();

  const goToBookDetail = () => {
    if (authenciate === true) {
      navigate(`/${itemEditorChoiceBooks[randomIdx]?.itemId}`);
    } else {
      alert("로그인 후 이용가능합니다.");
      setActiveMenu("today");
      navigate("/login");
    }
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDrag) {
        const newScrollLeft = startX - e.pageX + scrollLeft;
        scrollRef.current.scrollLeft = newScrollLeft;
      }
    };

    const handleMouseUp = () => {
      setIsDrag(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDrag, startX, scrollLeft]);

  const onDragStart = (e) => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  // 드래그 이벤트로 발생되는 변동사항으로 랜덤 이미지 계속 변경됨 > 새로고침 할때만 랜덤함수 실행
  const [randomIdx, setRandomIdx] = useState(null);

  // 컴포넌트가 처음 마운트될 때 랜덤 인덱스 설정
  useState(() => {
    setRandomIdx(Math.floor(Math.random() * 15));
  }, []);

  // 현재시간함수
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const date = new Date();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const week = days[date.getDay()];

  return (
    <Container>
      <Title>
        <h1>여기 주목! 오늘의 추천도서</h1>
        <p>
          {month}월 {day}일 {week}요일 업데이트
        </p>
      </Title>
      <RandomBook $bgImg={itemEditorChoiceBooks[randomIdx]?.cover}>
        <RandomItem onClick={goToBookDetail}>
          <RandomTitle>
            <h3>{itemEditorChoiceBooks[randomIdx]?.title.split(" ", 1)}</h3>
            <p>{itemEditorChoiceBooks[randomIdx]?.author.split(" ", 1)} 저자</p>
          </RandomTitle>
          <RandomImg>
            <img
              src={itemEditorChoiceBooks[randomIdx]?.cover}
              alt="randombook"
            />
          </RandomImg>
        </RandomItem>
        <span>
          <Heart book={itemEditorChoiceBooks[randomIdx]} />
        </span>
      </RandomBook>
      <ItemWrap onMouseDown={onDragStart} ref={scrollRef}>
        {itemEditorChoiceBooks.map((book, idx) => (
          <BookItem key={idx} book={book} />
        ))}
      </ItemWrap>
    </Container>
  );
};

export default EditorChoice;
