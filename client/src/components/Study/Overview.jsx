import React from "react";

const Overview = (props) => {
  const { description, instructor } = props;

  return (
    <div id="overview" className="flex-col mx-5 ml-10">
      <h1 className=" font-bold text-3xl mb-5 text-left text-mainBlue italic">Overview</h1>
      <h1 className="font-bold text-xl">Instructor</h1>
      <p className="">{instructor}</p>
      <br />
      <h2 className=" font-bold text-xl">Description</h2>
      <p>{description}</p>
      <hr className="mx-10 my-4 h-0.9 bg-gray-200" />
    </div>
  );
};

export default Overview;
