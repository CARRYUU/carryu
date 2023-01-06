import React from "react";
import { useNavigate } from "react-router";
import Button from "../layout/Button";
import { FaHandPointUp } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";

const GetPoint = () => {
  const navigate = useNavigate();

  const handleCheckPoint = () => {
    navigate("/points");
    window.location.reload();
  };

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-r from-purple-500 to-blue-600 py-7">
        <div>
          <h1 className=" font-bold text-white text-7xl py-2">
            Congrats! You have completed a challenge.
          </h1>
          <h3 className=" font-bold text-pink-200 text-4xl py-2 px-1">
            You will get 100 points.
          </h3>
        </div>
        <div className="flex justify-center py-3">
          <GiReceiveMoney size={150} color="white" />
        </div>
        <div className="py-4">
          <Button buttonName="Check my points" onClick={handleCheckPoint} />
        </div>
        <div className="flex justify-center">
          <FaHandPointUp size={50} color="white" className="animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default GetPoint;
