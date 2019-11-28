import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "@emotion/styled";

export default function BottomNavigation() {
  const location = useLocation();
  const Container = styled.div`
    display: flex;
    justify-content: space-around;
    height: 100%;
  `;
  const NavigationLink = styled(Link)`
    flex-grow: 1;
    text-decoration: none;
    background: ${props =>
      props.active ? props.theme.text : props.theme.secondary};
    color: ${props =>
      props.active ? props.theme.background : props.theme.text};
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    font-weight: 600;
  `;

  return (
    <Container>
      <NavigationLink to="/" active={location.pathname === "/"}>
        Home
      </NavigationLink>
      <NavigationLink to="/new" active={location.pathname === "/new"}>
        New
      </NavigationLink>
    </Container>
  );
}
