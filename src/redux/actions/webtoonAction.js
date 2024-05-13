import { webtoonApi } from "../webtoonApi";

const getWebtoonApi = () => {
  return async (dispatch) => {
    dispatch({
      type: "GET_WEBTOON_REQUEST",
    });

    try {
      const todayWebtoonApi = webtoonApi.get(
        `/?perPage=2&page=1&service=naver&updateDay=tue`
      );

      let [todayWebtoons] = await Promise.all([todayWebtoonApi]);

      dispatch({
        type: "GET_WEBTOON_SUCCESS",
        payload: {
          todayWebtoons: todayWebtoons.data,
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
