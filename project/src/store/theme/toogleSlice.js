import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  language: "eng",
};

const toogleTheme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toogleThemeMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const selectTheme = (state) => state.theme;

export const { toogleThemeMode } = toogleTheme.actions;
export default toogleTheme.reducer;
