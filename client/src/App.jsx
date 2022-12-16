import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Homepage from "./components/HomePage/HomePage";
import SearchResult from "./components/SearchResult/SearchResult";
import Challenge from "./components/Challenge/Challenge";
import EditProfile from "./components/EditProfile/EditProfile";
import EditPassword from "./components/EditPassword/EditPassword";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
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
        <Route path="/edit-password" element={<EditPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
