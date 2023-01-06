import React from "react";

const HistoryCard = (props) => {
  const {
    title,
    price,
    // thumbnail,
    badge1,
    badge2,
  } = props;

  return (
    <div>
      <div class="list flex historyCard  my-4   ">
        <div className=" cardimg">
          <img
            className="w-48 object-cover h-40 flex flex-auto"
            src={require("../../assets/images/carryu_big_logo_gray_background.png")}
            alt="course thumbnail"
          />
        </div>
        <div className=" mx-2 text-left ">
          <h3 className="font-bold text-m ml-2 mt-2">{title}</h3>

          <div className="flex ">
            <div class="middle" className="badge ml-1">
              {badge1}
            </div>
            <div class="middle" className="badge ml-1">
              {badge2}
            </div>
          </div>
          <h3 className="font-bold text-m mx-2 py-2 text-bottom">NT${price}</h3>
          <ul className="flex mx-2 mb-1">
            <li className="hover:text-red-800 font-bold">
              <button className="cancalBotton">unsubscribe</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
