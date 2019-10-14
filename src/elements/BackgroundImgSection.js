import React from "react"
import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components'

const BackgroundSection = ({ className }) => {
  const data = useStaticQuery(graphql`
  query BackgroundImageQuery {
    file(relativePath: {
      regex: "/home-header/"
    }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)
  return (
      <BackgroundImage 
        className={className}
        fluid={data.file.childImageSharp.fluid}>
        <h1>Hello, my name is Sam. I design and build user experiences.</h1>
      </BackgroundImage>
    )
}

const StyledBackgroundSection = styled(BackgroundSection)`
    width: 100%;
    height: 80vh;
    background-position: bottom center;
    background-repeat: repeat-y;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    h1 {
        font-size: 70px;
        margin: 50px;
    }
`

export default StyledBackgroundSection
