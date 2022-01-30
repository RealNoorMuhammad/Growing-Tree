import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? `#63d471 ` : "#010606")};

  white-space: nowrap;
  padding: ${({ big }) => (big ? `14px 48px` : "12px 30px")};
  color: ${({ dark }) => (dark ? `#010606` : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? `20px` : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  border-radius: 15px 50px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : `#63d471 `)};
  }
`;
