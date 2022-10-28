import React from "react"
import Layout from "../components/Layout"

function PageNotFound() {
  return (
    <Layout>
      <div className="flex-1 grid content-center justify-center text-center ">
        <h1 className="sm:text-emerald-900 md:text-blue-900 lg:text-orange-900 text-8xl">
          404
        </h1>
        <p className="text-xl">Sorry, Page doesn't exist</p>
      </div>
    </Layout>
  )
}

export default PageNotFound
