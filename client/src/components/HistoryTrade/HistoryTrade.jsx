import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HistoryNav from "./HistoryNav";
import HistoryCard from "./HistoryCard";
import HistoryBuy from "./HistoryBuy";
import HistoryReturn from "./HistoryReturn";

const HistoryTrade = (props) => {
  let component
  switch (window.location.pathname) {
    case "/history-trade?type=history-buy":
      component = <HistoryBuy/>;
      break;
    case "/history-trade?type=history-return":
      component = <HistoryReturn/>;
      break;
  }
  console.log(window.location)
  return (
    <div>
      <body>
        <div className="bg-black/25  my-5 h-40 px-10 pt-5">
          <h1 className=" my-10 font-bold text-4xl mb-10 text-left m-5 text-white">
            History Trade
          </h1>
        </div>
        <HistoryNav />
        <div className="flex place-content-center">
          {component}
          <HistoryBuy/>
        </div>
      </body>
    </div>
  );
};

export default HistoryTrade;
