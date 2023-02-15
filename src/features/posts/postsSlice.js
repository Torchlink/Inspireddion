import {  createSlice } from "@reduxjs/toolkit";
import { loadPosts, loadCurrentPost } from "./postSliceThunks";


const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: {
      data: {
        children: null,
      },
    },
    currentPost: {
      data: {
        children: undefined,
      },
    },
    beforeArray: [],
    isLoadingPosts: false,
    failedLoadingPosts: false,
    isLoadingCurrentPost: false,
    failedLoadingCurrentPost: false,
  },
  reducers: {
    popBeforeArray: (state, action) => {
      if (state.beforeArray.length > 0) {
        state.beforeArray.pop();
      }
    },
    resetBeforeArray: (state, action) => {
      state.beforeArray = []
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadPosts.pending, (state, action) => {
        state.isLoadingPosts = true;
        state.failedLoadingPosts = false;
      })
      .addCase(loadPosts.fulfilled, (state, action) => {
        state.isLoadingPosts = false;
        state.failedLoadingPosts = false;
        state.posts = action.payload.data;
        if(action.payload.data.before) {
          state.beforeArray.push(action.payload.data.before)
        }
      })
      .addCase(loadPosts.rejected, (state, action) => {
        state.isLoadingPosts = false;
        state.failedLoadingPosts = true;
      })

      .addCase(loadCurrentPost.pending, (state, action) => {
        state.isLoadingCurrentPost = true;
        state.failedLoadingCurrentPost = false;
      })
      .addCase(loadCurrentPost.fulfilled, (state, action) => {
        state.isLoadingCurrentPost = false;
        state.failedLoadingCurrentPost = false;
        state.currentPost = action.payload[0];
      })
      .addCase(loadCurrentPost.rejected, (state, action) => {
        state.isLoadingCurrentPost = false;
        state.failedLoadingCurrentPost = true;
      });
  },
});

export const selectPosts = (state) => state.posts.posts;
export const selectCurrentPost = (state) => state.posts.currentPost;

export const { popBeforeArray, resetBeforeArray } = postsSlice.actions;
export default postsSlice.reducer;
