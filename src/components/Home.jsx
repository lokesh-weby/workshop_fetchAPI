import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <div className='text-center'>
        <h1 className='text-5xl my-5 text-white'>Welcome to Gtech E-Commerce</h1>
        <h2 className='text-3xl text-white'>Choose a category to view products</h2>
      </div>
        <div className='flex justify-center items-center my-5'>

        <Link to="/products/laptops" className='bg-red-500 text-white p-2 m-2 rounded'>Laptops</Link>
        <Link to="/products/smartphones" className='bg-red-500 text-white p-2 m-2 rounded'>Smartphones</Link>
        <Link to="/products/tablets" className='bg-red-500 text-white p-2 m-2 rounded'>Tablets</Link>
        <Link to="/products/mobile-accessories" className='bg-red-500 text-white p-2 m-2 rounded'>Mobile-Accessories</Link>
        {/* <Link to="/products/beauty" className='bg-blue-500 text-white p-2 m-2 rounded'>Beauty</Link> */}
        </div>
       
    
    </div>
  )
}
