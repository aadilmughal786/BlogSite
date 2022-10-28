import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col-reverse lg:flex-row items-center text-gray-800 gap-4">
        <div className="lg:w-1/2 w-full">
          <h2 className="text-4xl md:text-6xl mb-6 text-blue-800/90 font-bold">
            Fullstack web developer
          </h2>
          <h3 className="text-xl md:text-2xl mb-6 text-teal-900/80">
            ❤ I like to build stuff
          </h3>
          <h3 className="text-xl md:text-2xl mb-6 text-teal-900/80">
            ❤ Coding is power and building something through coding is a
            superpower
          </h3>
          <Link
            to="/blog"
            className="text-base md:text-xl hover:bg-blue-900 bg-blue-800/80 text-white cursor-pointer rounded-md  px-6 py-2"
          >
            Go to blogs
          </Link>
        </div>
        <img
          className="sm:w-4/5 lg:w-1/2 w-full"
          src="./pics/home.png"
          alt="lovepik.com"
        />
      </div>
    </Layout>
  )
}
