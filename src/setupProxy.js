const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://www.aladin.co.kr/ttb",
      changeOrigin: true,
      // pathRewrite: {
      //     "^/api": "/ttb", // 실제 요청 시 '/api' 부분을 '/ttb'로 변경
      // },
    })
  );
};
ㄴ;
