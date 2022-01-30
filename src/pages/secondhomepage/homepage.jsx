import React, { useState } from "react";
import Navbare from "../../Components/Navbars/Navbar";
import Herosections from "../../Components/HeroSections/herosection";
import { homeObjOne, homeObjTwo } from "../../Components/InfoSection/Data";
import InfoSection from "../../Components/InfoSection/Info";
import ProfileCards from "../../Components/ProfileCards/profilecards";
import Footer from "../../Components/Footer/footer";
import Sidebar from "../../Components/Sidebar/sidebar";

const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbare toggle={toggle} />
      <Herosections />
      <InfoSection {...homeObjOne} />
      <ProfileCards />
      <br />
      <Footer />
    </>
  );
};

export default Homepage;
