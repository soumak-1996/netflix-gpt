import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import GPTReducer from "./GPTSlice";
import configReducer from "./configSlice";
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
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
        reducer : persistedReducer,
        middleware: getDefaultMiddleware({
          serializableCheck: {
            // Ignore redux-persist action types
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
    }
)
export default appStore;