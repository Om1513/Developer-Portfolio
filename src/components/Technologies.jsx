import { RiReactjsLine } from "react-icons/ri"
import { TbBrandNextjs } from "react-icons/tb"
import { SiMongodb } from "react-icons/si"
import { BiLogoPostgresql } from "react-icons/bi"
import { SiTailwindcss } from "react-icons/si"
import { FaNodeJs } from "react-icons/fa6"
import { FaDocker } from "react-icons/fa"
import { FaPython } from "react-icons/fa"
import { TbSql } from "react-icons/tb"
import {motion } from 'framer-motion'

import React from 'react'

const iconVariants = (duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"
        }
    }
})

const Technologies = () => {
  return (
    <div className=" pb-24 ">
        <motion.h2
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}} 
        transition={{duration:1}}
        className="my-20 text-center text-4xl">Technologies</motion.h2>
        <motion.div 
        whileInView={{opacity:1,x:0}} 
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconVariants(2.5)}
            initial='initial'
            animate='animate' 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPython className="text-7xl "/>
            </motion.div>
            <motion.div variants={iconVariants(3)}
            initial='initial'
            animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div variants={iconVariants(5)}
            initial='initial'
            animate='animate'  className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandNextjs className="text-7xl "/>
            </motion.div>
            <motion.div variants={iconVariants(2)}
            initial='initial'
            animate='animate'  className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-7xl text-green-500"/>
            </motion.div>
            <motion.div variants={iconVariants(3.5)}
            initial='initial'
            animate='animate'  className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoPostgresql className="text-7xl text-sky-700"/>
            </motion.div>

            <motion.div variants={iconVariants(4)}
            initial='initial'
            animate='animate'  className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiTailwindcss className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div variants={iconVariants(6)}
            initial='initial'
            animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-7xl text-green-500"/>
            </motion.div>
            <motion.div variants={iconVariants(4.5)}
            initial='initial'
            animate='animate'  className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaDocker className="text-7xl text-sky-700"/>
            </motion.div>
            <motion.div variants={iconVariants(5.5)}
            initial='initial'
            animate='animate'  className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbSql className="text-7xl"/>
            </motion.div>
            


        </motion.div>
    </div>
  )
}

export default Technologies