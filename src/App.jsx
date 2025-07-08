import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/about'
import Projects from './sections/Projects'

const App = () => {
  return (
    <div className='container mx-auto max-w-7xl'>

   <Navbar/>
     <Hero/>
     <About/>
     <Projects/>
       {/* {projects} */}
        {/* {experience} */}
         {/* {footer} */}
    </div>
  )
}

export default App