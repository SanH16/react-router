import { configureStore } from "@reduxjs/toolkit";
import tasks from "./tasks/slice";

const store = configureStore({
  reducer: {
    tasks,
  },
});

export default store;
