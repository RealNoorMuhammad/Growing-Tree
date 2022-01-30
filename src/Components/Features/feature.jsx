import React from "react";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
} from "./herosectionElements";

import Video from "../../Images/feature.PNG";
import "./feature.css";
const Feature = () => {
  return (
    <div id="feature">
      <HeroContainer>
       
        <HeroContent>
          <HeroH1>
            RiseCity is an NFT Play to Earn game in which you will have to build
            your own city to earn rewards
          </HeroH1>
          <div className="row">
            <div className="col-md-6">
              <h1 className="heading__one">Daily Quests & More</h1>
              <p className="paragraph__one">
                We want to make a game style with a gameplay in which the user
                never runs out of things to do. You will always have a mission
                available on the map, be it cleaning the city or completing
                secondary missions.
              </p>
            </div>

            <div className="col-md-6">
              <h1 className="heading__two">Daily Quests & More</h1>
              <p className="paragraph__two">
                All actions carried out within the game will not require
                payments since everything will be paid with the internal
                currency of the game.
              </p>
            </div>
          </div>
        </HeroContent>
      </HeroContainer>
    </div>
  );
};

export default Feature;
