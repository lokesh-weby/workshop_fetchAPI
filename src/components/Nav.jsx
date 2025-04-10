import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='bg-gray-800 p-4 text-white flex justify-around items-center sticky w-full top-0 z-10'>    
      <Link className='cursor-pointer' to={"/"}>E-Commerce</Link>
      <i class="fa-regular fa-bell"></i>
    
    </nav>
  )
}

export default Nav
