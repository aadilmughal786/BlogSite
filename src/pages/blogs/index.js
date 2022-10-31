import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"

export default function Blog({ data }) {
  const blogs = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <h1 className="py-4 mb-12 text-3xl sm:text-4xl text-center font-DancingScript	text-teal-900/80">
        Blogs
      </h1>
      <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 min">
        {blogs.map(blog => (
          <Link to={"/blogs/" + blog.frontmatter.slug} key={blog.id}>
            <div className="flex flex-col p-4 border border-b-2 hover:shadow-md shadow-teal-900 rounded-t rounded-r  border-b-teal-600 hover:border-b-purple-800 h-full">
              <h1 className="text-2xl">{blog.frontmatter.title}</h1>
              <p className="text-gray-800">{blog.frontmatter.stack}</p>
              <p className="text-sm text-purple-500">{blog.frontmatter.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export const blogQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: ASC }) {
      nodes {
        frontmatter {
          slug
          stack
          title
          date(formatString: "DD/MM/YYYY")
        }
      }
    }
  }
`
