import { configureStore } from "@reduxjs/toolkit";

// import rootReducer from "./reducers";
import navReducer from "./slices/navSlice";

export const store = configureStore({ reducer: navReducer });
// The store now has redux-thunk added and the Redux DevTools Extension is turned on
