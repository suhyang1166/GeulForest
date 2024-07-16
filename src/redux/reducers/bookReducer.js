const initialState = {
  bestsellerBooks: {},
  itemNewSpecialBooks: {},
  itemEditorChoiceBooks: {},
  bookDetailBooks: {},
};

const bookReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case "GET_BOOK_SUCCESS":
      return {
        ...state,
        bestsellerBooks: payload.bestsellerBooks,
        itemNewSpecialBooks: payload.itemNewSpecialBooks,
        itemEditorChoiceBooks: payload.itemEditorChoiceBooks,
        bookDetailBooks: payload.bookDetailBooks,
      };
    default:
      return state;
  }
};

export default bookReducer;
