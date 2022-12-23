import React from "react";
import Card from "../layout/Card";

const HomePageCourseList = (props) => {
  const { coursesData } = props;

  return (
    <div>
      {coursesData ? (
        <div className="flex snap-x  scroll-pl-6 ">
          {coursesData?.courses?.map((course) => (
            <div className="snap-center">
              <Card
                key={course._id}
                _id={course._id}
                category={course.category}
                students_count={course.students_count}
                badge3={course.badge3}
                title={course.title}
                description={course.description}
                thumbnail={course.thumbnail}
                salePrice={course.salePrice ? course.salePrice : course.price}
                originalPrice={course.price}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <h1 className="text-2xl">
            No Courses Now! <br />
          </h1>
        </div>
      )}
    </div>
  );
};

export default HomePageCourseList;
