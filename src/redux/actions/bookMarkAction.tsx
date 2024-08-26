export const addBookMark = (bookTitle: string) => ({
  type: "ADD_BOOKMARK",
  payload: bookTitle,
});

export const removeBookMark = (bookTitle: string) => ({
  type: "REMOVE_BOOKMARK",
  payload: bookTitle,
});
