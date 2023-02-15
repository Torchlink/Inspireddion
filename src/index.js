import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { HomePage } from "./pages/homePage/homePage";
import ErrorPage from "./pages/errorPage/errorPage";
import { SubredditPage } from "./pages/subredditPage/subredditPage";
import { AboutPage } from "./pages/about/about";
import { PostPage } from "./pages/postPage/postPage";
import { SearchPage } from "./pages/searchPage/searchPage";

const container = document.getElementById("root");
const root = createRoot(container);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} path="/" errorElement={<ErrorPage />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="r/:subredditName" element={<SubredditPage />} />
      <Route path="r/:subredditName/comments/:postId" element={<PostPage />} />
    </Route>
  )
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
