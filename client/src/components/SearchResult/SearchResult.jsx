import React from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import SearchResultCard from "./SearchResultCard";
import Title from "../layout/Title";

const SearchResult = () => {
  return (
    <div>
      <Header />
      <body>
        <Title pageTitle="「JAVA」有10000個結果" />
        <div className="flex-col">
          <SearchResultCard
            badge1="html"
            badge2="css"
            badge3="react"
            vedioName="影片名稱"
            vedioInfo="這是一段很長的影片資訊，會告訴你這堂課有關的詳細內容，可以不用太仔細看，謝謝。"
            salePrice="250"
            originalPrice="500"
          />
          <SearchResultCard
            badge1="html"
            badge2="css"
            badge3="react"
            vedioName="影片名稱"
            vedioInfo="這是一段很長的影片資訊，會告訴你這堂課有關的詳細內容，可以不用太仔細看，謝謝。"
            salePrice="250"
            originalPrice="500"
          />
          <SearchResultCard
            badge1="html"
            badge2="css"
            badge3="react"
            vedioName="影片名稱"
            vedioInfo="這是一段很長的影片資訊，會告訴你這堂課有關的詳細內容，可以不用太仔細看，謝謝。"
            salePrice="250"
            originalPrice="500"
          />
        </div>
      </body>
    </div>
  );
};

export default SearchResult;
