import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import {
  addCourseComment,
  getCourseAllComments,
} from "../../features/course/courseSlice";

const Comment = () => {
  const dispatch = useDispatch();

  const [commentText, setCommentText] = useState("");

  const { courseComments, isLoading } = useSelector((state) => state.course);

  const { id } = useParams();

  const handlePostComment = (e) => {
    e.preventDefault();
    console.log(commentText);

    dispatch(addCourseComment({ _id: id, comment: commentText }));

    setTimeout(() => {
      window.location.reload(true);
    }, 1000);
  };

  useEffect(() => {
    dispatch(getCourseAllComments(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      id="qa"
      className=" place-content-center flex-col flex-wrap mx-5 ml-10"
    >
      <h1 className=" font-bold text-3xl mb-5 text-left text-mainBlue italic">
        Comments
      </h1>
      {isLoading && (
        <div className="text-center text-gray-500">
          <h3 className="font-bold text-xl ">Loading...</h3>
        </div>
      )}
      {!isLoading &&
        courseComments &&
        courseComments.length > 0 &&
        courseComments.map((item) => (
          <div className="my-3 mx-4 ">
            <div className="QAcard flex p-2 hover:bg-red-50 flex-auto  item-left my-2 text-left justify-between">
              <p class="comment">{item.comment}</p>
              <div className="pr-2">
                <p class="commenter">
                  created at: {moment(item.createdAt).format("YYYY-MM-DD")}
                </p>
              </div>
            </div>
          </div>
        ))}
      {!isLoading && courseComments && courseComments.length === 0 && (
        <div className="text-center text-gray-500">
          <h3 className="font-bold text-xl ">
            {!isLoading && "No comments in this course"}
          </h3>
        </div>
      )}

      <hr className="mx-10 my-4 h-0.9 bg-gray-200" />

      <form>
        <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
            <label for="comment" class="sr-only">
              Your comment
            </label>
            <textarea
              id="comment"
              name="comment"
              rows="4"
              class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
              placeholder="Ask some question ..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              required
            ></textarea>
          </div>
          <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
            <button
              type="submit"
              className="button-primary"
              name="comment"
              onClick={handlePostComment}
            >
              Post question
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Comment;
