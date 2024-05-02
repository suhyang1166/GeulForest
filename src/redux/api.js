import axios from "axios";

const API_KEY = process.env.REACT_APP_BOOK_API_KEY;

// export const api = axios.create({
//   baseURL: "http://www.aladin.co.kr/ttb/api/",
//   params: {
//     TTBKey: API_KEY,
//     output: "js",
//     Version: "20131101",
//     Cover: "Big",
//   },
//   withCredentials: true,
// });

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "http://www.aladin.co.kr/ttb/api" // 운영 환경에서 사용할 API의 기본 URL
    : "/ttb/api"; // 개발 환경에서 사용할 API의 기본 URL
export const api = axios.create({
  baseURL: BASE_URL,
  params: {
    TTBKey: API_KEY,
    output: "js",
    Version: "20131101",
    Cover: "Big",
  },
});

// 데이터 호출 시 오류 확인용
api.interceptors.request.use(
  function (config) {
    console.log("request start", config);
    return config;
  },
  function (error) {
    console.log("request error", error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    console.log("get request", response);
    return response;
  },
  function (error) {
    console.log("response error", error);
    return Promise.reject(error);
  }
);
