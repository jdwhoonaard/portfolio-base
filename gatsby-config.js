require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Portfolio base`,
    description: `Salon404 portolio base`,
    author: `Job van den Hoonaard`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: ``,
        short_name: ``,
        start_url: `/`,
        background_color: ``,
        theme_color: ``,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`
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
          `Montserrat\:300, 400, 700`,
          'material icons'
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `usgt0m284301`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      },
    }
  ],
}
