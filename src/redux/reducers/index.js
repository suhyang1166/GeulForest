import { combineReducers } from "redux";
import webtoonReduer from "./webtoonReducer";

export default combineReducers({ webtoons: webtoonReduer });
