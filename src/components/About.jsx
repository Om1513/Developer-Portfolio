import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import nyu from '../assets/nyu.jpg';
import { ABOUT_TEXT } from '../constants';

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1
        className='my-20 text-center text-4xl'
        initial={{ scale: 1, opacity: 1 }}
        whileInView={{
          scale: [1, 2, 1], // Zooms in and then back to normal size
          opacity: [1, 1, 1], // Keeps opacity constant
          transition: {
            duration: 1.5,
            times: [0, 0.5, 1],
            ease: "easeInOut",
          },
        }}
      >
        About {""}
        <motion.span
          className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
          initial={{ scale: 1, opacity: 1 }}
          whileInView={{
            scale: [1, 2, 1],
            opacity: [1, 1, 1],
            transition: {
              duration: 1.5,
              times: [0, 0.5, 1],
              ease: "easeInOut",
            },
          }}
          
        >
          Me
        </motion.span>
      </motion.h1>

      <div className='flex flex-wrap'>
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className='w-full lg:w-1/2 lg:p-8'
        >
          <div className='flex items-center justify-center'>
            <img className='rounded-2xl' src={nyu} alt='about' />
          </div>
        </motion.div>
        
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }} 
          className='w-full lg:w-1/2'
        >
          <div className='flex justify-center lg:justify-start'>
            <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
