import React from "react"
import styled from "styled-components"
import Img from 'gatsby-image'
import { useStaticQuery } from "gatsby"

const NavContainer = styled.div`
    width: 100%;
    background: blue;
    display: flex;
`

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
`

const NavItem = styled.li`
  color: red;
  padding: 1rem;
  font-family: Helvetica;
`

const MainNav = () => {
    const data = useStaticQuery(graphql`
    query IconImageQuery {
        file(relativePath: {
          regex: "/gatsby-icon/"
        }) {
          childImageSharp {
            fixed(width: 55) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `)
    return (
        <NavContainer>
            <Img fixed={data.file.childImageSharp.fixed}/>
            <NavList>
                <NavItem>Home</NavItem>
                <NavItem>Work</NavItem>
                <NavItem>Contact</NavItem>
            </NavList>
        </NavContainer>
    )
}

export default MainNav
