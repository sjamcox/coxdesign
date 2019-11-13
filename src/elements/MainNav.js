import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavContainer = styled.div`
`

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  a {
    color: hsla(0,0%,0%,0.8);
  }
`

const NavItem = styled.li`
  margin-bottom: 10px;
  font-weight: 700;
`

const MainNav = () => {
    return (
        <NavContainer>
            <NavList>
                <NavItem><Link to="/">Home</Link></NavItem>
                <NavItem><Link to="/projects">Projects</Link></NavItem>
                <NavItem><Link to="/contact">Contact</Link></NavItem>
            </NavList>
        </NavContainer>
    )
}

export default MainNav
