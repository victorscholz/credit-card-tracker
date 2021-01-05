import React from "react";
import styled from "styled-components";

const NavParent = styled.div`
  margin: 10px;
`;

export default function Nav(props) {
  return (
    <NavParent>
      <div>
        <h1>Credit Card Tracker</h1>
      </div>
    </NavParent>
  );
}
