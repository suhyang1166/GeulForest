const initialState = {
  todayWebtoons: {},
};

const webtoonReduer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case "GET_WEBTOON_SUCCESS":
      return {
        ...state,
        todayWebtoons: payload.todayWebtoons,
      };
    default:
      return state;
  }
};

export default webtoonReduer;
