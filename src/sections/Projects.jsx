import React, { useState } from 'react'
import { myProjects } from '../constants'
import Project from '../components/Project'
import { motion, useMotionValue, useSpring } from 'motion/react'


const Projects = () => {
const x= useMotionValue(0);
const y= useMotionValue(0);
const springX=useSpring(x,{damping:10, stiffness:50});
const springY=useSpring(y,{damping:10, stiffness:50});
const handleMouseMove=(e)=>{
  x.set(e.clientX + 20);
  y.set(e.clientY + 20);
}
const [preview, setPreview]=useState(null);

  return (
    <section onMouseMove={handleMouseMove} className='relative c-space section-spacing'>
      <h2 className='text-heading'>My Selected Projects</h2>

      {/* Gradient Divider */}
      <div className='bg-gradient-to-r from-transparent
       via-neutral-700
       to-transparent mt-12 h-[1px] w-full' />

      {/* Projects List */}
    
        {myProjects.map((project) => (
          <Project key={project.id} {...project} setPreview={setPreview}/>
        ))}
       {preview &&( <motion.img className='fixed top-0 left-0 z-50 object-cover h-56 rounded-lgshadow-lg
        pointer-events-none w-80'
        style={{x:springX, y:springY}}
        src={preview}/>)}
      
    </section>
  )
}

export default Projects
