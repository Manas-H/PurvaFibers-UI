import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { getTotals } from "./cartReducer";
import addressReducer from "../redux/reducers/addressReducer";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import persistConfig from "./persistConfig";

const rootReducer = combineReducers({
  cart: cartReducer,
  address: addressReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
store.dispatch(getTotals());

export const persistor = persistStore(store);

export default store;
