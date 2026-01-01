import React from 'react'
import { ModeToggle } from '../ui/mode-toggle'

const Navbar = () => {
  return (
    <header className='max-w-5xl mx-auto flex justify-between'>
      <p>Navbar</p>
      <ModeToggle/>
    </header>
  )
}

export default Navbar
