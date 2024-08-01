import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { setPreviewImg } from "../../../redux/reducers/userImgSlice";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  input {
    display: none;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  p {
    font-size: 12px;
    color: #888;
    cursor: pointer;
    &:hover {
      font-weight: bold;
    }
  }
`;

const UploadImg = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  background: url(${(props) => props.$previewImg}) center/cover no-repeat;
  cursor: pointer;
`;

const Icon = styled(FontAwesomeIcon)`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  color: #42d76b;
  cursor: pointer;
`;

const UserImg = () => {
  const previewImg = useSelector((state) => state.user.previewImg);
  const dispatch = useDispatch();

  const uploadFile = (e) => {
    const fileArr = e.target.files;
    const fileRead = new FileReader();

    fileRead.onload = () => {
      dispatch(setPreviewImg(fileRead.result));
    };

    fileRead.readAsDataURL(fileArr[0]);
  };

  return (
    <Container>
      {previewImg !== "" ? (
        <Label htmlFor="fileInput">
          <UploadImg $previewImg={previewImg} />
          <p>프로필 설정</p>
        </Label>
      ) : (
        <Label htmlFor="fileInput">
          <Icon icon={faCircleUser} />
          <p>프로필 설정</p>
        </Label>
      )}
      <input
        id="fileInput"
        accept=".png, .jpeg, .jpg"
        type="file"
        onChange={uploadFile}
      />
    </Container>
  );
};

export default UserImg;
