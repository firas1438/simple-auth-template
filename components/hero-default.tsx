"use client";
/* eslint-disable @next/next/no-img-element */
import { Button } from "@heroui/button";
import { motion } from "framer-motion";
import { useDisclosure } from "@heroui/use-disclosure";
import { Link } from "@heroui/link";
import Particles from "./particles";

export default function HeroDefault() {
  return (
    <div className="relative justify-center items-center">
      <section className="max-w-screen-xl mx-auto px-4 py-28 gap-12 md:px-8 flex flex-col justify-center items-center">
        <div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
</div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0 }}
          className="flex flex-col justify-center items-center space-y-5 max-w-4xl mx-auto text-center"
        >
          <span className="w-fit h-full text-sm bg-card px-3 py-1.5 border border-border rounded-full">
            Template
          </span>
          <h1 className="pb-1 text-4xl font-medium tracking-tighter mx-auto md:text-6xl text-pretty bg-gradient-to-b from-green-800 dark:from-green-100 to-foreground dark:to-foreground bg-clip-text text-transparent">
            Beautiful Landing Page Template
          </h1>
          <p className="max-w-2xl text-lg mx-auto text-muted-foreground text-balance">
            Create your next landing page using this free template.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0"
          >
            <Button color="primary" variant="shadow">
              Contact Us
            </Button>

          </motion.div>
        </motion.div>
      </section>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5, type: "spring", bounce: 0 }}
        className="w-full h-full absolute -top-32 flex justify-end items-center pointer-events-none "
      >
        <div className="w-3/4 flex justify-center items-center">
          <div className="w-12 h-[600px] bg-light blur-[70px] rounded-3xl max-sm:rotate-[15deg] sm:rotate-[35deg] [will-change:transform]"></div>
        </div>
      </motion.div>
    </div>
  );
}
