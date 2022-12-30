import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HistoryNav from "./HistoryNav";
import HistoryCard from "./HistoryCard";
import HistoryBuy from "./HistoryBuy";
import HistoryReturn from "./HistoryReturn";

const HistoryTrade = (props) => {
  
 
  return (
    <div>
      <body >
        
          <h1 className=" my-10 font-bold text-4xl mb-10 text-left m-5 text-mainBlue">
            History Trade
          </h1>
        
        <HistoryNav />
        
      </body>
    </div>
  );
};

export default HistoryTrade;
