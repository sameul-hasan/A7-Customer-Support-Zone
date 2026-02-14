import React from 'react'
import { Suspense } from 'react';
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Main from './Component/Main/Main'
import Footer from './Component/Footer/Footer'


function App() {
  
 
  return (
    <div className='bg-gray-100 min-h-screen'>
      <Navbar></Navbar>
      <Hero></Hero>
      <Main></Main>
      <Footer></Footer>
    </div>
    
  )
}

export default App
