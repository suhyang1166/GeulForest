import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainBook from "./pages/Main/MainBook/MainBook";
import Feed from "./pages/Feed/Feed";
import Search from "./pages/Search/Search";
import Category from "./pages/Category/Category";
import MyPage from "./pages/MyPage/MyPage";
import NotFoundPage from "./pages/Nodata/NotFoundPage";
import MainWebtoon from "./pages/Main/MainWebtoon/MainWebtoon";
import { createGlobalStyle } from "styled-components";

function App() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Routes>
                {/* 메인 도서/웹툰 라우터 설정 재정리 필요 + 도서상세 */}
                <Route path="/" element={<MainBook />} />
                <Route path="/webtoon" element={<MainWebtoon />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/search" element={<Search />} />
                <Route path="/category" element={<Category />} />
                {/* 나중에 PrivateRoute 적용 예정 */}
                <Route path="/mypage" element={<MyPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;

// ------- styled components -------
const GlobalStyle = createGlobalStyle`
/* reset & font */
@import url(./assets/font/Font.css);
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
li {
    list-style: none;
}
a {
    text-decoration: none;
    color: inherit;
}

body {
    font-family: "SD M";
    width:100%;
    max-width:500px;
    margin: 0 auto;
}`;
