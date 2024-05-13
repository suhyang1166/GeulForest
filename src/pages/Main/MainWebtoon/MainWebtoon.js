import React, { useEffect } from "react";
import MainBtn from "../../../components/Btn/MainBtn";
import { webtoonAction } from "../../../redux/actions/webtoonAction";
import { useDispatch, useSelector } from "react-redux";
import MainSlider from "./component/MainSlider";

const MainWebtoon = () => {
  const dispatch = useDispatch();
  const { todayWebtoons } = useSelector((state) => state.webtoons);


  useEffect(() => {
    dispatch(webtoonAction.getWebtoonApi());
  }, []);

  return (
    <div>
      <MainBtn />
      {todayWebtoons.webtoons && (
        <MainSlider webtoons={todayWebtoons?.webtoons[0]} />
      )}
    </div>
  );
};

export default MainWebtoon;
