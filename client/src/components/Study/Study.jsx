import Nav from "../layout/Nav";
import React from "react";
import Search from "../layout/Search";
import Header from "../layout/Header";
import Video from "./Video";
import Footer from "../layout/Footer";
import List from "./List";

const Study = () => {
  return (
    <div>
      <Header />
      <body>
        <Video />
        <List />
      </body>
      <Footer />
    </div>
  );
};

export default Study;
