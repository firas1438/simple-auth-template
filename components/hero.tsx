"use client";
import { motion } from "framer-motion";
import Spline3D from "./spline";
import ShinyText from "./shiny-text";
import Particles from './particles';

export default function Hero() {
  return (
    <div className="relative justify-center items-center">
      <section id="hero" className="relative w-full max-w-screen-xl mx-auto px-4 py-24 pb-12  gap-12 md:px-8 flex flex-col justify-center items-center">
        
        {/* particles background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
            <Particles particleColors={['#ffffff', '#ffffff']} particleCount={400} particleSpread={18} speed={0.05} particleBaseSize={50} moveParticlesOnHover={false} alphaParticles={false} disableRotation={false} />
        </div>

        {/* page content */}
        <motion.div className="flex flex-col justify-center items-center space-y-6 w-full max-w-4xl mx-auto text-center px-4 sm:px-0">

          {/* header */}
          <motion.h1  initial={{opacity: 0 }}  animate={{ opacity: 1 }}  transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}  className="pb-2 text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-medium tracking-tighter mx-auto text-pretty bg-gradient-to-b from-[#4ade80] dark:from-white to-foreground dark:to-foreground bg-clip-text text-transparent">
            Building a Smarter Transportation Ecosystem for Communities Worldwide
          </motion.h1>

          {/* description */}
          <motion.div  initial={{ opacity: 0 }}  animate={{ opacity: 1 }}  transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}  className="w-full max-w-2xl text-base sm:text-lg mx-auto text-muted-foreground ">
            <ShinyText text="We're on a mission to solve transportation challenges through intelligent, modern and innovative solutions." disabled={false} speed={3} className='custom-class' />
          </motion.div>
          
          {/* 3d model */}
          <motion.div  initial={{ opacity: 0, y: 0 }}   animate={{ opacity: 1, y: [0, -10, 0] }}   transition={{ opacity: { duration: 0.6, ease: "easeIn" },  y: { duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }}}  className="flex items-center justify-center w-full overflow-hidden relative h-[350px] xs:h-[150]">
            <div className="scale-50 xs:scale-75 sm:scale-80 md:scale-90 lg:scale-100 xl:scale-100 origin-center transition-transform duration-400 ease-in-out">
              <Spline3D />
            </div>
          </motion.div>

        </motion.div>

      </section>

      {/* light gradient */}
      <motion.div  initial={{ opacity: 0 }}  animate={{ opacity: 1 }}  transition={{ duration: 2, delay: 0.5, type: "spring", bounce: 0 }}  className="w-full  h-full absolute -top-48 flex justify-end items-center pointer-events-none">
        <div className="w-3/4 flex justify-center items-center">
          <div className="w-12 h-[600px] bg-light blur-[70px] rounded-3xl max-sm:rotate-[15deg] sm:rotate-[35deg] [will-change:transform]"></div>
        </div>
      </motion.div>

    </div>
  );
}