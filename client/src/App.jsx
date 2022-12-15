import "./App.css";
import React from "react";
import Homepage from "./components/HomePage/HomePage";
import SearchResult from "./components/SearchResult/SearchResult";
import Challenge from "./components/Challenge/Challenge";
import EditProfile from "./components/EditProfile/EditProfile";

function App() {
  return (
    <div className="App">
      {/* <Homepage /> */}
      <SearchResult />
      {/* <Challenge /> */}
      {/* <EditProfile /> */}
    </div>
  );
}

export default App;
