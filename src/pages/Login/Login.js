import React from "react";
import styled from "styled-components";

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
  transition: all 0.2s;
  &:hover {
    border: 1px solid #42d76b;
    background: #fff;
    color: #42d76b;
  }
`;

const Login = () => {
  return (
    <Container>
      <Wrap>
        <h1>로그인</h1>
        <Form method="post" action="">
          <Email type="email" placeholder="아이디" autocomplete="userEmail" />
          <PassWord
            type="password"
            placeholder="비밀번호"
            autocomplete="current-password"
          />
        </Form>
        <LoginBtn>로그인</LoginBtn>
      </Wrap>
    </Container>
  );
};

export default Login;
