import React from "react";
import { GiPerspectiveDiceSixFacesSix } from "react-icons/gi";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { GiPerspectiveDiceSixFacesTwo } from "react-icons/gi";
import Button from "../layout/Button";

const ConfirmChallenge = () => {
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
        <Button buttonName="Yes, let's GO!!!" onClick="" />
      </div>
    </div>
  );
};

export default ConfirmChallenge;
