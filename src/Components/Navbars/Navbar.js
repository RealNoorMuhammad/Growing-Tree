import React, { useState, useEffect } from "react";

import { FaBars } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  CloseIcon,
  Icon,
} from "../Navbars/NavbarElements";
import "./Navbar.css";

import Stack from "@mui/material/Stack";

import { BsTree } from "react-icons/bs";
const Navbare = ({ toggle }) => {
  const [scrollNav, SetScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      SetScrollNav(true);
    } else {
      SetScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" style={{ margin: "auto 0" }}>
            <BsTree className="bstree" /> | Growing Trees
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu style={{ margin: "auto 0", textDecoration: "none" }}>
            <Stack spacing={2} direction="row">
              <NavBtn>
                <NavBtnLink to="/about">About</NavBtnLink>
              </NavBtn>
              <NavBtn>
                <NavBtnLink to="/blog">Blog</NavBtnLink>
              </NavBtn>
              <NavBtn>
                <NavBtnLink to="/market">Market</NavBtnLink>
              </NavBtn>
              <NavBtn>
                <NavBtnLink to="/faq">FAQ</NavBtnLink>
              </NavBtn>

              <NavBtn>
                <NavBtnLink to="/signin">Sign In</NavBtnLink>
              </NavBtn>
              <NavBtn>
                <NavBtnLink to="/signup">Sign Up</NavBtnLink>
              </NavBtn>
            </Stack>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbare;
