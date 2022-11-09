import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

function blogTemp({ data }) {
  const { html } = data.markdownRemark
  const { title, date, stack, featuredImg } = data.markdownRemark.frontmatter
  const tokens = stack.split(" ")
  return (
    <Layout>
      <div className="sm:flex flex-row justify-between items-end">
        <h2 className="text-4xl text-indigo-900">{title}</h2>
        <p className="text-gray-500">{date}</p>
      </div>
      <GatsbyImage
        className="rounded-sm mb-8 h-60 lg:h-auto"
        image={getImage(featuredImg)}
        alt={title}
      />
      <div className="mb-4 mt-[-20px]">
        {tokens.map(token => (
          <span className="bg-teal-400/20 mr-4 px-2 my-1 sm:px-3 sm:py-1 rounded text-[12px] inline-block w-fit">
            {token}
          </span>
        ))}
      </div>
      <div
        className="text-gray-800 text-xl tracking-wide mt-4"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  )
}

export default blogTemp

export const query = graphql`
  query MyQuery($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        stack
        date(formatString: "DD/MM/YYYY")
        featuredImg {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              transformOptions: { cropFocus: CENTER }
            )
          }
        }
      }
    }
  }
`
