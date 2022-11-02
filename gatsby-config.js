/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-postcss", //for tailwindcss

    // To access markdown files
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/Blogs/`,
      },
    },

    // optimize image path
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pics`,
        path: `${__dirname}/src/opt_pics/`,
      },
    },

    // markdown converter
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },

    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
  ],

  siteMetadata: {
    title: "Aadil's portfolio webapp",
    owner: "Aadil Mugal",
    siteName: "Dev-Aadil",
    copyright: "This webapp is copyright  2022 Aadil Mugal",
  },
}
