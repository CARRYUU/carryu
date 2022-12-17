import React from "react";
import Title from "../layout/Title";
import Card from "../layout/Card";

const HomePageCourseList = (props) => {
  const { coursesData } = props;

  return (
    <div>
      <div className="flex snap-x scroll-pl-6">
        {coursesData?.courses?.map((course) => (
          <Card
            key={course._id}
            badge1={course.category}
            badge2={course.badge2}
            badge3={course.badge3}
            title={course.title}
            description={course.description}
            salePrice={course.salePrice ? course.salePrice : course.price}
            originalPrice={course.price}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePageCourseList;
