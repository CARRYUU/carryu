import React, { Component } from "react";

class Payment extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
    };
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div onChange={this.onChangeValue}>
        <h3 className="font-bold">Payment</h3>
        <h3 className="font-bold text-sm text-gray-400/70">
          only this choice (´∀｀){" "}
        </h3>
        <div className="bg-gray-100/70 m-2 rounded-md p-2 flex relative max-w-2xl">
          <input type="radio" value="Male" name="Payment" /> ATM
          <div className="right-0 absolute">
            <img
              src={require("../../icon/atmicon.png")}
              className="w-8 right-0 mx-2"
            ></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Payment;
