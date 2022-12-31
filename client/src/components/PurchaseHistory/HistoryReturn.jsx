import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import HistoryCard from "./HistoryCard";
import { getUserPurchaseHistory } from "../../features/user/userSlice";

const HistoryReturn = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);
  const purchase_history = user?.purchase_history;
  const refund_history = purchase_history?.filter(
    (item) => item.type === "refund"
  );

  useEffect(() => {
    dispatch(getUserPurchaseHistory());
  }, []);

  return (
    <div id="history-buy" className="my-2">
      {refund_history &&
        refund_history?.length > 0 &&
        refund_history.map((item) => {
          if (item.type === "refund") {
            return (
              <HistoryCard
                key={item._id}
                _id={item._id}
                title={item.title}
                price={item.price}
                thumbnail={item.thumbnail}
                badge1={item.badge1}
                badge2={item.badge2}
              />
            );
          }
        })}

      {refund_history?.length === 0 && (
        <div className="text-center">
          <h1 className="text-2xl mt-4">No Refund History Now!</h1>
        </div>
      )}
    </div>
  );
};

export default HistoryReturn;
