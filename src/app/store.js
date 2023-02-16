import { combineReducers, configureStore } from '@reduxjs/toolkit';
import commentsSliceReducer  from '../features/comments/commentsSlice';
import optionsSliceReducer from '../features/options/optionsSlice';
import postsSliceReducer from '../features/posts/postsSlice';
import subredditsSliceReducer from '../features/subreddits/subredditsSlice';

const rootReducer = combineReducers({
  posts: postsSliceReducer,
  options: optionsSliceReducer,
  comments: commentsSliceReducer,
  subreddits: subredditsSliceReducer
})

export const setupStore = preloadedState => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}
