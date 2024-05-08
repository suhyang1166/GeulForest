import axios from "axios";

const API_KEY = process.env.REACT_APP_BOOK_API_KEY;

export const api = axios.create({
    // baseURL: "http://www.aladin.co.kr/ttb/api/",
    baseURL: "/api",
    // baseURL: "https://geulforest.netlify.app/",
    params: {
        TTBKey: API_KEY,
        output: "js",
        Version: "20131101",
        Cover: "Big",
    },
    withCredentials: true,
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
