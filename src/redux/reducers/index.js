import { combineReducers } from "redux";
import webtoonReduer from "./webtoonReducer";
import bookReducer from "./bookReducer";
import bookMarkSlice from "./bookMarkSlice";
import authenciateReducer from "./authenciateReducer";
import menuSlice from "./menuSlice";

export default combineReducers({
  book: bookReducer,
  webtoons: webtoonReduer,
  bookMark: bookMarkSlice,
  auth: authenciateReducer,
  menu: menuSlice,
});
