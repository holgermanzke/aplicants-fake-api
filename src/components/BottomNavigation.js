import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

export default function BottomNavigation() {
  const Nav = styled.div`
    display: flex;
  `;

  return (
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/new">New</Link>
    </Nav>
  );
}
