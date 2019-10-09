import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavContainer = styled.div`
    width: 100%;
    padding: 5px 20px;
    background: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items:center;
    position: sticky;
    top: 0px;
    z-index: 1;
    #navIcon, a {
        margin: 0;
        color: #000000;
        text-decoration: none;
    }
`

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  margin: 0;
`

const NavItem = styled.li`
  padding: 1rem;
  font-family: Helvetica;
  margin-bottom: 0;
`

const MainNav = () => {
    return (
        <NavContainer>
            <Link to="/"><h1 id="navIcon">SC</h1></Link>
            <NavList>
                <NavItem><Link to="/">Home</Link></NavItem>
                <NavItem><Link to="/posts/third-post">Work</Link></NavItem>
                <NavItem><Link to="/posts/second-post">Contact</Link></NavItem>
            </NavList>
        </NavContainer>
    )
}

export default MainNav
