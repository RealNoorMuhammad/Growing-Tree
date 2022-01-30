import React, { useState } from "react";

import "./aboutus.css";
import Footer from "../../Components/Footer/footer";
import Aboutusection from "../../Components/AboutData/aboutus";
import Navbare from "../../Components/Navbars/Navbar";
import Herosections from "../../Components/HeroSections/herosection";
import Sidebar from "../../Components/Sidebar/sidebar";

const Aboutus = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbare toggle={toggle} />
      <Herosections />
      <Aboutusection />
      <Footer />
    </div>
  );
};

export default Aboutus;
