import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const HistoryNav = () => {
  
  return (
    <div>
      <nav>
        <ul className="flex place-content-center font-bold mt-4">
          <li className="px-10 hover:text-gray-800 text-gray-500 cursor-pointer">
            <button class="nav-link active" data-bs-toggle="tab">購買課程</button>
          </li>
          <li className="px-10 hover:text-gray-800 text-gray-500 cursor-pointer">
            <a href="/history-trade?type=history-return">退訂紀錄</a>
          </li>
        </ul>
      </nav>
      
    </div>
  );
};

export default HistoryNav;
