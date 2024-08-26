// import { createStore, applyMiddleware } from "redux";
// import { thunk } from "redux-thunk";
// import rootReducer from "./reducers";

// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers"; // `rootReducer`는 `combineReducers`로 결합된 리듀서입니다.

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: true }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
