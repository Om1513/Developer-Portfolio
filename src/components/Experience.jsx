import React from 'react'
import { EXPERIENCES } from '../constants'
import { motion } from 'framer-motion'

const Experience = () => {
  return (
    <div className='pb-4'>
        
        <motion.h1 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}
        className='my-20 text-center text-4xl'>Experience</motion.h1>
        <div>
            {EXPERIENCES.map((experience,index)=>(
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div 
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:-100}}
                    transition={{duration:1}}
                    className='w-full lg:w-1/4'>
                        <p className='mb-2 text-purple-300 text-lg'>{experience.year}</p>
                    </motion.div>
                    <motion.div 
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:100}}
                    transition={{duration:1}}
                    className='w-full max-w-xl lg:w-3/4 lg:text-lg'>
                        <h6 className='mb-1 font-semibold'>{experience.role}{experience.type && ` (${experience.type})`} -<span className='text-purple-300'> {experience.company}</span></h6>
                        {experience.location && (
                            <p className='mb-3 text-sm text-neutral-500'>{experience.location}</p>
                        )}
                        <ul className='mb-4 list-disc space-y-2 pl-5 marker:text-purple-300'>
                            {experience.highlights.map((highlight,index)=>(
                                <li key={index} className='text-neutral-400'>
                                    <span className='font-medium text-neutral-200'>{highlight.label}:</span> {highlight.text}
                                </li>
                            ))}
                        </ul>
                        {experience.technologies.map((technology,index)=>(
                            <span key={index} className=' mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-300'>{technology}</span>
                        ))}
                    </motion.div>
                </div>
            ))}
        </div>
    </div>

  )
}

export default Experience