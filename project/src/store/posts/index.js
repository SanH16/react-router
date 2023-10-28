import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIpost } from "../../apis/APIpost";

export const fetchGetPosts = createAsyncThunk("fetch/getPosts", APIpost.getPosts);

const initialState = {
  message: "",
  status: "idle",
  data: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder.addCase("fetch/getPosts/pending", (state) => {
      state.status = "pending";
      state.message = "pending..";
    });

    builder.addCase("fetch/getPosts/fulfilled", (state, { payload }) => {
      state.status = "success";
      state.data = payload;
    });

    builder.addCase("fetch/getPosts/rejected", (state, { error }) => {
      state.status = "failed";
      state.message = error.stack;
    });
  },
});

export const selectPosts = (state) => state.posts;

export default postsSlice.reducer;
