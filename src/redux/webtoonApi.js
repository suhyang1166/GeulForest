import axios from "axios";

export const webtoonApi = axios.create({
  baseURL: "https://korea-webtoon-api.herokuapp.com",
});

// 데이터 호출 시 오류 확인용
webtoonApi.interceptors.request.use(
  function (config) {
    // console.log("request start", config);
    return config;
  },
  function (error) {
    // console.log("request error", error);
    return Promise.reject(error);
  }
);

webtoonApi.interceptors.response.use(
  function (response) {
    // console.log("get request", response);
    return response;
  },
  function (error) {
    // console.log("response error", error);
    return Promise.reject(error);
  }
);
