# 글숲 (GeulForest)

[**Website**](https://geulforest.netlify.app/) | [**Figma Design**](https://www.figma.com/design/6f8sd1uARovQCQwaTK6zbu/BOOK?node-id=1-3&t=O5kHxcTVjyBQXfnS-1) | [**GitHub Repository**](https://github.com/suhyang1166/GeulForest)

## 🙌 프로젝트 소개

"글숲(GeulForest)"은 알라딘 API를 이용하여 도서 정보를 제공하는 웹 애플리케이션입니다. 이 프로젝트는 사용자 인증을 통해 로그인을 한 유저만이 도서 검색, 상세 페이지 조회, 북마크 기능을 사용할 수 있도록 구현되었습니다. 사용자는 다양한 추천 도서를 확인할 수 있으며, Redux를 사용하여 상태 관리를 수행하였습니다.

## 🖥️ 기술 스택

### Frontend

- React
- Redux
- styled-components
- Swiper

### 서비스 배포 환경

- Netlify

## 🗂️ 페이지 구성

- **Main**
- **Search**
- **Login**
- **Mypage**

## ❌ CORS ERR 해결

알라딘 API를 호출하는 과정에서 CORS 오류가 발생하여, `setupProxy` 미들웨어를 사용해 프록시 서버를 설정하여 문제를 해결하였습니다.

## ✅ 주요 기능

### 메인페이지

- Swiper를 이용한 자동 슬라이드 및 드래그 기능을 통해 사용자가 다양한 도서를 탐색할 수 있도록 구현하였습니다.
- 로그인한 사용자는 도서의 상세 정보와 북마크 기능을 사용할 수 있으며, Redux를 활용하여 상태 관리를 효율적으로 처리하였습니다.

### 상세페이지

- 도서의 상세 정보 페이지에서는 북마크 기능과 책 소개 부분에서 토글 버튼을 사용하여 UI의 일관성을 유지하였습니다.
- 이를 통해 사용자 경험을 향상시켰습니다.

### 로그인 / 마이페이지

- 마이페이지에 이미지 업로드 기능을 추가하여, Redux로 관리된 이미지가 푸터에도 자동으로 연동되도록 구현하였습니다.
- 도서 추천 기능을 통해 다양한 추천 도서를 제공합니다.

### 검색페이지

- 사용자는 키워드 검색 또는 카테고리 선택을 통해 도서를 검색할 수 있습니다.
- 검색 결과는 영어로 입력된 경우에도 한글로 자동 번역되어 제공되며, MUI 라이브러리를 이용해 페이지네이션 기능을 구현하여 많은 결과를 쉽게 탐색할 수 있도록 하였습니다.

## 📁 프로젝트 구성

```
public
src
├─ assets
│  ├─ font
│  ├─ header
│  ├─ images
│  ├─ loading
│  ├─ lottie
│  └─ source
├─ components
│  ├─ Btn
│  │  └─ MainBtn.js
│  ├─ Footer
│  │  └─ Footer.js
│  ├─ Header
│  │  ├─ DetailHeader.js
│  │  ├─ Header.js
│  │  └─ SideBar.js
│  └─ Heart
│     └─ Heart.js
├─ pages
│  ├─ BookDetail
│  │  ├─ component
│  │  │  ├─ BookDetailMain.js
│  │  │  ├─ BookIntroduction.js
│  │  │  ├─ Category.js
│  │  │  ├─ Comment.js
│  │  │  └─ Reviews.js
│  │  └─ BookDetail.js
│  ├─ Category
│  │  └─ Category.js
│  ├─ Feed
│  │  └─ Feed.js
│  ├─ Login
│  │  └─ Login.js
│  ├─ Main
│  │  ├─ MainBook
│  │  │  ├─ component
│  │  │  │  ├─ BestBook.js
│  │  │  │  ├─ BestSeller.js
│  │  │  │  ├─ BookItem.js
│  │  │  │  ├─ BookMark.js
│  │  │  │  ├─ EditorChoice.js
│  │  │  │  ├─ MainSlider.js
│  │  │  │  ├─ NewBook.js
│  │  │  │  ├─ NewBooks.js
│  │  │  │  └─ swiper.css
│  │  └─ MainWebtoon
│  │     ├─ component
│  │     │  ├─ MainSlider.js
│  │     │  └─ MainTodayToon.js
│  │     └─ MainWebtoon.js
│  ├─ MyPage
│  │  ├─ component
│  │  │  ├─ AddBooks.js
│  │  │  ├─ MyProfile.js
│  │  │  ├─ RecommendBook.js
│  │  │  └─ UserImg.js
│  │  └─ MyPage.js
│  ├─ Nodata
│  │  ├─ Loading.js
│  │  ├─ Loading2.js
│  │  └─ NotFoundPage.js
│  ├─ Search
│  │  ├─ component
│  │  │  └─ CategorySearch.js
│  │  └─ Search.js
│  ├─ SearchDetail
│  │  └─ SearchDetail.js
├─ redux
│  ├─ actions
│  │  ├─ authenciateAction.js
│  │  ├─ bookAction.js
│  │  ├─ bookMarkAction.js
│  │  └─ webtoonAction.js
│  ├─ reducers
│  │  ├─ authenciateReducer.js
│  │  ├─ bookMarkSlice.js
│  │  ├─ bookReducer.js
│  │  ├─ index.js
│  │  ├─ menuSlice.js
│  │  ├─ userImgSlice.js
│  │  └─ webtoonReducer.js
│  ├─ api.js
│  ├─ bookApi.js
│  ├─ store.js
│  └─ webtoonApi.js
├─ route
│  └─ PrivateRoute.js
├─ App.js
├─ index.css
├─ index.js
└─ setupProxy.js

```
