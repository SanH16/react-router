import { configureStore } from "@reduxjs/toolkit";
import tasks from "./tasks/slice";
import theme from "./theme/toogleSlice";

const store = configureStore({
  reducer: {
    tasks,
    theme,
  },
});

export default store;
