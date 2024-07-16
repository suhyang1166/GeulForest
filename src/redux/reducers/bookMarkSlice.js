import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookMark: [],
};

const bookMarkSlice = createSlice({
  name: "bookMark",
  initialState,
  reducers: {
    addBookMark: (state, action) => {
      state.bookMark.push(action.payload);
    },
    removeBookMark: (state, action) => {
      state.bookMark = state.bookMark.filter(
        (book) => book.itemId !== action.payload.itemId
      );
    },
  },
});

export const { addBookMark, removeBookMark } = bookMarkSlice.actions;
export default bookMarkSlice.reducer;
