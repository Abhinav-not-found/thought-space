import React from "react"
import Navbar from "./navbar"

const Container = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className='w-full max-w-full md:max-w-5xl mx-auto'>{children}</div>
    </>
  )
}

export default Container
