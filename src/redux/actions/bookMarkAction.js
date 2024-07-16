export const addBookMark = (bookTitle) => ({
  type: "ADD_BOOKMARK",
  payload: bookTitle,
});

export const removeBookMark = (bookTitle) => ({
  type: "REMOVE_BOOKMARK",
  payload: bookTitle,
});
