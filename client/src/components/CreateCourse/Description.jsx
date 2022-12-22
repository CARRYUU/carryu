import React from "react";

const Description = () => {
  return (
    <div>
      <div className="px-24 mb-4">
        <label className="block mb-2 text-lg font-bold text-gray-900">
          Course description:
        </label>
        <textarea
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
          placeholder="Your course description..."
        ></textarea>
      </div>
    </div>
  );
};

export default Description;
