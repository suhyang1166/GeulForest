import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 80px;
  padding: 0 20px;
  span {
    font-size: 16px;
    color: #888;
    cursor: pointer;
    &:hover {
      font-weight: bold;
      text-decoration: underline;
    }
  }
`;

const Text = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 10px;
  h3 {
    font-size: 24px;
    font-weight: bold;
  }
  h5 {
    font-size: 16px;
    color: #888;
  }
`;

const More = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  p {
    margin-bottom: 0;
  }
  p:first-child {
    width: 100%;
    height: 100%;
    color: #333;
    line-height: 26px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${(props) => (props.$moreInfo ? "none" : "2")};
    -webkit-box-orient: vertical;
    word-break: keep-all;
    max-height: ${(props) => (props.$moreInfo ? "none" : "4.5em")};
    transition: max-height 0.3s ease;
  }
  p:last-child {
    color: #888;
    margin-top: 10px;
    cursor: pointer;
    &:hover {
      font-weight: bold;
    }
  }
`;

const ImgWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InfoImg = styled.div`
  width: 100vw;
  max-width: 500px;
  height: 100vw;
  max-height: 500px;
  background: url(${(props) => props.$img}) center / contain no-repeat;
`;

const BookIntroduction = ({ book }) => {
  const [moreInfo, setMoreInfo] = useState(false);

  const handleMoreInfo = () => {
    setMoreInfo(!moreInfo);
  };

  const goToHomePage = () => {
    window.open(`${book?.link.replace('"', "")}`);
  };
  return (
    <Container>
      <Text>
        <h3>책 소개</h3>
        <h5>{book?.subInfo?.bestSellerRank}</h5>
        {book?.description === "" ? (
          <h5>도서 정보가 없습니다.</h5>
        ) : (
          <More $moreInfo={moreInfo}>
            <p>{book?.description}</p>
            <p onClick={handleMoreInfo}>{moreInfo ? "닫기" : "자세히 보기"}</p>
          </More>
        )}
      </Text>
      <ImgWrap>
        {book?.subInfo?.cardReviewImgList?.map((item, idx) => (
          <InfoImg key={idx} $img={item.replace('"', "")} />
        ))}
      </ImgWrap>
      <span onClick={goToHomePage}>
        더 자세한 정보는 클릭하여 사이트를 확인해주세요.
      </span>
    </Container>
  );
};

export default BookIntroduction;
