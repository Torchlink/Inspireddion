import React from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "./components/navigation/navigation";
import { Sidebar } from "./components/sidebar/sidebar";

function App() {
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
