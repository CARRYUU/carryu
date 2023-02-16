import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { moment } from "moment";
import ChallengeCard from "./ChallengeCard";

import { getChallengeHistory } from "../../features/challenge/challengeSlice";

const ChallengeFail = () => {
  const dispatch = useDispatch();

  const challenge_history = useSelector(
    (state) => state.challenge.challengeHistory
  );

  useEffect(() => {
    dispatch(getChallengeHistory());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="challenge-fail">
      {challenge_history &&
        challenge_history?.length > 0 &&
        // eslint-disable-next-line array-callback-return
        challenge_history.map((item) => {
          if (item.status === "failed") {
            return (
              <ChallengeCard
                key={item._id}
                _id={item._id}
                title={item.title}
                price={item.price}
                thumbnail={item.thumbnail}
                badge1={item.payment_method}
                badge2={moment(item.date).format("YYYY-MM-DD")}
              />
            );
          }
        })}

      {(!challenge_history || challenge_history?.length === 0) && (
        <div className="text-center">
          <h1 className="text-2xl mt-4">No Challenge Failed Now!</h1>
        </div>
      )}
    </div>
  );
};

export default ChallengeFail;
