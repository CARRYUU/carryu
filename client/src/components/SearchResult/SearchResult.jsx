import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import SearchResultCard from "./SearchResultCard";
import Title from "../layout/Title";
import { getCoursesByTitle } from "../../features/allCourses/allCoursesSlice.js";

const SearchResult = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const { coursesByTitle, isLoading } = useSelector((state) => state.courses);

  // get courses data and number of results
  const { courses } = coursesByTitle;
  const numResults = courses?.length;

  // get searched text from location
  const { searchedText } = location.state;

  useEffect(() => {
    dispatch(getCoursesByTitle(searchedText));
  }, []);

  useEffect(() => {
    dispatch(getCoursesByTitle(searchedText));
  }, [searchedText]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div >
      <Title pageTitle={`「${searchedText}」有${numResults}個結果`} />
      <div className="flex-col mx-2  ">
        {courses?.map((course) => (
          <SearchResultCard
            key={course._id}
            _id={course._id}
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

export default SearchResult;
