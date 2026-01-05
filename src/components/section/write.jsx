import React from "react"
import Heading, { Bold } from "../general/heading"

const Write = () => {
  return (
    <section className='mt-24'>
      <Heading>
        <Bold>Writing</Bold> Space
      </Heading>
      <div className='bg-neutral-50 w-full h-[80vh] mt-10 rounded-md ring-2 ring-neutral-200'></div>
    </section>
  )
}

export default Write
