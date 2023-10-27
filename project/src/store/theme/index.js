import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  language: "eng",
};

export const isDarkMode = (mode) => mode === "dark";

const toogleTheme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toogleThemeMode: (state) => {
      state.mode = isDarkMode(state.mode) ? "light" : "dark";
    },
  },
});

export const selectTheme = (state) => state.theme;

export const { toogleThemeMode } = toogleTheme.actions;
export default toogleTheme.reducer;
