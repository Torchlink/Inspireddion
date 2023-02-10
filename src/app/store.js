import { configureStore } from '@reduxjs/toolkit';
import commentsSliceReducer  from '../features/comments/commentsSlice';
import optionsSliceReducer from '../features/options/optionsSlice';
import postsSliceReducer from '../features/posts/postsSlice';


export const store = configureStore({
  reducer: {
    posts: postsSliceReducer,
    options: optionsSliceReducer,
    comments: commentsSliceReducer,
  },
});
