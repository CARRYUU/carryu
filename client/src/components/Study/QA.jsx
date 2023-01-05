import React from "react";

const QA = () => {
  return (
    <div id="qa" className=" place-content-center flex-col flex-wrap mx-5 ml-10">
      <h1 className=" font-bold text-3xl mb-5 text-left text-mainBlue italic">Q&A</h1>
      <div className="my-3 mx-4 ">
        <div className="QAcard flex p-2 hover:bg-red-50 flex-auto  item-left my-2 text-left ">
          <p class="Q">Q:老師請問大概總共會有幾堂課呢?</p>
        </div>
        <div className="QAcard flex p-2 hover:bg-yellow-50 flex-initial  item-left my-2 text-left ">
          <p class="A">A:大約54小時喔!!!</p>
        </div>
      </div>
      <hr className="mx-10 my-4 h-0.9 bg-gray-200" />

      <form>
        <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
            <label for="comment" class="sr-only">
              Your comment
            </label>
            <textarea
              id="comment"
              rows="4"
              class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
              placeholder="Ask some question ..."
              required
            ></textarea>
          </div>
          <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
            <button
              type="submit"
              className="button-primary"
            >
              Post question
            </button>
            
          </div>
        </div>
      </form>
      
    </div>
  );
};

export default QA;
