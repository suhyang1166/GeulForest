const initialState = {
  todayWebtoons: {},
  providerWebtoons: {},
  pouplarWebtoons: {},
  authorWebtoons: {},
};

const webtoonReduer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "GET_WEBTOON_SUCCESS":
      return {
        ...state,
        todayWebtoons: payload.todayWebtoons,
        providerWebtoons: payload.providerWebtoons,
        pouplarWebtoons: payload.pouplarWebtoons,
        authorWebtoons: payload.authorWebtoons,
      };
    default:
      return state;
  }
};

export default webtoonReduer;
