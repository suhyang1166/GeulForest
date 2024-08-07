import React, { useState } from "react";
import { styled } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
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
  border-radius: 10px;
  overflow: hidden;
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
    filter: blur(3px);
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

const ItemWrap = styled(Swiper)`
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

const Items = styled(SwiperSlide)`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const EditorChoice = ({ itemEditorChoiceBooks }) => {
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
      <ItemWrap
        // slidesPerView={2.7}
        spaceBetween={15}
        grabCursor={true}
        breakpoints={{
          430: {
            slidesPerView: 3.8,
          },
          391: {
            slidesPerView: 3.3,
          },
          0: {
            slidesPerView: 2.8,
          },
        }}
        modules={[Pagination]}
      >
        {itemEditorChoiceBooks.map((book, idx) => (
          <Items key={idx}>
            <BookItem book={book} />
          </Items>
        ))}
      </ItemWrap>
    </Container>
  );
};

export default EditorChoice;
