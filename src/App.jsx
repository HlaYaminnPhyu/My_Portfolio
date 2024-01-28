import React from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Services from './pages/Services'
import Work from './pages/Work'



// [#344c36] [#faad1b] #dbd2c1 #f6f1e3 #040707 #f1603c #fdae16 #f6efe1  #fdae16 #000000
// https://preview.themeforest.net/item/unded-creative-agency-and-portfolio-react-template/full_screen_preview/49841815?_ga=2.126775822.2070452220.1706285728

const App = () => {
  return (
    <div className=' min-h-full text-white'>
    
      <Navbar/>
      {/* <Home/> */}
      {/* <Services /> */}
      <Work/>
      
      
    
    </div>
  )
}

export default App