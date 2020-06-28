require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Job van den Hoonaard`,
    description: `A creative looking for ways to express creativity within the technical possibilities.`,
    author: `Job van den Hoonaard`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Portfolio base`,
        short_name: `Portfolio base`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#1200fe`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Open Sans\:300,400, 700`,
          'material icons'
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      },
    }
  ],
}
