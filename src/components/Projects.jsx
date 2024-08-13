import React from 'react';
import { PROJECTS } from '../constants';
import { motion, px } from 'framer-motion';

const Projects = () => {
  return (
    <div className='pb-4'>
      <motion.h2 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1}}
        className='my-20 text-center text-4xl'
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <motion.div 
              whileInView={{opacity:1, x:0}}
              initial={{opacity:0, x:-100}}
              transition={{duration:1}}
              className='w-full lg:w-1/4'
            >
              <img 
                src={project.image} 
                alt={project.title} 
                sizes={'258px'}

                className='mb-6 rounded'
              />
              <div className='flex justify-center mt-4 space-x-4 mb-4'>
                {project.live && (
                  <a 
                    href={project.live} 
                    target='_blank' 
                    rel='noopener noreferrer'
                    className='inline-block bg-neutral-900 text-purple-300 px-2 py-1 text-sm font-medium rounded hover:bg-neutral-800'
                  >
                    Go Live
                  </a>
                )}
                {project.sourceCode && (
                  <a 
                    href={project.sourceCode} 
                    target='_blank' 
                    rel='noopener noreferrer'
                    className='inline-block bg-neutral-900 text-purple-300 px-2 py-1 text-sm font-medium rounded hover:bg-neutral-800'
                  >
                    Source Code
                  </a>
                )}
              </div>
            </motion.div>
            <motion.div
              whileInView={{opacity:1, x:0}}
              initial={{opacity:0, x:100}}
              transition={{duration:1}} 
              className='pl-6 w-full max-w-xl lg:w-3/4'
            >
              <h6 className='mb-2 font-semibold text-purple-300 lg:text-lg'>{project.title}</h6>
              <p className='mb-4 text-neutral-400'>{project.description}</p>
              {project.technologies.map((technology, index) => (
                <span key={index} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-300'>
                  {technology}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
