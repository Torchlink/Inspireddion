import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loadComments } from "../comments/commentsSlice";

export const loadPosts = createAsyncThunk(
  "posts/loadSubreddit",
  async (extension) => {
    try {
      const response = await fetch(`https://www.reddit.com/${extension}`);
      if (response.ok) {
        const json = await response.json();
        return json;
      }
    } catch (err) {
      console.log(err);
    }
  }
);

export const loadCurrentPost = createAsyncThunk(
  "posts/loadCurrentPost",
  async ({subredditName, postId}, thunkAPI) => {
    try {

      const response = await fetch(
        `https://www.reddit.com/r/${subredditName}/comments/${postId}/.json`
      );
      if (response.ok) {
        const json = await response.json();
        thunkAPI.dispatch(loadComments(json[1]))
        return json;
      }
    } catch (err) {
      console.log(err);
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: {
      data: {
        children: null,
      },
    },
    currentPost: {
      data : {
        children: undefined
      }
    },
    isLoadingPosts: false,
    failedLoadingPosts: false,
    isLoadingCurrentPost: false,
    failedLoadingCurrentPost: false,
  },
  reducers: {},
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

export default postsSlice.reducer;
