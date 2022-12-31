import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HistoryNav from "./HistoryNav";
import HistoryCard from "../PurchaseHistory/HistoryCard";
import HistoryBuy from "../PurchaseHistory/HistoryBuy";
import HistoryReturn from "../PurchaseHistory/HistoryReturn";

const HistoryTrade = (props) => {
  
 
  return (
    <div>

   

      <body>

        
          <h1 className=" my-10 font-bold text-4xl mb-10 text-left m-5 text-mainBlue">
            History Trade
          </h1>
        
        <HistoryNav />

        

        <div className="flex place-content-center">
         
         
        </div>

      </body>
    </div>
  );
};

export default HistoryTrade;
