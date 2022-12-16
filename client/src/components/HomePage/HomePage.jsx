import React from "react";
import Card from "../layout/Card";
import Title from "../layout/Title";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <body>
        <Title pageTitle="熱門排行｜Popular Course" />
        {/* card */}
        <div className="flex snap-x scroll-pl-6">
          <Card
            image={require("../../image/1.JPG")}
            badge1="html"
            badge2="css"
            badge3="react"
            vedioName="影片名稱"
            vedioInfo="這是一段很長的影片資訊，會告訴你這堂課有關的詳細內容，可以不用太仔細看，謝謝。"
            salePrice="250"
            originalPrice="500"
          />
          <Card
            image={require("../../image/2.JPG")}
            badge1="html"
            badge2="css"
            badge3="react"
            vedioName="影片名稱2"
            vedioInfo="這是一段很長的影片資訊，會告訴你這堂課有關的詳細內容，可以不用太仔細看，謝謝。"
            salePrice="450"
            originalPrice="500"
          />
          <Card
            image={require("../../image/3.JPG")}
            badge1="html"
            badge2="css"
            badge3="react"
            vedioName="影片名稱3"
            vedioInfo="這是一段很長的影片資訊，會告訴你這堂課有關的詳細內容，可以不用太仔細看，謝謝。"
            salePrice="250"
            originalPrice="500"
          />
          <Card
            image={require("../../image/4.JPG")}
            badge1="html"
            badge2="css"
            badge3="react"
            vedioName="影片名稱4"
            vedioInfo="這是一段很長的影片資訊，會告訴你這堂課有關的詳細內容，可以不用太仔細看，謝謝。"
            salePrice="350"
            originalPrice="500"
          />
        </div>

        <Title pageTitle="推薦給你 | Recommended for you" />
        {/* card */}
        <div className="flex snap-x scroll-pl-6">
          <Card
            image={require("../../image/1.JPG")}
            badge1="html"
            badge2="css"
            badge3="react"
            vedioName="影片名稱5"
            vedioInfo="這是一段很長的影片資訊，會告訴你這堂課有關的詳細內容，可以不用太仔細看，謝謝。"
            salePrice="200"
            originalPrice="500"
          />
          <Card
            image={require("../../image/2.JPG")}
            badge1="html"
            badge2="css"
            badge3="react"
            vedioName="影片名稱6"
            vedioInfo="這是一段很長的影片資訊，會告訴你這堂課有關的詳細內容，可以不用太仔細看，謝謝。"
            salePrice="300"
            originalPrice="500"
          />
          <Card
            image={require("../../image/3.JPG")}
            badge1="html"
            badge2="css"
            badge3="react"
            vedioName="影片名稱7"
            vedioInfo="這是一段很長的影片資訊，會告訴你這堂課有關的詳細內容，可以不用太仔細看，謝謝。"
            salePrice="350"
            originalPrice="500"
          />
          <Card
            image={require("../../image/4.JPG")}
            badge1="html"
            badge2="css"
            badge3="react"
            vedioName="影片名稱8"
            vedioInfo="這是一段很長的影片資訊，會告訴你這堂課有關的詳細內容，可以不用太仔細看，謝謝。"
            salePrice="250"
            originalPrice="500"
          />
        </div>
      </body>
    </div>
  );
};

export default HomePage;
