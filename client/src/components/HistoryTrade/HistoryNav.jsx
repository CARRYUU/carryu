import React, { useEffect, useRef ,useState} from "react";
import { Link } from "react-router-dom";
import HistoryBuy from "../PurchaseHistory/HistoryBuy";
import HistoryReturn from "../PurchaseHistory/HistoryReturn";
import { Tab, Tabs } from "react-tabs";
import Alpine from 'alpinejs'
 




const HistoryNav = () => {

  const [toggleState, setToggleState]=useState(1);

  const toggleTab=(index)=>{
    setToggleState(index);
  }

  return (
    <div>
       
      <div 
      className="max-w-2xl mx-auto p-6 bg-slate-100 rounded-lg"

      >
      <nav >
        <ul
          className="flex place-content-center font-bold mt-4 flex-wrap text-center"
        >
          <li
            
            className="bg-slate-50 rounded-xl px-5 hover:text-gray-800 hover:border-b-2 text-gray-500 cursor-pointer"
          >
            <button
              onClick={()=>toggleTab(1)}
              className={toggleState===1?"tabs active-tabs":"tabs"}
              // className="inline-block p-4 rounded-t-lg border-b-2"
            >
              購買課程
            </button>
          </li>
          <li
            className="bg-slate-50 rounded-xl px-5 hover:text-gray-800 hover:border-b-2 text-gray-500 cursor-pointer"
            role="presentation"
          >
           
            <button
              onClick={()=>toggleTab(2)}
              className={toggleState===2?"tabs active-tabs":"tabs"}
              // className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300"
            >
              退訂紀錄
            </button>
          </li>
        </ul>
      </nav>
      <div >
        <div
          className={toggleState===1?"contet":"content active-content"}
        >
          <HistoryBuy />
        </div>
        <div
          className={toggleState===2?"contet":"content active-content"}
        >
          <HistoryReturn />
        </div>
      </div>
    </div></div>
  );
};

export default HistoryNav;