module.exports = {
  siteMetadata: {
    siteUrl: `https://coxdesign.co`,
    title: `Sam Cox | Web Development & Graphic Design`,
    description: `Portland-based developer creating blazingly fast websites using the latest web technology.`,
    author: `@sjamcox`,
    image: `src/images/sc-monogram.png`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `source serif pro\:400,600,700`,
          `source sans pro\:300,400,400i,700`
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `coffee`,
        path: `${__dirname}/src/coffee`,
      },
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
        icon: `src/images/sc-monogram.png`,
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
