import React from 'react'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Main from './Component/Main/Main'
import Footer from './Component/Footer/Footer'
function App() {
 

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Main></Main>
      <h1 className='font-bold text-2xl text-center mt-10'>Customer Support Zone</h1>
      <Footer></Footer>
    </>
  )
}

export default App
