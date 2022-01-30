import React, { useState } from "react";

import Video from "../../Images/alleytree.jpg";

import { HeroContainer, HeroBg, VideoBg } from "./herosectionElements";

const Herosection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="1">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
    </HeroContainer>
  );
};

export default Herosection;
