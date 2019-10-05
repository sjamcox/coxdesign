module.exports = {
  siteMetadata: {
    siteUrl: `https://coxdesign.co`,
    title: `Cox Design`,
    description: `Portfolio of Sam Cox. Web Developer. Graphic Designer.`,
    author: `@sjamcox`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cox Design`,
        short_name: `Cox Design`,
        start_url: `/`,
        background_color: `#333333`,
        theme_color: `#333333`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
      }
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-offline`,
  ],
}
