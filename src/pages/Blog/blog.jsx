import React, { useState } from "react";

import Navbare from "../../Components/Navbars/Navbar";
import Herosections from "../../Components/HeroSections/herosection";

import Footer from "../../Components/Footer/footer";
import VidContent from "../../Components/VidContent/VidContent";
import Shooter from "../../Components/ShooterImg/shooterimg";
import Sidebar from "../../Components/Sidebar/sidebar";
const Blog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbare toggle={toggle} />
      <Herosections />
      <Shooter />
      <VidContent />
      <br />
      <Footer />
    </>
  );
};

export default Blog;
