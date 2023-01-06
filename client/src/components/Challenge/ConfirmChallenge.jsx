import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { GiPerspectiveDiceSixFacesSix } from "react-icons/gi";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { GiPerspectiveDiceSixFacesTwo } from "react-icons/gi";
import { Link } from "react-router-dom";
import Button from "../layout/Button";

import {
  switchBuyDirectly,
  setOneCourseToPurchase,
} from "../../features/transaction/transactionSlice";
import { setHasChallenge } from "../../features/challenge/challengeSlice";

const ConfirmChallenge = () => {
  const dispatch = useDispatch();

  const { aRandomCourse } = useSelector((state) => state.course);

  const handleBuyDirectly = () => {
    dispatch(setHasChallenge(true));
    dispatch(switchBuyDirectly(true));
    dispatch(setOneCourseToPurchase(aRandomCourse?.course_info));
  };

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-r from-orange-500 to-pink-500 py-6">
        <div>
          <h1 className=" font-bold text-white text-7xl py-7">
            Are you ready for a challenge?
          </h1>
        </div>
        <div className="flex justify-center py-7 mt-4">
          <GiPerspectiveDiceSixFacesSix
            size={150}
            color="white"
            className="md:animate-spin"
          />
          <GiPerspectiveDiceSixFacesRandom
            size={200}
            color="white"
            className="animate-bounce"
          />
          <GiPerspectiveDiceSixFacesTwo
            size={150}
            color="white"
            className="md:animate-spin"
          />
        </div>
        <Link to="/checkout">
          <Button buttonName="Yes, let's GO!!!" onClick={handleBuyDirectly} />
        </Link>
      </div>
    </div>
  );
};

export default ConfirmChallenge;
