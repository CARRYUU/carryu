import React from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import ChallengeCard from "./ChallengeCard";

const ChallengeRecord = () => {
  const dispatch = useDispatch();

  const challenge_history = useSelector(
    (state) => state.challenge.challengeHistory.challenge_history
  );

  return (
    <div id="challenge-record">
      {challenge_history &&
        challenge_history?.length > 0 &&
        challenge_history.map((item) => {
          return (
            <ChallengeCard
              key={item._id}
              _id={item._id}
              courseId={item.course_id}
              title={item.title}
              thumbnail={item.thumbnail}
              badge1={item.status}
              badge2={moment(item.date).format("YYYY-MM-DD")}
              isProgress={item.status === "inprogress"}
            />
          );
        })}

      {(!challenge_history || challenge_history?.length === 0) && (
        <div className="text-center">
          <h1 className="text-2xl mt-4">No Challenge Record Now!</h1>
        </div>
      )}
    </div>
  );
};

export default ChallengeRecord;
