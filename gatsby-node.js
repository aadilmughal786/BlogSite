const path = require("path")

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query MyQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
  data.allMarkdownRemark.edges.forEach(edge => {
    const slug = edge.node.frontmatter.slug
    actions.createPage({
      path: "/blogs/" + slug,
      component: require.resolve(`./src/template/blogTemp.jsx`),
      context: { slug: slug },
    })
  })
}
