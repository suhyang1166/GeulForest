import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { authenciateAction } from "../../redux/actions/authenciateAction";
import { setActiveMenu } from "../../redux/reducers/menuSlice";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-bottom: 80px;
  h1 {
    font-size: 24px;
    color: #42d76b;
    font-weight: bold;
  }
`;

const Form = styled.form`
  width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Email = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #f5f5f5;
  background: #f5f5f5;
  border: none;
  padding-left: 10px;
  &::placeholder {
    color: #888;
  }
  &:focus {
    outline: 1px solid #42d76b;
  }
`;

const PassWord = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #f5f5f5;
  background: #f5f5f5;
  border: none;
  padding-left: 10px;
  &::placeholder {
    color: #888;
  }
  &:focus {
    outline: 1px solid #42d76b;
  }
`;

const LoginBtn = styled.button`
  width: 320px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #f5f5f5;
  color: #fff;
  background: #42d76b;
  font-size: 16px;
  border: 1px solid #42d76b;
  margin-top: 30px;
  transition: all 0.2s;
  &:hover {
    border: 1px solid #42d76b;
    background: #fff;
    color: #42d76b;
  }
`;

const Login = () => {
  const authenciate = useSelector((state) => state.auth);
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginUser = (e) => {
    e.preventDefault();
    dispatch(authenciateAction.login(id, password));
    navigate("/");
    setActiveMenu("today");
  };
  return (
    <Container>
      <Wrap>
        <h1>로그인</h1>
        <Form method="post" onSubmit={loginUser}>
          <Email
            type="email"
            placeholder="아이디"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <PassWord
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <LoginBtn>로그인</LoginBtn>
        </Form>
      </Wrap>
    </Container>
  );
};

export default Login;
