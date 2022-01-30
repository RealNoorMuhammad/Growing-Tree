import React from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
} from "./herosectionElements";
import { HiCheck, HiX } from "react-icons/hi";

import Video from "../../Images/roads.PNG";
import "./road.css";
const Road = () => {
  return (
    <HeroContainer id="roadmap">
      <div className="container">
        <div className="row">
        
          <h1 className="title"> RoadMap </h1>

          <div className="col-md-4">
            <h2 className="head">1 Oct. - Nov</h2>
            <diV className="icon__text">
              <HiCheck color="#ff8c00" />
              <p>Game Design conceptualization</p>
            </diV>
            <diV className="icon__text">
              <HiCheck color="#ff8c00" />
              <p>Game Design conceptualization</p>
            </diV>
            <diV className="icon__text">
              <HiCheck color="#ff8c00" />
              <p>Game Design conceptualization</p>
            </diV>
            <diV className="icon__text">
              <HiCheck color="#ff8c00" />
              <p>Game Design conceptualization</p>
            </diV>
            <diV className="icon__text">
              <HiCheck color="#ff8c00" />
              <p>Game Design conceptualization</p>
            </diV>
            <diV className="icon__text">
              <HiCheck color="#ff8c00" />
              <p>Game Design conceptualization</p>
            </diV>
            <diV className="icon__text">
              <HiCheck color="#ff8c00" />
              <p>Game Design conceptualization</p>
            </diV>
            <diV className="icon__text">
              <HiCheck color="#ff8c00" />
              <p>Game Design conceptualization</p>
            </diV>
            <diV className="icon__text">
              <HiCheck color="#ff8c00" />
              <p>Game Design conceptualization</p>
            </diV>
            <diV className="icon__text">
              <HiCheck color="#ff8c00" />
              <p>Game Design conceptualization</p>
            </diV>
          </div>

          <div className="col-md-4">
            <h2 className="head">November 2021</h2>
            <diV className="icon__text">
              <HiCheck color="#ff8c00" />
              <p>Game Design conceptualization</p>
            </diV>
            <diV className="icon__text">
              <HiCheck color="#ff8c00" />
              <p>Game Design conceptualization</p>
            </diV>
            <diV className="icon__text">
              <HiCheck color="#ff8c00" />
              <p>Game Design conceptualization</p>
            </diV>
            <diV className="icon__text">
              <HiCheck color="#ff8c00" />
              <p>Game Design conceptualization</p>
            </diV>
            <diV className="icon__text">
              <HiCheck color="#ff8c00" />
              <p>Game Design conceptualization</p>
            </diV>
            <diV className="icon__text">
              <HiCheck color="#ff8c00" />
              <p>Game Design conceptualization</p>
            </diV>
          </div>

          <div className="col-md-4">
            <h2 className="head">December - Jan 2022</h2>
            <diV className="icon__text">
              <HiX color="#ff8c00" />
              <p>Game Design conceptualization</p>
            </diV>
            <diV className="icon__text">
              <HiX color="#ff8c00" />
              <p>Game Design conceptualization</p>
            </diV>
            <diV className="icon__text">
              <HiX color="#ff8c00" />
              <p>Game Design conceptualization</p>
            </diV>
            <diV className="icon__text">
              <HiX color="#ff8c00" />
              <p>Game Design conceptualization</p>
            </diV>
            <diV className="icon__text">
              <HiX color="#ff8c00" />
              <p>Game Design conceptualization</p>
            </diV>
            <diV className="icon__text">
              <HiX color="#ff8c00" size="1em" />
              <p>Game Design conceptualization</p>
            </diV>
          </div>
        </div>
      </div>
    </HeroContainer>
  );
};

export default Road;
