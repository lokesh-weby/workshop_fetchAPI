import './App.css';
import { Route,Routes, useLocation } from 'react-router-dom'
import React from 'react'
import ViewProducts from './components/ViewProducts'
import Home from './components/Home'
import Nav from './components/Nav'

const App = () => {
  const location=useLocation();
 return(
  <>

  <Nav/>
  <Routes location={location} key={location.pathname}>
    <Route path='/' element={<Home/>}/>
    <Route path='/products/laptops' element={<ViewProducts category="laptops" />}/>
    <Route path='/products/smartphones' element={<ViewProducts category="smartphones"/>}/>
    <Route path='/products/mobile-accessories' element={<ViewProducts category="mobile-accessories"/>}/>
    <Route path='/products/tablets' element={<ViewProducts category="tablets"/>}/>
    <Route path='/products/beauty' element={<ViewProducts category="beauty"/>}/>
    <Route path='/products/furniture' element={<ViewProducts category="furniture"/>}/>
    <Route path='/products/groceries' element={<ViewProducts category="groceries"/>}/>
    <Route path='/products/mens-shirts' element={<ViewProducts category="mens-shirts"/>}/>
    <Route path='/products/mens-shoes' element={<ViewProducts category="mens-shoes"/>}/>
    <Route path='/products/mens-watches' element={<ViewProducts category="mens-watches"/>}/>
    <Route path='/products/motorcycle' element={<ViewProducts category="motorcycle"/>}/>
  </Routes>
 
  </>
 )
}

export default App
