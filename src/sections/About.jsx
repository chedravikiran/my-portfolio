import { section } from "motion/react-client"
import Card from "../components/Card"
import { useRef } from "react"
import { Globe } from "../components/globe"
import CopyEmailButton from "../components/CopyEmailButton"
import{ Frameworks }from "../components/Frameworks"


const About = () => {
   const grid2container= useRef();
  return (
  <section className="c-space section-spacing">
    <h2 className="text-heading">About Me</h2>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
            <img src="/src/assets/coding-pov.png" alt="" 
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale[3]
            md:left-50 md:inset-y-10 lg:scale[2.5]"/>
            <div className="z-10">
                <p className="head-text">Hi i'm Ravikiran Chede</p>
                <p className="sub-text">
                     Throughout the past year, I’ve honed my
                      frontend development skills to build dynamic,
                      user-friendly software and responsive websites.
                </p>
            </div>
            <div className="absolute inset-x-0 pointer-events-none 
            -bottom-4 h-1/2 sm:h-1/3 bg-gradient-t from-indigo"/>
        </div>
        {/* grid 2 */}
        <div className="grid-default-color grid-2">
            <div ref={grid2container} className="flex items-center justify-center w-full h-full">
                <p className="flex items-end text-5xl text-gray-500">
                    CODE IS CRAFT
                </p>
                <Card style={{rotate:"25deg", top:"30%", right:"10%"}} 
                text="GRASP" containerRef={grid2container}/>
                <Card  style={{rotate:"-30deg", top:"60%", left:"45%"}} 
                containerRef={grid2container} text="SOLID"/>
                <Card  style={{rotate:"80deg", bottom:"30%", left:"20%"}}
                containerRef={grid2container} text="Design Patterns"/>
                <Card  style={{rotate:"-45deg", top:"60%", left:"0%"}}
                containerRef={grid2container}  text="Design Principles"/>
                <Card  style={{rotate:"20deg", top:"10%", left:"0%"}} 
                containerRef={grid2container}text="SRP"/>

            </div>
        </div>
        {/* grid 3 */}
       <div className="grid-black-color grid-3">
        <div className="z-10 w-[50%]">
            <p className="head-text">Time Zone</p>
            <p className="sub-text">i,m based in india, and open to remote work 
                worldwide
            </p>
        </div>
        <figure className="absolute left-[30%] top-[10%]">
            <Globe/>
        </figure>
       </div>
       {/* grid 4 */}
       <div className="grid-special-color grid-4">
        <div className="flex flex-col items-center justify-center
        gap-4 size-full">
            <p className="text-center head-text">
                Dp you want to start a Project together?
            </p>
            <CopyEmailButton/>
        </div>
       </div>
       {/* grid 5 */}
       <div className="grid-default-color grid-5">
        <div className="z-10 w-[50%]">
            <p className="head-text">Teck Stack</p>
            <p className="sub-text">I Specialize in a variety of languages 
                frameworks ,and tools that allow me to 
                build robust and scalabel websites
            </p>
        </div>
        <div className="absolute inset-y-0 md:inset-y-9 w-full
        h-full start-[50%] md:scale-125">
            <Frameworks/>
        </div>
       </div>
    </div>
  </section>
  )
}

export default About