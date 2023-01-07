import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";

import HistoryCard from "./HistoryCard";

import { getUserPurchaseHistory } from "../../features/user/userSlice";

const HistoryBuy = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);
  const purchase_history = user?.purchase_history;

  useEffect(() => {
    dispatch(getUserPurchaseHistory());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="history-buy" className="my-2">
      {purchase_history &&
        purchase_history?.length > 0 &&
        // eslint-disable-next-line array-callback-return
        purchase_history.map((item) => {
          if (item.type === "buy") {
            return (
              <HistoryCard
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

      {purchase_history?.length === 0 && (
        <div className="text-center">
          <h1 className="text-2xl mt-4">No Purchase History Now!</h1>
        </div>
      )}
    </div>
  );
};

export default HistoryBuy;
