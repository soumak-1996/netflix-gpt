import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import storage from "redux-persist/lib/storage";
import { PersistConfig, persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import GPTReducer from "./GPTSlice";
import configReducer from "./configSlice";
const persistConfig = {
  key: 'root',
  version : 1,
  storage,
}
const reducer = combineReducers(
  {
    user: userReducer,
    movies : moviesReducer,
    gpt : GPTReducer,
    config : configReducer
  }
)
const persistedReducer = persistReducer(persistConfig,reducer);
const appStore = configureStore(
    {
        reducer : persistedReducer
    }
)
export default appStore;