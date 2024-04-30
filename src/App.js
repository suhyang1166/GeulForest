import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";
import Main from "./pages/Main/Main";
import Feed from "./pages/Feed/Feed";
import Search from "./pages/Search/Search";
import Category from "./pages/Category/Category";
import MyPage from "./pages/MyPage/MyPage";
import NotFoundPage from "./pages/Nodata/NotFoundPage";

function App() {
    return (
        <>
            <Header />
            <Routes>
                {/* 메인 도서/웹툰 라우터 설정 재정리 필요 + 도서상세 */}
                <Route path="/" element={<Main />} />
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
