import { faCommentDots, faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 60px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #888;
  p {
    margin-bottom: 0;
    font-size: 12px;
    b {
      color: #333;
      font-weight: bold;
    }
  }
`;

const Icon = styled(FontAwesomeIcon)`
  width: 25px;
  height: 20px;
  margin-bottom: 8px;
`;

const Reviews = ({ book, type }) => {
  const star = book?.subInfo?.ratingInfo?.ratingCount;

  return (
    <Container>
      <Icon icon={type === "star" ? faStar : faCommentDots} />
      {type === "star" ? (
        <>
          <p>도서 평점</p>
          <p>
            <b>{book?.subInfo?.ratingInfo?.ratingScore} 점</b> (
            {book?.subInfo?.ratingInfo?.ratingCount})
          </p>
        </>
      ) : (
        <>
          <p>독자 리뷰</p>
          <p>
            <b>{book?.subInfo?.ratingInfo?.myReviewCount} 개</b>
          </p>
        </>
      )}
    </Container>
  );
};

export default Reviews;
