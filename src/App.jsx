import React from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Services from './pages/Services'
import Work from './pages/Work'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Projects from './pages/Projects'
import Skill from './pages/Skill'

import { Route, Routes } from 'react-router-dom'
import Chatbot from './pages/Chatbot'

const App = () => {
  return (
    <div className=" min-h-[100vh] text-white overflow-hidden">
   
      <Navbar/>
     <Chatbot/>
      <Home/>
      <About/>
      <Services />
      {/* <Work/> */}
      <Projects/>
      <Skill/>
      <Contact/>
    <Footer/>
    </div>
  )
}

export default App