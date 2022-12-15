import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Homepage from "./components/HomePage/HomePage";
import SearchResult from "./components/SearchResult/SearchResult";
import Challenge from "./components/Challenge/Challenge";
import EditProfile from "./components/EditProfile/EditProfile";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/course/search" element={<SearchResult />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/edit-profile" element={<EditProfile />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
