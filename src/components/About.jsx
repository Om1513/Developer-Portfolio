import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import Slideshow from './Slideshow'; // Import Slideshow component
import { ABOUT_TEXT } from '../constants';

const About = () => {
  return (
    <div className='pb-4'>
      <motion.h1
        className='my-20 text-center text-4xl'
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
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
          transition={{ duration: 1 }}
          className='w-full lg:w-1/2 lg:p-8'
        >
          <div className='relative w-full h-96'>
            <Slideshow />
          </div>
        </motion.div>
        
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }} 
          className='w-full lg:w-1/2'
        >
          <div className='flex justify-center lg:justify-start'>
            <p className='my-2 max-w-xl py-6 lg:text-lg'>
              Hi, I'm Om Singhan, a passionate coder currently pursuing my Master's Degree in Computer Engineering at <span className='text-purple-300'>New York University</span>. 
              My academic journey is driven by a deep interest in <span className='text-purple-300'>Machine Learning, Algorithms and Artificial Intelligence</span>.
              Beyond the classroom, I believe in maintaining a balanced and active lifestyle. Whether I'm on the soccer field with friends, 
              showcasing my moves on the NYU dance team, or strumming my guitar (with a merit degree from the London School of Music to my name), 
              I'm always seeking new ways to engage both mind and body.
              If I had to describe myself in three phrases, they'd be: <span className='text-purple-300'>passionate coder, music lover, and health enthusiast</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
