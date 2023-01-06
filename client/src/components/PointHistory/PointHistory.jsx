import React, { useEffect } from "react";
import Title from "../layout/Title";
import { useSelector, useDispatch } from "react-redux";

import { getPoints } from "../../features/points/pointsSlice";

const PointHistory = () => {
  const dispatch = useDispatch();

  const { points, isLoading } = useSelector((state) => state.points);

  useEffect(() => {
    dispatch(getPoints());
  }, []);

  return (
    <div className="min-h-screen">
      <Title pageTitle="My Points" />
      {isLoading && <h1>Loading...</h1>}
      {!isLoading && points === 0 ? (
        <h1>You have no points now</h1>
      ) : (
        <h1>You have {points} points now</h1>
      )}
    </div>
  );
};

export default PointHistory;
