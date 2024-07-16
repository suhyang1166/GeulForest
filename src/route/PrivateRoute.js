import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import MyPage from "../pages/MyPage/MyPage";

const PrivateRoute = () => {
  const authenciate = useSelector((state) => state.auth.authenciate);
  return authenciate === true ? <MyPage /> : <Navigate to="/login" />;
};

export default PrivateRoute;
