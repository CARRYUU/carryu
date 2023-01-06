import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setChallengeToSuccess } from "../../features/challenge/challengeSlice";

import { addPoints } from "../../features/points/pointsSlice";

const ChallengeCard = (props) => {
  const dispatch = useDispatch();
  const { courseId, title, badge1, badge2, isProgress } = props;

  const handleDone = () => {
    dispatch(setChallengeToSuccess({ course_id: courseId }));

    dispatch(addPoints({ add_points: 100 }));

    //refresh the page
    window.location.reload();
  };

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
          <ul className="flex mx-2 mb-1">
            {isProgress && (
              <li className="hover:text-red-800 font-bold">
                <button className="cancalBotton" onClick={handleDone}>
                  Done!
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;
