import React from "react";
import Navbars from "../Components/Navbar/Navbar";
import Herosection from "../Components/HeroSection/herosection";
import Feature from "../Components/Features/feature";
import Wiki from "../Components/Wiki/wiki";
import Road from "../Components/Roadmap/road";
import Socail from "../Components/Social/socail";

const OnePage = () => {
  return (
    <div>
      <Navbars />

      <Herosection />

      <Feature />

      <Wiki />

      <Road />

      <Socail />
    </div>
  );
};

export default OnePage;
