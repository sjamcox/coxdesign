/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from 'styled-components'

const ArchiveList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  a {
    text-decoration: underline;
    font-size: .9rem;
    color: #0089d0;
  }
`

const POST_ARCHIVE_QUERY = graphql`
query BlogPostArchive {
    allMarkdownRemark(limit: 10, sort: {
        order: DESC,
        fields: [frontmatter___date]
    }) {
        edges {
          node {
            frontmatter {
              title
              slug
            }
          }
        }
    }
}
`

const Archive = () => {
  const data = useStaticQuery(POST_ARCHIVE_QUERY)

  return (
    <>
        <aside>
            <h3>Archive</h3>
            {data.allMarkdownRemark.edges.map(edge => (
                <ArchiveList>
                    <li key={edge.node.frontmatter.slug}>
                        <Link to={`/posts${edge.node.frontmatter.slug}`}>{edge.node.frontmatter.title}</Link>
                    </li>
                </ArchiveList>
            ))}
        </aside>
    </>
  )
}

export default Archive
