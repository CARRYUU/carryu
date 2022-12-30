import React from "react";

import HistoryNav from "./HistoryNav";

const PurChaseHistory = (props) => {
  return (
    <div className="min-h-screen">
      <h1 className=" my-10 font-bold text-4xl mb-10 text-left m-5 text-mainBlue">
        Purchase History
      </h1>

      <HistoryNav />
    </div>
  );
};

export default PurChaseHistory;
