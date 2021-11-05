import * as React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </div>
  )
}

export default Layout
