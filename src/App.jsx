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



// [#344c36] [#faad1b] #dbd2c1 #f6f1e3 #040707 #f1603c #fdae16 #f6efe1  #fdae16 #000000
// https://preview.themeforest.net/item/unded-creative-agency-and-portfolio-react-template/full_screen_preview/49841815?_ga=2.126775822.2070452220.1706285728

// https://blog.hubspot.com/website/css-animation-examples
// https://css-loaders.com/

const App = () => {
  return (
    <div className=" min-h-[100vh] text-white">
   
      <Navbar/>
      <Home/>
      <About/>
      
      <Routes>
      <Route path="/projects" element={<Projects />}>View</Route>;
      </Routes>
  

      
      <Services />
      <Work/>
      <Skill/>
      <Contact/>
      {/* <Projects/> */}
      
    <Footer/>
    </div>
  )
}

export default App