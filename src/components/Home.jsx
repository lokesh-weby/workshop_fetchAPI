import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <div className='text-center px-3 w-full'>
        <h1 className='sm:text-5xl text-3xl my-5 text-white'>Welcome to Gtech E-Commerce</h1>
        <h2 className='sm:text-3xl text-xl text-white'>Choose a category to view products</h2>
      </div>
        <div className='flex justify-center items-center my-5 flex-wrap w-full'>
        <Link to="/products/laptops" className='bg-red-500 text-white p-2 m-2 rounded'>Laptops</Link>
        <Link to="/products/smartphones" className='bg-red-500 text-white p-2 m-2 rounded'>Smartphones</Link>
        <Link to="/products/tablets" className='bg-red-500 text-white p-2 m-2 rounded'>Tablets</Link>
        <Link to="/products/mobile-accessories" className='bg-red-500 text-white p-2 m-2 rounded'>Mobile-Accessories</Link>
        <Link to="/products/beauty" className='bg-red-500 text-white p-2 m-2 rounded'>Beauty</Link>
        <Link to="/products/groceries" className='bg-red-500 text-white p-2 m-2 rounded'>Groceries</Link>
        <Link to="/products/mens-shirts" className='bg-red-500 text-white p-2 m-2 rounded'>Mens-shirts</Link>
        <Link to="/products/mens-shoes" className='bg-red-500 text-white p-2 m-2 rounded'>Mens-shoes</Link>
        <Link to="/products/mens-watches" className='bg-red-500 text-white p-2 m-2 rounded'>Mens-watches</Link>
        <Link to="/products/motorcycle" className='bg-red-500 text-white p-2 m-2 rounded'>Motorcycle</Link>
        </div>
       
    
    </div>
  )
}
