import { React, useState } from "react";
import styled from "styled-components";
import SidebarItems from "./SidebarItems";

const SidebarParent = styled.div`
  background: #282c34;
  width: 250px;
  height: 100vh;
`;

const SidebarItem = styled.div`
  padding: 16px 24px;
  transition: all 0.25s ease-in-out;
  //Change the background color if 'active' prop is received
  background: ${(props) => (props.active ? "#282c34" : "")};
  margin: 4px 12px;
  border-radius: 4px;

  p {
    color: white;
    font-weight: bold;
    text-decoration: none;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover:not(:first-child) {
    background: #7fc9bd;
  }
`;

export default function Sidebar({ defaultActive }) {
  //If no active prop is passed, use `1` instead
  const [activeIndex, setActiveIndex] = useState(defaultActive || 1);
  return (
    <>
      <SidebarParent>
        {SidebarItems.map((item, index) => {
          return (
            <SidebarItem key={item.name} active={index === activeIndex}>
              <p>{item.name}</p>
            </SidebarItem>
          );
        })}
      </SidebarParent>
    </>
  );
}
