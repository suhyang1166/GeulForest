import { webtoonApi } from "../webtoonApi";

const getWebtoonApi = () => {
  return async (dispatch) => {
    dispatch({
      type: "GET_WEBTOON_REQUEST",
    });

    try {
      const todayWebtoons = await webtoonApi.get(
        `https://korea-webtoon-api.herokuapp.com`
      );

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
