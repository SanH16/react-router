import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistStore from "redux-persist/lib/persistStore";
import persistReducer from "redux-persist/lib/persistReducer";
import storage from "redux-persist/lib/storage";

import tasks from "./tasks";
import theme from "./theme";
import cart from "./cart";
import posts from "./posts";
import post from "./postSlice";

const rootRedurcers = combineReducers({
  tasks,
  post,
  posts,
  theme,
  cart,
});

const persistConfig = { key: "root", storage };
// const persistConfig = { key: "root", storage, backlist: ['theme'] }; // contoh jika ingin backlist dari local storage meggunakan blacklist

const pReducer = persistReducer(persistConfig, rootRedurcers);

const store = configureStore({
  reducer: pReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

const persistor = persistStore(store);

export { persistor };
export default store;
