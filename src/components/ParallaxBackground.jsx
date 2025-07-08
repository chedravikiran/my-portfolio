import React from 'react'

const ParallaxBackground = () => {
  return (
    <section className='absolute inset-0 bg-black/40'>
        <div className='relative h-screen overflow-y-hidden'>
    {/* background image */}
    <div className="absolute inset-0 w-full h-screen -z-50"
    style={{
        backgroundImage:"url('/src/assets/backgroundimg.jpeg')",
        backgroundPosition:"bottom",
        backgroundSize:"cover",
    }}/>
    
     </div>

       
        </section>
  )
}

export default ParallaxBackground