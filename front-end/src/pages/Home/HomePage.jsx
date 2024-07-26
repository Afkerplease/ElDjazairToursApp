import { Link } from "react-router-dom";
import "./homepage.scss";
import React, { useState, useEffect } from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import PopularSection from "../../components/PopularSection/PopularSection";
import ChooseSection from "../../components/ChooseSection/ChooseSection";
import CustomerSection from "../../components/CustomerSection/CustomerSection";

function HomePage() {
  return (
    <>
      <HeroSection />
      <PopularSection />
      <ChooseSection />

      <CustomerSection />
    </>
  );
}

export default HomePage;
