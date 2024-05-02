import { api } from "../api";

const API_KEY = process.env.REACT_APP_BOOK_API_KEY;

const getBooksApi = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "GET_BOOK_REQUEST",
      });
      const aladinApi = await api.get(
        `test/ItemList_20131101.js`
        // `ItemList.aspx`
      );
      console.log("aaa", aladinApi);
    } catch (error) {
      dispatch({
        type: "GET_BOOK_FAILURE",
      });
    }
  };
};

export const bookAction = { getBooksApi };
