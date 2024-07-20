import { Link } from "react-router-dom";
import "./homepage.scss";
import React, { useState, useEffect } from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import PopularSection from "../../components/PopularSection/PopularSection";

function HomePage() {
  return (
    <>
      {/* <HeroSection /> */}
      <PopularSection />
      {/* <ChooseSection /> */}
      {/* <TrendingDistinationsSection /> */}
      {/* <CustomerSection /> */}
    </>
  );
}

export default HomePage;
