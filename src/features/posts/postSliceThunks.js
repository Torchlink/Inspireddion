import { createAsyncThunk } from "@reduxjs/toolkit";
import { loadComments } from "../comments/commentsSlice";
import { popBeforeArray } from "./postsSlice";


export const loadPosts = createAsyncThunk(
    "posts/loadPosts",
    async ( {extension, loadBefore}, thunkAPI ) => {
      try {
        const response = await fetch(`https://www.reddit.com/${extension}`);
        if (response.ok) {
          const json = await response.json();
          if(loadBefore) {
            thunkAPI.dispatch(popBeforeArray())
          }
          return json;
        }
      } catch (err) {
        console.log(err);
      }
    }
  );
  
  export const loadCurrentPost = createAsyncThunk(
    "posts/loadCurrentPost",
    async ({ subredditName, postId }, thunkAPI) => {
      try {
        const response = await fetch(
          `https://www.reddit.com/r/${subredditName}/comments/${postId}/.json`
        );
        if (response.ok) {
          const json = await response.json();
          thunkAPI.dispatch(loadComments(json[1]));
          return json;
        }
      } catch (err) {
        console.log(err);
      }
    }
  );