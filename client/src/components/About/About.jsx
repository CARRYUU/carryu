import React from "react";

const About = () => {
  return (
    <div>
      <div
        name="about"
        className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white px-6 py-14"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p
              className="capitalize inline-block text-6xl font-bold relative cursor-pointer 
                transition-all duration-500 before:content-[''] before:absolute 
                before:-bottom-2 before:left-0 before:w-0 before:h-1.5 
                before:rounded-full before:opacity-0 before:transition-all 
                before:duration-500 before:bg-gradient-to-r before:from-gray-600 
                before:via-slate-400 before:to-zinc-500 hover:before:w-full 
                hover:before:opacity-100"
            >
              Welcome! We Are CarryU
            </p>
          </div>

          <p className="text-xl mt-10 px-20 leading-8 tracking-wider text-left break-words">
            "CarryU" is narrowed down from "Carry you". <br />
            We hope that this project will be in place In the process of
            learning, someone becomes the best helping hand in each position, so
            the platform "covers you" and helps you expand Learn and become a
            learned man. With the development of network technology, people
            obtain information and product investment With the reduction of
            information, access to the Internet has made self-study more and
            more common. We also take this as a starting point and expect It is
            hoped that this project can create an online teaching platform with
            rich content, so that users have an easy opportunity to take courses
            The good environment of the program, instead of spending money and
            extra effort in searching for a professional in the field for
            courses in different fields on the platform.
          </p>

          <br />

          <p className="text-xl px-20 leading-8 tracking-wider text-left break-words'">
            「CarryU」是從英文的「Carry you」進行縮寫。
            <br />
            我們希望本專案能夠在所
            有人學習的過程中成為各位最好的助力之手，由此平台「罩你」，幫助你增廣
            見聞，成為學識淵博之人。隨著網路科技的日漸發達，人們取得資訊及產出資
            訊的成本降低，進而使得網路自學變得越來越普遍，我們也以此為出發點，期
            望本專案能創造出一個內容豐富的線上授課平台，讓使用者有一個容易取得課
            程的良好環境，而非為了不同領域的課程需花費額外心力在搜索該領域專屬的
            平台上。
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
