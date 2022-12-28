import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import HistoryBuy from "./HistoryBuy";
import HistoryReturn from "./HistoryReturn";
import { Tab, Tabs } from "react-tabs";
import Alpine from 'alpinejs'
 


// const tabElements=[
//   {
//     id:'historybuy',
//     triggerEI:document.querySelector("#historybuy-tab"),
//     targetEI:document.querySelector('#historybuy')
//   },
//   {
//     id:'historyreturn',
//     triggerEI:document.querySelector("#historyreturn-tab"),
//     targetEI:document.querySelector("#historyreturn")
//   }
// ];

// const options={
//   defaultTabId:'historyreturn',
//   activeClasses: 'text-blue-600 hover:text-blue-600 ',
//     inactiveClasses: 'text-gray-500 hover:text-gray-600 ',
//     onShow: () => {
//         console.log('tab is shown');
//     }
// };
// const tabs =new Tabs(tabElements,options);
// tabs.show('historybuy');
// tabs.getTab('historyreturn')
// tabs.getActieTab()

const HistoryNav = () => {
  window.Alpine=Alpine
  Alpine.start()

  return (
    <div>
       
      <div 
      x-data="{
        openTab:1,
        activeClasses:'text-blue-600 hover:text-blue-600',
        inactiveClasses:'text-gray-500 hover:text-gray-600'
      }"
      className="max-w-lg mx-auto p-6"
      >
      <nav>
        <ul
          className="flex place-content-center font-bold mt-4 flex-wrap text-center"
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          <li
            
            className="px-10 hover:text-gray-800 text-gray-500 cursor-pointer"
            role="presentation"
          >
            <button
              // @click="openTab=1":class="{'-mb-px':openTab===1}"
              className="inline-block p-4 rounded-t-lg border-b-2"
              id="historybuy-tab"
              data-tabs-target="#historybuy"
              type="button"
              role="tab"
              aria-controls="historybuy"
              aria-selected="true"
            >
              購買課程
            </button>
          </li>
          <li
            className="px-10 hover:text-gray-800 text-gray-500 cursor-pointer"
            role="presentation"
          >
            {/* data-tabs-target="#histroyreturn"content element that will be shown when clicked. */}
            <button
              className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300"
              id="historyreturn-tab "
              data-tabs-target="#histroyreturn"
              type="button"
              role="tab"
              aria-controls="historyreturn"
              aria-selected="true"
            >
              退訂紀錄
            </button>
          </li>
        </ul>
      </nav>
      <div id="myTabContent">
        <div
          x-show="openTab===1"
          className="hidden  place-content-center "
          id="historybuy"
          role="tabpanel"
          aria-labelledby="historybuy-tab"
        >
          <HistoryBuy />
        </div>
        <div
          x-show="openTab===2"
          className=" hidden  place-content-center"
          id="historyreturn"
          role="tabpanel"
          aria-labelledby="historyreturn-tab"
        >
          <HistoryReturn />
        </div>
      </div>
    </div></div>
  );
};

export default HistoryNav;
