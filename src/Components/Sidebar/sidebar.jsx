import React from "react";

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SideBtnWrap,
  SidebarLink,
  SidebarRoute,
  SidebarMenu,
} from "./sidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="OurSeries" onClick={toggle}>
            Our Series
          </SidebarLink>
          <SidebarLink to="Learn" onClick={toggle}>
            Learn
          </SidebarLink>
          <SidebarLink to="Prs" onClick={toggle}>
            This is the Prs
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/membership" onClick={toggle}>
            Membership & Rewards
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
