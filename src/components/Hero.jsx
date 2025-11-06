import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay for contrast (won't block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/80" />

      <div className="relative z-10 h-full container mx-auto px-6 flex flex-col-reverse gap-8 items-center justify-center md:flex-row">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
            Hi, I’m <span className="text-blue-600">Your Name</span> – Full-Stack & Mobile Developer
          </h1>
          <p className="mt-4 text-gray-700 text-base sm:text-lg">
            I build scalable MERN applications, microservices-based back-ends and cross-platform mobile apps.
          </p>
          <div className="mt-6 flex items-center justify-center md:justify-start gap-3">
            <a
              href="#projects"
              className="inline-flex items-center rounded-md bg-blue-600 px-5 py-2.5 text-white font-medium shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition"
            >
              See My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-md border border-gray-300 px-5 py-2.5 text-gray-800 bg-white/70 backdrop-blur hover:bg-white transition"
            >
              Contact
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center justify-center"
        >
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=500&auto=format&fit=crop"
            alt="Profile"
            className="h-28 w-28 sm:h-32 sm:w-32 rounded-full border-4 border-white shadow-xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
