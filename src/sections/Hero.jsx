import { section } from 'motion/react-client'
import React from 'react'
import HeroText from '../components/HeroText'
import ParallaxBackground from '../components/ParallaxBackground'
import { OrbitingCircles } from '../components/OrbitCircles'
import { Frameworks } from '../components/Frameworks'


const Hero = () => {
  return (
   <section className="flex flex-col lg:flex-row items-center lg:items-start min-h-[70vw] overflow-hidden">
  {/* On small: image appears *after* HeroText; on large: it moves to the left */}
  <div className="absolute top-80 lg:right-20 order-last lg:order-first sm:mt-[10%] sm:ml-3">
    <img
      src="/src/assets/projects/internet-ie-svgrepo-com (1).svg"
      alt=""
      className="h-[200px] lg:h-[400px]"
    />
  </div>

  {/* HeroText and background */}
  <HeroText />
  <ParallaxBackground />
<Frameworks/>
  {/* Orbiting circles (if you want them always visible) */}
 
</section>
  )
}

export default Hero