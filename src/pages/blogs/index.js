import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Blog({ data }) {
  // console.log(data)
  const blogs = data.allMarkdownRemark.edges
  return (
    <Layout>
      <h1 className="py-4 mb-12 text-3xl sm:text-4xl text-center font-DancingScript	text-teal-900/80">
        Blogs
      </h1>
      <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 min">
        {blogs.map(blog => (
          <Link to={"/blogs/" + blog.node.frontmatter.slug} key={blog.node.id}>
            <div className="hover:bg-gray-100/95 flex flex-col p-4 border border-b-2 hover:shadow-md shadow-teal-900 rounded-t rounded-r  border-b-teal-600 hover:border-b-purple-800 h-full">
              <GatsbyImage
                className="rounded-sm mb-4 h-1/2 sm:h-auto"
                image={getImage(blog.node.frontmatter.thumb)}
                alt={blog.node.frontmatter.title}
              />
              <h1 className="text-2xl">{blog.node.frontmatter.title}</h1>
              <p className="text-gray-800">{blog.node.frontmatter.stack}</p>
              <p className="text-sm text-purple-500">
                {blog.node.frontmatter.date}
              </p>
              <p className="text-gray-600">
                {blog.node.html.substring(3, 100) + "..."}
              </p>
            </div>
          </Link>
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
