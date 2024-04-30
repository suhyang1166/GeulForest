import axios from "axios";

export const api = axios.create({});

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
