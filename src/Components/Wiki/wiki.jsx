import React from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
} from "./herosectionElements";

import social from "../../Images/GrowingTreeLogo.png";
import "./wiki.css";

const Wiki = () => {
  return (
    <HeroContainer id="wiki">
      <div className="container wiki_page_main_container">
        <div className="row m-0">
          <div className="col-md-6">
            <div className="wiki_sec1_img_div">
              <img
                src={social}
                alt="Simply Easy Learning"
                className="social_logo"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="wiki_sec2_tittle_div">
              <h3>In just over 1 month of game we reached the mark of:</h3>
            </div>
            <div className="wiki_sec_main_div">
              <div className="wiki_sec2_tittle_div">
                <h1>+90K</h1>
                <p>Active Players</p>
              </div>
              <div className="wiki_sec2_tittle_div">
                <h1>+90K</h1>
                <p>Active Players</p>
              </div>
            </div>
            <div className="sec2_last_text1">
              <h5>And it's just the beginning...</h5>
            </div>
          </div>
        </div>
        <div className="wiki_last_btn_text_main_div">
          <div className="wiki_last_text">
            <h3>
              Know how <span> to Play :</span>
            </h3>
          </div>
          <div className="wiki_last_button">
            <button type="submit">Click me</button>
          </div>
        </div>
      </div>
    </HeroContainer>
  );
};

export default Wiki;
