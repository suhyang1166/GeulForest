import { webtoonApi } from "../webtoonApi";

const getWebtoonApi = () => {
  const week = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  const today = new Date();
  const dayIndex = today.getDay();
  const dayName = week[dayIndex];

  const provider = ["naver", "kakao", "kakaoPage"];
  const getRandomProvider = (providers) => {
    const randomIndex = Math.floor(Math.random() * providers.length);
    return providers[randomIndex];
  };
  const randomProvider = getRandomProvider(provider);
  return async (dispatch) => {
    dispatch({
      type: "GET_WEBTOON_REQUEST",
    });

    try {
      const todayWebtoonApi = webtoonApi.get(
        `/?perPage=2&page=1&service=naver&updateDay=${dayName}`
      );
      const providerWebtoonApi = webtoonApi.get(
        `/?perPage=10&page=1&service=${randomProvider}&updateDay=naverDaily`
      );

      const pouplarWebtoonApi =
        webtoonApi.get(`/?perPage=1000&page=1&service=naver
      `);

      const authorWebtoonApi = webtoonApi.get(`/search?keyword=조석`);

      let [todayWebtoons, providerWebtoons, pouplarWebtoons, authorWebtoons] =
        await Promise.all([
          todayWebtoonApi,
          providerWebtoonApi,
          pouplarWebtoonApi,
          authorWebtoonApi,
        ]);

      dispatch({
        type: "GET_WEBTOON_SUCCESS",
        payload: {
          todayWebtoons: todayWebtoons.data,
          providerWebtoons: providerWebtoons.data,
          pouplarWebtoons: pouplarWebtoons.data,
          authorWebtoons: authorWebtoons.data,
        },
      });
    } catch (error) {
      dispatch({
        type: "GET_WEBTOON_FAILURE",
        payload: error.message,
      });
    }
  };
};

export const webtoonAction = { getWebtoonApi };
