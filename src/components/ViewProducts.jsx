import React, { useEffect, useState } from 'react';

import '../App.css';

import { FetchData } from '../controller/controller';


const ViewProducts = ({category}) => {
    const {Products}= FetchData(category);
    const [query,setQuery]=useState('');

    const filterProducts= Products.filter((product) => product.title.toLowerCase().includes(query))
    
    return (
      <div className='min-h-screen flex flex-col justify-around items-center'>
        <h1 className='text-2xl text-white my-5'>Products</h1>

        <div>
          <input type="text" onChange={(e)=>{setQuery(e.target.value.toLowerCase())}} placeholder='Search..' autoComplete='false'/>
        </div>
        <div className='products flex flex-wrap justify-center items-center gap-5 my-4'>

          {filterProducts.length === 0 && <h1>No Products Found</h1>}

          {filterProducts.map((product) => (
            <div key={product.id} className='product p-5 rounded-lg '>
              <div className='flex justify-center items-start  imageContainer'>
              <img src={product.images[1]||product.images[0]} loading='lazy' alt={product.title} title={product.title} style={{height:150,width:130}} ></img>
              <span className='rating'>
              <i class="fa-regular fa-star mr-1"></i> {product.rating}
              </span>
              </div>
              <div>

              <h2 className='text-center font-bold text-2xl'>{product.title}</h2>
              {/* <p>{product.description.length>20?product.description.substring(0,40):product.description}</p> */}
              <p className='text-center font-semibold'>Stocks:{product.stock}</p>
              <p className='text-center'>Price: ${product.price}</p>
              </div>

              <div className='flex justify-center items-center gap-2 w-full '>
                <button className='text-white text-sm  bg-blue-500 hover:bg-blue-700 rounded-lg p-2 '>
                  <i class="fa-solid fa-cart-shopping"></i> Add to Cart
                </button>
                <button className='text-white text-sm  bg-red-500 hover:bg-red-700 rounded-lg p-2'>
                  <i class="fa-solid fa-heart"></i> Wishlist
                </button>
              </div>
            </div>
            
          ))}
        </div>
        
      </div>
    )
}

export default ViewProducts
