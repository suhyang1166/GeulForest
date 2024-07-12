import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainBook from "./pages/Main/MainBook/MainBook";
import { useDispatch } from "react-redux";
import Feed from "./pages/Feed/Feed";
import Search from "./pages/Search/Search";
import Category from "./pages/Category/Category";
import MyPage from "./pages/MyPage/MyPage";
import NotFoundPage from "./pages/Nodata/NotFoundPage";
import MainWebtoon from "./pages/Main/MainWebtoon/MainWebtoon";
import Loading from "./pages/Nodata/Loading";
import { bookAction } from "./redux/actions/bookAction";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true); // 로딩 상태 추가

  useEffect(() => {
    dispatch(bookAction.getBooksApi()).then(() => {
      setLoading(false); // 데이터 로드 후 로딩 상태 업데이트
    });
  }, [dispatch]);

  if (loading) {
    return <Loading />; // 로딩 중일 때 로딩 스피너 표시
  }
  return (
    <>
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
