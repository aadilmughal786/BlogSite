import React from "react"
import Footer from "./Footer"
import NavBar from "./NavBar"

export default function Layout({ children }) {
  return (
    <div className="font-mono w-full min-h-screen bg-gradient-to-r from-rose-100 to-teal-100 flex flex-col justify-between">
      <NavBar />
      {/* Contant is here */}
      <div className="flex flex-col flex-1 py-16 px-8 sm:px-16">{children}</div>
      <Footer />
    </div>
  )
}
