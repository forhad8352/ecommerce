import React from "react";

import Banner from "../components/Banner";
import FeatureProduct from "../components/FeatureProduct";
import LatestProduct from "../components/LatestProduct";
import Shopex from "../components/Shopex";
import Unique from "../components/Unique";
import TrendingPotos from "../components/TrendingPotos";
import Discount from "../components/Discount";
import TopCategory from "../components/TopCategory";
import News from "../components/News";
import LatestBlog from "../components/LatestBlog";

const Home = () => {
  return (
    <>
      <Banner />
      <FeatureProduct />
      <LatestProduct />
      <Shopex />
      <Unique />
      <TrendingPotos />
      <Discount />
      <TopCategory />
      <News />
      <LatestBlog />
    </>
  );
};

export default Home;
