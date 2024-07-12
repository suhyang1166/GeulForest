import { combineReducers } from "redux";
import webtoonReduer from "./webtoonReducer";
import bookReducer from "./bookReducer";
import bookMarkSlice from "./bookMarkSlice";

export default combineReducers({
  book: bookReducer,
  webtoons: webtoonReduer,
  bookMark: bookMarkSlice,
});
