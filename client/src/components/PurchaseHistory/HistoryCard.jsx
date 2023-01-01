import React from "react";

const HistoryCard = (props) => {
  const { title, price, thumbnail, badge1, badge2 } = props;

  return (
    <div>
      <div class="list flex cardSearch  my-4 max-w-xl h-32 ">
        <div class="card" className=" w-48 h-full">
          <img
            className="w-48 object-cover h-32"
            src={require("../../image/carryu_big_logo_white_background.png")}
            alt="course thumbnail"
          />
        </div>
      
        <div className=" mx-2 text-left">
          <h3 className="font-bold text-m m-2">{title}</h3>
          <div className="flex ">
            <div class="middle" className="badge ml-1">
              {badge1}
            </div>
            <div class="middle" className="badge ml-1">
              {badge2}
            </div>
          </div>
          <h3 className="font-bold text-m mx-2 py-2 text-bottom">NT${price}</h3>
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
