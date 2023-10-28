import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIpost } from "../../apis/APIpost";

export const fetchGetPostById = createAsyncThunk("fetch/getPost", APIpost.getPostById);

const initialState = {
  message: "",
  status: "idle",
  data: null,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  extraReducers: (builder) => {
    builder.addCase("fetch/getPost/pending", (state) => {
      state.status = "pending";
      state.message = "pending..";
    });

    builder.addCase("fetch/getPost/fulfilled", (state, { payload }) => {
      state.status = "success";
      state.data = payload;
    });

    builder.addCase("fetch/getPost/rejected", (state, { error }) => {
      state.status = "failed";
      state.message = error.stack;
    });
  },
});

export const selectPost = (state) => state.post;

export default postSlice.reducer;
