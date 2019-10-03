import React, { Component } from 'react';
import { graphql } from 'gatsby'
import Layout from './layout'

class postLayout extends Component {
    render() {
        const { markdownRemark } = this.props.data
        return (
            <Layout>
                <div>
                    <h1>{markdownRemark.frontmatter.title}</h1>
                    <div dangerouslySetInnerHTML={{
                        __html: markdownRemark.html
                    }}></div>
                </div>
            </Layout>
        );
    }
}

export const query = (graphql`
    query PostQuery($slug: String!) {
        markdownRemark(frontmatter: {
            slug: {
                eq: $slug
            }
        }) {
            html
              frontmatter {
                title
                date
                slug
              }
            }
          
    }
`)

export default postLayout;