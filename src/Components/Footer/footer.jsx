import React from "react";
import { FaFacebook, FaInstagram, FaDiscord } from "react-icons/fa";

import { ReactComponent as FooterLogo } from "../../assets/Image/gunshot.svg";

import {
  FooterContainer,
  FooterWrap,
  FooterLinksWrapper,
  FooterLinksContainer,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialIconLink,
  SocialIcons,
  WebsiteRights,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLink to="/Ourseries">Our Series</FooterLink>
              <FooterLink to="/learn">learn</FooterLink>
              <FooterLink to="/prs">This is the PRS</FooterLink>
              <FooterLink to="/membership">Membership & Rewards</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLink to="">Privacy Policy</FooterLink>
              <FooterLink to="">Terms & Conditions</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> </FooterLinkTitle>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLogo>
                <FooterLogo />
              </FooterLogo>
              <br />

              <SocialIcons>
                <SocialIconLink
                  href="//www.facebook.com/"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </SocialIconLink>

                <SocialIconLink
                  href="https://www.instagram.com/growingtreesnfts/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </SocialIconLink>

                <SocialIconLink
                  href="https://discord.gg/tAXPSbbb"
                  target="_blank"
                  aria-label="Discord"
                >
                  <FaDiscord />
                </SocialIconLink>
              </SocialIcons>
              <WebsiteRights>
                {" "}
                Copyright © {new Date().getFullYear()} Growing Trees Series .
                All rights reserved.
              </WebsiteRights>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
