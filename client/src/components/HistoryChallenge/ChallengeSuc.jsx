import React from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import ChallengeCard from "./ChallengeCard";

const ChallengSuc = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  const challenge_history = useSelector(
    (state) => state.challenge.challengeHistory.challenge_history
  );

  console.log(challenge_history);

  return (
    <div id="challenge-suc">
      {challenge_history &&
        challenge_history?.length > 0 &&
        challenge_history.map((item) => {
          if (item.status === "success") {
            return (
              <ChallengeCard
                key={item._id}
                _id={item._id}
                title={item.title}
                thumbnail={item.thumbnail}
                badge1={item.status}
                badge2={moment(item.challenge_date).format("YYYY-MM-DD")}
              />
            );
          }
        })}

      {(!challenge_history || challenge_history?.length === 0) && (
        <div className="text-center">
          <h1 className="text-2xl mt-4">No Challenge Success Now!</h1>
        </div>
      )}
    </div>
  );
};

export default ChallengSuc;
