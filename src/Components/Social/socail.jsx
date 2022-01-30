import React from "react";
import { HeroContainer } from "./herosectionElements";
import { FaTwitter, FaDiscord } from "react-icons/fa";
import social from "../../Images/GrowingTreeLogo.png";

import { Nav } from "react-bootstrap";
import "./social.css";
const Socail = () => {
  return (
    <div>
      <HeroContainer id="social">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="soc_logo">
                <img
                  src={social}
                  alt="Simply Easy Learning"
                  className="social_logo"
                />
              </div>
              <div className="img_tittle_div">
                <h3>Social Networks</h3>
                <p> GrowingTreesnft@gmail.com</p>
              </div>
              <div className="socail_icons_div">
                <FaTwitter color="orange" />
                <FaDiscord color="orange" />
                <FaTwitter color="orange" />
              </div>
            </div>
            <div className="col-md-7 social_second_col_main_div">
              <div className="social_second_text_div">
                <h2>
                  Growing Trees is an NFT Play to Buy and Purchase in which you
                  will have to build your own trees
                </h2>
              </div>
              <div className="social_second_nav_div">
                <Nav>
                  <Nav.Link href="#home" className="ccolor">
                    Home
                  </Nav.Link>
                  <Nav.Link href="#wiki" className="ccolor">
                    Wiki
                  </Nav.Link>
                  <Nav.Link href="#feature" className="ccolor">
                    Features
                  </Nav.Link>

                  <Nav.Link eventKey={2} href="#roadmap" className="ccolor">
                    Roadmap
                  </Nav.Link>

                  <button className="last_play_btn">Play</button>
                </Nav>
              </div>
            </div>
          </div>
        </div>
      </HeroContainer>
    </div>
  );
};

export default Socail;
