import { section } from 'motion/react-client'
import React from 'react'
import HeroText from '../components/HeroText'
import ParallaxBackground from '../components/ParallaxBackground'

const Hero = () => {
  return (
   <section className='flex items-start justify-center md:items-start 
   md:justify-start min-h-screen overflow-hidden'>
    <HeroText/>
  <ParallaxBackground/>
   </section>
  )
}

export default Hero