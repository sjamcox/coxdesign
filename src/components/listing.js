import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

const Post = styled.article`
  box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.05);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  a {
    color: #000;
    text-decoration: none;
  }
  p {
    font-size: .9rem;
  }
  h2 {
    margin-bottom: 0;
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: bold;
  }
  .read-more {
    text-decoration: underline;
    font-size: .9rem;
    color: #0089d0;
  }
`

const LISTING_QUERY = graphql`
query BlogPostListing {
    allMarkdownRemark(limit: 3, sort: {
        order: DESC,
        fields: [frontmatter___date]
    }) {
        edges {
          node {
            excerpt
            frontmatter {
              date
              title
              slug
            }
          }
        }
    }
}`

const Listing = () => (
  <StaticQuery 
    query={LISTING_QUERY}
    render={({allMarkdownRemark}) => (
        allMarkdownRemark.edges.map(edge => (
            <Post key={edge.node.frontmatter.slug}>
                <Link to={`/posts${edge.node.frontmatter.slug}`}><h2>{edge.node.frontmatter.title}</h2></Link>
                <p>{edge.node.frontmatter.date}</p>
                <p>{edge.node.excerpt}</p>
                <Link class="read-more" to={`/posts${edge.node.frontmatter.slug}`}>Read More</Link>
            </Post>
        ))
    )}
  />
)

export default Listing
