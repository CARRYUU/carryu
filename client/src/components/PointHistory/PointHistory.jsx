import React from "react";
import Title from "../layout/Title";
import PointList from "./PointList";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getPoints } from "../../features/points/pointsSlice";

const PointHistory = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);
  const point_history = user?.point_history;

  useEffect(() => {
    dispatch(getPoints());
  }, []);
  return (
    <div className="min-h-screen">
      <Title pageTitle="Let's create your course!" />
      <div className="flex max-w-4xl items-center justfiy-center px-4 py-8 mx-auto lg:py-0">
        <div className="mt-auto flex flex-col justify-center w-full py-8 px-2">
          {point_history &&
            point_history?.length > 0 &&
            point_history.map((item) => {
              if (item.type === "") {
                return (
                  <PointList
                    recordName=""
                    points=""
                    status=""
                    validFrom=""
                    expirationDate=""
                  />
                );
              }
            })}

          {point_history?.length === 0 && (
            <div className="text-center">
              <h1 className="text-2xl mt-4">
                No Points history Now! Try Challenge Course Feature to get some
                points!
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PointHistory;
