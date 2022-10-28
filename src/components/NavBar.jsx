import { Link } from "gatsby"
import React from "react"

export default function NavBar() {
  return (
    <nav className="sticky top-0 flex justify-between items-center backdrop-blur-3xl bg-white/40 py-4 px-8 sm:px-16 border-b border-teal-900/30 underline-offset-4 drop-shadow-sm">
      <Link to="/">
        <h1 className="bold text-4xl font-DancingScript text-indigo-900 hover:text-teal-900">
          Blog-Site
        </h1>
      </Link>
      <div className="flex gap-4 tracking-widest">
        <Link
          className="text-teal-900 font-bold hover:underline decoration-indigo-700/75 decoration-2 uppercase"
          to="/"
        >
          Home
        </Link>
        <Link
          className="text-teal-900 font-bold hover:underline decoration-indigo-700/75 decoration-2 uppercase"
          to="/blog"
        >
          Blogs
        </Link>
        <Link
          className="text-teal-900 font-bold hover:underline decoration-indigo-700/75 decoration-2 uppercase"
          to="/about"
        >
          About
        </Link>
      </div>
    </nav>
  )
}
