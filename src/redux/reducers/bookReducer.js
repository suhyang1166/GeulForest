const initialState = {
  aladinBook: {},
};

const bookReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_BOOK_REQUEST":
      return { ...state };
    case "GET_BOOK_SUCCESS":
      return {
        ...state,
      };
  }
};
