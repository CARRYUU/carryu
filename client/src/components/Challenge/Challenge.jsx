import React from "react";
import Header from "../layout/Header";
import Title from "../layout/Title";
import Roll from "./Roll";
import Category from "./Category";
import Footer from "../layout/Footer";

const Challenge = () => {
  return (
    <div>
      <Header />
      <body>
        <Title pageTitle="請選擇：" />
        <div className="flex snap-x place-content-center gap-16">
          <Roll buttonName="Let it Roll" />
          <Category buttonName="Choose Category" />
        </div>
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Challenge;
