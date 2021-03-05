import React from "react"
import Footer from "../global/Footer"
import Header from "../global/Header"

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="children">{children}</div>
      <Footer />
    </>
  )
}

export default Layout
