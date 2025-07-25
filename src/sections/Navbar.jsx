import React, { useState } from 'react'
import { motion } from 'motion/react';


function Navigation(){
    return <ul className='nav-ul'>
        <li className='nav-li'>
            <a to="/home">Home</a>
        </li>
         <li className='nav-li'>
            <a href="About">About</a>
        </li>
         <li className='nav-li'>
            <a href="Work">Work</a>
        </li>
         <li className='nav-li'>
            <a href="Contact">Contact</a>
        </li>
    </ul>
}


const Navbar = () => {
   const[isOpen, setIsOpen] =useState(false);

  return (
    <div className='fixed inset-x-0 z-20 backdrop-blur-lg bg-primary/40'>
        <div className='mx-auto c-space max-w-7xl'>
<div className='flex items-center justify-between py-2 sm:py-0'>
    <a className='text-xl font-bold transition-colors
     text-neutral-400 hover:text-white'>ravikiarn</a>
     <button onClick={()=>{
        setIsOpen(!isOpen)
     }} className='flex cursor-pointer text-neutral-400
      hover:text-white focus:outline-none sm:hidden'>
        <img src={isOpen?"src/assets/close.svg":"src/assets/menu.svg"} alt="toggle"className='w-6 h-6'/>
     </button>
     <nav className='hidden sm:flex'>
       < Navigation/>
     </nav>
</div>
</div>
{isOpen&&(<motion.div className='block overflow-hidden text-center sm:hidden'>
<nav className='pb-5' initial={{opacity:0,x:-10}} 
animate={{opacity:1,x:0}}
style={{maxHeight:"100vh"}}
transition={{duration:1}}>
    <Navigation/>
</nav></motion.div>)}
    </div>
  )
}

export default Navbar