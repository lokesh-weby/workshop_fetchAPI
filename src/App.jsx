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
  </Routes>
 
  </>
 )
}

export default App
