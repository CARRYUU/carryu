import "./App.css";
import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Homepage from "./components/HomePage/HomePage";
import SearchResult from "./components/SearchResult/SearchResult";
import Challenge from "./components/Challenge/Challenge";
import EditProfile from "./components/EditProfile/EditProfile";
import EditPassword from "./components/EditPassword/EditPassword";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import About from "./components/About/About";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import CompleteBuy from "./components/CompleteBuy/CompleteBuy";
import CreateNewCourse from "./components/CreateNewCourse/CreateNewCourse";
import CourseInfo from "./components/CourseInfo/CourseInfo";
import Study from "./components/Study/Study";
import MyCoursePage from "./components/MyCoursePage/MyCoursePage";
import HistoryTrade from "./components/HistoryTrade/HistoryTrade";
<<<<<<< HEAD
import HistoryBuy from "./components/HistoryTrade/HistoryBuy";
import HistoryReturn from "./components/HistoryTrade/HistoryReturn";
=======
import HistoryBuy from "./components/PurchaseHistory/HistoryBuy";
import HistoryReturn from "./components/PurchaseHistory/HistoryReturn";

import PurchaseHistory from "./components/PurchaseHistory/PurchaseHistory";

>>>>>>> 27a1924 (merge conflict)
import HistoryChallenge from "./components/HistoryChallenge/HistoryChallenge";
import ChallengSuc from "./components/HistoryChallenge/ChallengeSuc";
import ChallengeFail from "./components/HistoryChallenge/ChallengeFail";
import InstructorHomepage from "./components/InstructorHomepage/InstructorHomepage";
import ErrorPage from "./components/ErrorPage/ErrorPage";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        limit={3}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Header />
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/about" element={<About />} />

        <Route path="/auth/login" element={<Login />} />

        <Route path="/user/register" element={<Register />} />
        <Route path="/intructor/homepage" element={<InstructorHomepage />} />
        <Route path="/user/profile" element={<EditProfile />} />
        <Route path="/user/password/update" element={<EditPassword />} />

        <Route path="/course/search/:title" element={<SearchResult />} />
        <Route path="/course/:id/info" element={<CourseInfo />} />
        <Route path="/course/create" element={<CreateNewCourse />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/complete-buy" element={<CompleteBuy />} />
        <Route path="/mycourse" element={<MyCoursePage />} />

        <Route path="/purchase-history" element={<PurchaseHistory />} />
        <Route path="/purchase-history/buy" element={<HistoryBuy />} />
        <Route path="/purchase-history/refund" element={<HistoryReturn />} />

        <Route path="/confirm-challenge" element={<ConfirmChallenge />} />
        <Route path="/history-challenge" element={<HistoryChallenge />} />
        <Route path="/challenge-suc" element={<ChallengSuc />} />
        <Route path="/challenge-fail" element={<ChallengeFail />} />

        <Route path="/study" element={<Study />} />

        <Route path="/errorpage" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
