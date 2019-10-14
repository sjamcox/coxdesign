import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavContainer = styled.div`
`

const NavList = styled.ul`
  list-style: none;
`

const NavItem = styled.li`
  font-family: Helvetica;
  margin-bottom: 0;
`

const MainNav = () => {
    return (
        <NavContainer>
            <NavList>
                <NavItem><Link to="/">Home</Link></NavItem>
                <NavItem><Link to="/posts/third-post">Work</Link></NavItem>
                <NavItem><Link to="/posts/second-post">Contact</Link></NavItem>
            </NavList>
        </NavContainer>
    )
}

export default MainNav
