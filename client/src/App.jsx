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

import HistoryBuy from "./components/PurchaseHistory/HistoryBuy";
import HistoryReturn from "./components/PurchaseHistory/HistoryReturn";

import PurchaseHistory from "./components/PurchaseHistory/PurchaseHistory";

import ConfirmChallenge from "./components/Challenge/ConfirmChallenge";
import HistoryChallenge from "./components/HistoryChallenge/HistoryChallenge";
import ChallengSuc from "./components/HistoryChallenge/ChallengeSuc";
import ChallengeFail from "./components/HistoryChallenge/ChallengeFail";
import GetPoint from "./components/GetPoint/GetPoint";
import PointHistory from "./components/PointHistory/PointHistory";
import InstructorHomepage from "./components/InstructorHomepage/InstructorHomepage";
import ErrorPage from "./components/ErrorPage/ErrorPage";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={1000}
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
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/challenge" element={<Challenge />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />

        <Route exact path="/about" element={<About />} />

        <Route exact path="/auth/login" element={<Login />} />

        <Route exact path="/user/register" element={<Register />} />
        <Route
          exact
          path="/intructor/homepage"
          element={<InstructorHomepage />}
        />
        <Route exact path="/user/profile" element={<EditProfile />} />
        <Route exact path="/user/password/update" element={<EditPassword />} />

        <Route path="/course/search/:title" element={<SearchResult />} />
        <Route path="/course/:id/info" element={<CourseInfo />} />

        <Route exact path="/course/create" element={<CreateNewCourse />} />
        <Route path="/course/:id/content" element={<Study />} />

        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/complete-buy" element={<CompleteBuy />} />
        <Route exact path="/mycourse" element={<MyCoursePage />} />

        <Route exact path="/purchase-history" element={<PurchaseHistory />} />
        <Route exact path="/purchase-history/buy" element={<HistoryBuy />} />
        <Route
          exact
          path="/purchase-history/refund"
          element={<HistoryReturn />}
        />

        <Route path="/confirm-challenge" element={<ConfirmChallenge />} />
        <Route exact path="/challenge-history" element={<HistoryChallenge />} />
        <Route exact path="/challenge-succuss" element={<ChallengSuc />} />
        <Route exact path="/challenge-failed" element={<ChallengeFail />} />
        <Route exact path="/get-point" element={<GetPoint />} />
        <Route exact path="/points" element={<PointHistory />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
