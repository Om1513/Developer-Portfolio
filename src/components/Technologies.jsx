import { RiReactjsLine } from "react-icons/ri"
import { SiMongodb, SiTailwindcss, SiTypescript, SiFastify, SiGraphql, SiPytorch } from "react-icons/si"
import { BiLogoPostgresql } from "react-icons/bi"
import { FaNodeJs } from "react-icons/fa6"
import { FaDocker, FaPython, FaAws } from "react-icons/fa"
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

const technologies = [
    { Icon: FaPython, duration: 2.5, className: "" },
    { Icon: SiTypescript, duration: 3, className: "text-blue-500" },
    { Icon: RiReactjsLine, duration: 5, className: "text-cyan-400" },
    { Icon: FaNodeJs, duration: 2, className: "text-green-500" },
    { Icon: SiFastify, duration: 3.5, className: "" },
    { Icon: SiGraphql, duration: 4, className: "text-pink-500" },
    { Icon: BiLogoPostgresql, duration: 6, className: "text-sky-700" },
    { Icon: SiMongodb, duration: 4.5, className: "text-green-500" },
    { Icon: FaDocker, duration: 5.5, className: "text-sky-700" },
    { Icon: FaAws, duration: 3.2, className: "text-orange-400" },
    { Icon: SiPytorch, duration: 4.2, className: "text-orange-600" },
    { Icon: SiTailwindcss, duration: 5.2, className: "text-cyan-400" },
]

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
            {technologies.map(({Icon, duration, className}, index)=>(
                <motion.div
                key={index}
                variants={iconVariants(duration)}
                initial='initial'
                animate='animate'
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <Icon className={`text-7xl ${className}`}/>
                </motion.div>
            ))}
        </motion.div>
    </div>
  )
}

export default Technologies
