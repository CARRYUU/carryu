import React from "react";

const Description = (props) => {
  return (
    <div>
      <label className="block mb-2 text-lg font-bold text-gray-900">
        Course description
      </label>
      <div className="mb-4 flex justify-center ">
        <div className="w-4/5">
          <textarea
            id="description"
            name="description"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Your course description..."
            onChange={props.onChange}
            value={props.description}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Description;
