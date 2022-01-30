import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
`;
export const HeroBg = styled.div`
  /* position: absolute; */

  width: 100%;
  height: 100%;
`;
export const VideoBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  background: #02062cbd;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 100%;
  position: relative;
`;
export const HeroH1 = styled.div`
  color: #ffff;
  text-align: center;
  font-weight: bold;
  font-family: Gilroy-Bold;
  font-size: 44px;
  line-height: 96px;
  letter-spacing: 0em;
  font-family: "Poppins", sans-serif;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
`;
