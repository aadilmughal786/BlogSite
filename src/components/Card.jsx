import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
function Card({ blog }) {
  return (
    <Link to={"/blogs/" + blog.node.frontmatter.slug} key={blog.node.id}>
      <div className="hover:bg-gray-100/95 flex flex-col p-4 border border-b-2 hover:shadow-md shadow-teal-900 rounded-t rounded-r  border-b-teal-600 hover:border-b-purple-800 h-full">
        <GatsbyImage
          className="rounded-sm mb-4 h-1/2 sm:h-auto"
          image={getImage(blog.node.frontmatter.thumb)}
          alt={blog.node.frontmatter.title}
        />
        <h1 className="text-2xl">{blog.node.frontmatter.title}</h1>
        <p className="text-gray-800">{blog.node.frontmatter.stack}</p>
        <p className="text-sm text-purple-500">{blog.node.frontmatter.date}</p>
        <p className="text-gray-600">
          {blog.node.html.substring(3, 100) + "..."}
        </p>
      </div>
    </Link>
  )
}

export default Card
