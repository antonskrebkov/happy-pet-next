import { friendsAPI } from "@/services/Friends.service";
import { applicationsAPI } from "@/services/Applications.service";
import { questionsAPI } from "@/services/Questions.service";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import queryReducer from "./slices/querySlice";
import cartReducer from "./slices/cartSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  query: queryReducer,
  cart: cartReducer,
  [friendsAPI.reducerPath]: friendsAPI.reducer,
  [applicationsAPI.reducerPath]: applicationsAPI.reducer,
  [questionsAPI.reducerPath]: questionsAPI.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([
      friendsAPI.middleware,
      applicationsAPI.middleware,
      questionsAPI.middleware,
    ]),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
