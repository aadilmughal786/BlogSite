import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  return (
    <Layout>
      <div className="flex flex-col-reverse lg:flex-row items-center text-gray-800 gap-4 lg:gap-8">
        <div className="lg:w-1/2 w-full">
          <h3 className="text-xl md:text-2xl mb-1 text-violet-700">
            Hi, My Name is Aadil 😎 I'am&nbsp;a
          </h3>
          <h2 className="text-3xl lg:text-5xl md:text-4xl mb-6 text-blue-800/90 font-bold">
            Fullstack web developer
          </h2>
          <h3 className="text-xl md:text-2xl mb-2 text-teal-900/80">
            ❤ I like to build stuff
          </h3>
          <h3 className="text-xl md:text-2xl mb-6 text-teal-900/80">
            ❤ Coding is power and building something through coding is a
            superpower
          </h3>
          <Link
            to="/resume"
            className="text-base md:text-xl hover:bg-blue-900 bg-violet-700/80 text-white cursor-pointer rounded-md  px-6 py-2"
          >
            View my resume
          </Link>
        </div>
        <StaticImage
          className="sm:w-4/5 md:w-2/3 lg:w-1/2 w-full"
          src="../opt_pics/home.png"
          placeholder="blurred"
          alt="lovepik.com"
        />
      </div>
    </Layout>
  )
}
