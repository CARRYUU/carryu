import React from "react";
import Member from "./Member";

const About = () => {
  return (
    <div>
      <div name="about" className="w-full h-full  text-black  ">
        <div className="max-w-screen-lg  mx-auto mt-2 flex flex-col justify-center ">
          <div className="pb-8">
            <div class="mb-4 text-left px-20">
              <p class="text-base md:text-sm text-mainBlue font-bold ">
                &lt;{" "}
                <a
                  href="/"
                  class="text-base md:text-sm text-mainBlue font-bold no-underline hover:underline"
                >
                  BACK TO HOMEPAGE
                </a>
              </p>
              <h1 class="font-extrabold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-5xl lg:text-6xl text-center">
                Welcome! We Are CarryU
              </h1>
              <img
                src={require("../../assets/images/carryu_big_logo_white_background.png")}
                alt=""
                className="w-screen object-cover w-50 h-96 rounded-lg md:h-96 md:w-50 md:rounded--lg my-auto"
              />
              <p class="text-sm md:text-base font-normal text-gray-600 mt-2">
                Published 1 January 2023
              </p>
            </div>
          </div>

          <p className="text-xl mt-3 px-20 leading-8 tracking-wider text-left break-words">
            <div className="text-3xl italic font-semibold text-gray-900 ">
              "CarryU" is narrowed down from "Carry you".
            </div>
            <br />
            We hope that this project will be in place In the process of
            learning, someone becomes the best helping hand in each position, so
            the platform "covers you" and helps you expand Learn and become a
            learned man. With the development of network technology, people
            obtain information and product investment With the reduction of
            information, access to the Internet has made self-study more and
            more common. We also take this as a starting point and expect It is
            hoped that this project can create an online teaching platform with
            rich content, so that users have an easy opportunity to take
            courses. The good environment of the program, instead of spending
            money and extra effort in searching for a professional in the field
            for courses in different fields on the platform.
          </p>

          <br />

          <p className="text-xl mt-3 px-20 leading-8 tracking-wider text-left break-words'">
            <div className="text-3xl italic font-semibold text-gray-900">
              「CarryU」是從英文的「Carry you」進行縮寫。
            </div>
            <br />
            我們希望本專案能夠在所有人學習的過程中成為各位最好的助力之手，由此平台「罩你」，幫助你增廣見聞，成為學識淵博之人。隨著網路科技的日漸發達，人們取得資訊及產出資訊的成本降低，進而使得網路自學變得越來越普遍，我們也以此為出發點，期望本專案能創造出一個內容豐富的線上授課平台，讓使用者有一個容易取得課程的良好環境，而非為了不同領域的課程需花費額外心力在搜索該領域專屬的平台上。
          </p>

          <div>
            <div>
              <h1 class="text-left px-20 py-4 text-5xl font-normal mt-8">
                Our teams
                <small class="text-3xl ml-2 font-semibold text-gray-500 ">
                  {" "}
                  NCU
                </small>
              </h1>
            </div>

            <Member />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
