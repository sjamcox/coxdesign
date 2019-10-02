/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const POST_ARCHIVE_QUERY = graphql`
query BlogPostArchive {
    allMarkdownRemark(limit: 5, sort: {
        order: DESC,
        fields: [frontmatter___date]
    }) {
        edges {
          node {
            excerpt
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
                <ul>
                    <li key={edge.node.frontmatter.slug}>
                        <Link to={`/posts${edge.node.frontmatter.slug}`}><h2>{edge.node.frontmatter.title}</h2></Link>
                        <p>{edge.node.excerpt}</p>
                    </li>
                </ul>
            ))}
        </aside>
    </>
  )
}

export default Archive
