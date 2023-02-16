import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { setupStore } from "../app/store";
import commentsSliceReducer from "../features/comments/commentsSlice";
import optionsSliceReducer from "../features/options/optionsSlice";
import postsSliceReducer from "../features/posts/postsSlice";
import subredditsSliceReducer from "../features/subreddits/subredditsSlice";

export const store = configureStore({
  reducer: {},
});

export function renderwithProviders(
  ui,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
