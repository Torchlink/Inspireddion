import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { Navigation } from "./components/navigation/navigation";
import { Sidebar } from "./components/sidebar/sidebar";
import { loadSubreddits } from "./features/subreddits/subredditsSlice";

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadSubreddits())
  }, [dispatch])

  return (
    <>
      <div className="App">
        <Navigation />
        <Sidebar />
        <div className="pageContainer">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
