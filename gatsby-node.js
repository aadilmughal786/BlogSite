const path = require("path")

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query MyQuery {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              slug
              stack
              date(formatString: "DD/MM/YYYY")
              thumb {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: BLURRED
                    transformOptions: { cropFocus: CENTER }
                  )
                }
              }
            }
            html
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
