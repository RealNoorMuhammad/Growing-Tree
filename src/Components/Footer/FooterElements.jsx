import styled from "styled-components";

import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: #000000; ;
`;
export const FooterWrap = styled.div`
  padding: 48px 84px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;
export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;
export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;
export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 200px;
  text-decoration: none;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;
export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;
export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #ff5454;
    transition: 0ms.3s ease-out;
  }
`;
export const Fcondition = styled.p`
  font-size: 5px;
  font-style: normal;
`;
export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;
export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: row;
  }
`;
export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  display: inline;
  font-size: 10px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  padding: 20px;
  text-decoration: none;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;
