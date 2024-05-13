import { combineReducers } from "redux";
import webtoonReduer from "./webtoonReducer";
import bookReducer from "./bookReducer";

export default combineReducers({
  book: bookReducer,
  webtoons: webtoonReduer,
});
