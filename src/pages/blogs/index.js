import { graphql } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import Card from "../../components/Card"

export default function Blog({ data }) {
  // console.log(data)
  const blogs = data.allMarkdownRemark.edges
  return (
    <Layout>
      <h1 className="py-4 mb-12 text-3xl sm:text-4xl text-center font-DancingScript	text-teal-900/80">
        Blogs
      </h1>
      <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
        {blogs.map(blog => (
          <Card blog={blog} />
        ))}
      </div>
    </Layout>
  )
}

export const blogQuery = graphql`
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
`
