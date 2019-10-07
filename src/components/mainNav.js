import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const NavContainer = styled.div`
    width: 100%;
    background: blue;
`

const NavList = styled.ul`
  list-style: none;
`

const NavItem = styled.li`
  color: red;
  padding: 1rem;
  font-family: Helvetica;
  display: grid;
`

const MainNav = ({ siteTitle }) => (
  <NavContainer>
    <NavList>
      <NavItem>Home</NavItem>
      <NavItem>Work</NavItem>
      <NavItem>Contact</NavItem>
    </NavList>
  </NavContainer>
)

export default MainNav
