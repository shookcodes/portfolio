/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Shook',
    menuLinks: [
      {
        name: 'home',
        linkId: '#'
      },
      {
        name: 'about',
        linkId: '#about'
      }
    ]
  },
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/
        }
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-smoothscroll`,
    `react-router-dom`,
    `smooth-scroll`,
    `gatsby-plugin-styled-components`,
    `browser-monads`

  ],
},

  exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
      devtool: 'eval-source-map',
    })
  }
