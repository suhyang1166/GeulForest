import React, { useEffect, useState } from "react";
import MainBtn from "../../../components/Btn/MainBtn";
import { webtoonAction } from "../../../redux/actions/webtoonAction";
import { useDispatch, useSelector } from "react-redux";
import MainSlider from "./component/MainSlider";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: lightgray;
`;

const MainWebtoon = () => {
  const dispatch = useDispatch();
  // const [topWebtoon, setTopWebtoon] = useState(null);

  const { todayWebtoons, providerWebtoons, pouplarWebtoons, authorWebtoons } =
    useSelector((state) => state.webtoons);
  // console.log("eee", pouplarWebtoons);

  useEffect(() => {
    dispatch(webtoonAction.getWebtoonApi());
  }, []);

  // useEffect(() => {
  //   if (pouplarWebtoons && pouplarWebtoons.webtoons) {
  //     const sortedWebtoons = pouplarWebtoons.webtoons.sort(
  //       (a, b) => b.fanCount - a.fanCount
  //     );
  //     setTopWebtoon(sortedWebtoons[0]);
  //   }
  // }, [pouplarWebtoons]);

  return (
    <Container>
      <MainBtn />
      {/* {pouplarWebtoons.webtoons && (
        <MainSlider webtoons={pouplarWebtoons?.webtoons[0]} />
      )} */}
      <h3>준비 중 입니다.</h3>
    </Container>
    // <div>
    //   <MainBtn />
    //   {topWebtoon && (
    //     <div>
    //       <a href={topWebtoon.url} target="_blank">
    //         <img src={topWebtoon.img} alt={topWebtoon.title} />
    //       </a>
    //       <h2>{topWebtoon.title}</h2>
    //       <p>작가: {topWebtoon.author}</p>
    //       <p>팬 수: {topWebtoon.fanCount}만</p>
    //     </div>
    //   )}
    // </div>
  );
};

export default MainWebtoon;
