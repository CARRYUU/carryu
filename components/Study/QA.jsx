import React from "react"

const QA = () =>{
    return(
        <div id="QA" className="place-content-center">
          <div className="my-3 mx-4 ">
            <div className="cardSearch flex p-2 hover:bg-red-50 flex-initial  item-left my-2 text-left ">
              <p class="Q">
                Q:老師請問大概總共會有幾堂課呢?
              </p>
            </div>
            <div className="cardSearch flex p-2 hover:bg-yellow-50 flex-initial  item-left my-2 text-left ">
              <p class="A">
                A:大約54小時喔!!!
              </p>
            </div>

          </div>
          <hr className="mx-10 my-4 h-0.9 bg-gray-200" />
        </div>
    );
};

export default QA;


