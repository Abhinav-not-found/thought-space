import React from "react"

const Heading = ({ children }) => {
  return <h1 className='text-6xl text-center tracking-tight'>{children}</h1>
}

export const Bold = ({ children }) => {
  return <span className='font-semibold'>{children}</span>
}

export default Heading
