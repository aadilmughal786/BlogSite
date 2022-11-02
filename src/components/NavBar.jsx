import { Link } from "gatsby"
import React from "react"

export default function NavBar() {
  return (
    <nav className="sticky top-0 flex justify-between items-center backdrop-blur-3xl bg-white/40 py-4 px-8 sm:px-16 border-b border-teal-900/30 underline-offset-4 drop-shadow-sm z-10">
      <Link to="/">
        <h1 className="bold text-3xl sm:text-4xl font-DancingScript text-indigo-900 hover:text-teal-900">
          Dev-Aadil
        </h1>
      </Link>

      <div className="flex items-center gap-4 tracking-widest ">
        <Link
          className="transition-all	text-teal-900 font-bold hover:underline decoration-indigo-700/75 decoration-2 uppercase"
          to="/"
        >
          Home
        </Link>
        <Link
          className="text-teal-900 font-bold hover:underline decoration-indigo-700/75 decoration-2 uppercase"
          to="/projects"
        >
          Projects
        </Link>
        <Link
          className="text-teal-900 font-bold hover:underline decoration-indigo-700/75 decoration-2 uppercase"
          to="/blogs"
        >
          Blogs
        </Link>
        <Link
          className="text-teal-900 font-bold hover:underline decoration-indigo-700/75 decoration-2 uppercase"
          to="/about"
        >
          About
        </Link>
        <Link
          className="flex items-center text-teal-900 font-bold hover:underline decoration-indigo-700/75 decoration-2 uppercase"
          to="/resume"
        >
          Resume
        </Link>
      </div>
    </nav>
  )
}
