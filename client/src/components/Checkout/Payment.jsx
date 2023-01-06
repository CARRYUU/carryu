import React from "react";
import { MdOutlineAtm, MdGrade } from "react-icons/md";
import { AiFillCreditCard } from "react-icons/ai";

const Payment = (props) => {
  return (
    <div>
      <fieldset>
        <h3 className="font-bold">Payment</h3>
        <p className="font-bold text-gray-500 text-sm">default: ATM</p>
        <div className="bg-gray-100/70 m-2 rounded-md p-2 flex relative max-w-xl">
          <input
            type="radio"
            id="ATM"
            value="ATM"
            name="payment"
            className="pl-2"
            onClick={props.handlePaymentMethod}
          />
          <label htmlFor="ATM" className="pl-2">
            ATM
          </label>
          <div className="right-0 absolute">
            <MdOutlineAtm className="text-2xl" />
          </div>
        </div>

        <div className="bg-gray-100/70 m-2 rounded-md p-2 flex relative max-w-xl">
          <input
            type="radio"
            id="CREADIT_CARD"
            value="CREADIT_CARD"
            name="payment"
            className="pl-2"
            onClick={props.handlePaymentMethod}
          />
          <label htmlFor="CREADIT_CARD" className="pl-2">
            Credit Card
          </label>
          <div className="right-0 absolute">
            <AiFillCreditCard className="text-2xl" />
          </div>
        </div>
        <div className="bg-gray-100/70 m-2 rounded-md p-2 flex relative max-w-xl">
          <input
            type="radio"
            id="POINTS"
            value="POINTS"
            name="payment"
            className="pl-2"
            onClick={props.handlePaymentMethod}
          />
          <label htmlFor="POINTS" className="pl-2">
            Points
          </label>
          <div className="right-0 absolute">
            <MdGrade className="text-2xl" />
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default Payment;
