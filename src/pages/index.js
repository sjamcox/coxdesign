import React from "react"
import Layout from "../components/layout"
import Listing from "../components/listing"
import MainNav from "../components/mainNav"
import StyledBackgroundSection from '../components/backgroundSection'
import { graphql, useStaticQuery } from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query BgImageQuery {
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
    <>
      <MainNav />
      <StyledBackgroundSection />
      <Layout>
        <Listing />
      </Layout>
    </>
    )
}

export default IndexPage
