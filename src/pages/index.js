import React from "react"
import Layout from "../components/layout"
import Listing from "../components/listing"
import MainNav from "../components/mainNav"
import Img from "gatsby-image"
import { useStaticQuery } from "gatsby"

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
      <Img fluid={data.file.childImageSharp.fluid}/>
      <Layout>
        <Listing />
      </Layout>
    </>
    )
}

export default IndexPage
