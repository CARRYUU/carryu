import React from "react";

const Title = (props) => {
  return (
    <div>
      <h1 className=" font-bold text-mainBlue text-2xl m-6 text-secondary text-left ">
        {props.pageTitle}
      </h1>
    </div>
  );
};

export default Title;
