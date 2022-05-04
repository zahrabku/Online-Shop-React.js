import React from "react";
import CardContainer from "./Card-container";
import Search from "./search";
import Logos from "./Logos";
import Footer from "./footer";
import Header from "./header";

export const Home = () => {
  return (
    <div>
      <Header />
      <CardContainer />
      <Search />
      <Logos />
      <Footer />
    </div>
  );
};
