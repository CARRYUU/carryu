import React from "react";

const checkbox = (props) => {
  return (
    <div className="mb-28">
      <input
        id="remember"
        type="checkbox"
        value=""
        class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300"
        required
      ></input>
      <label for="remember" class="ml-2 text-sm font-medium text-gray-900">
        {props.labelName}
      </label>
    </div>
  );
};

export default checkbox;
