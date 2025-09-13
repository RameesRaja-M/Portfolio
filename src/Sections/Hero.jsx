import React from 'react'
import PROFILE_PIC from "../assets/images/profile-pic.png"
import icon1 from "../assets/images/React logo.png"
import icon2 from "../assets/images/node logo.png"
import icon3 from "../assets/images/express logo.png"
import icon4 from "../assets/images/mongo logo.png"

import { motion } from 'framer-motion'



const Hero = () => {
  return (
    <section id='hero' className='container mx-auto px-8 md:px-32 '>
      <div className='flex flex-col lg:flex-row gap-14 items-center justify-between mt-[80px]'>

        <motion.div

          initial={{ opacity: 0, translateX: "-100%" }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 2 }}

          className='order-2 lg:order-1 text-center lg:text-left mt-16 lg:mt-0'>
          <h3 className='text-xl lg:text-2xl font-medium text-black'>Hi👋, I'am Ramees Raja</h3>
          <h1
            className='w-full lg:w-[480px] text-4xl lg:text-5xl font-extrabold leading-[50px] lg:leading-[60px] 
                       mt-3 bg-gradient-primary bg-clip-text text-transparent'>
            Mern Stack Web Developer - Junior
          </h1>
          <p className='w-full lg:w-[500px] text-sm lg:text-base mt-4'>Full-stack MERN Developer with 2 months of industry internship experience. Strong in JavaScript, React.js, Node.js, Express.js, and MongoDB with practical knowledge of APIs, authentication, and database management. Highly motivated fresher ready to deliver value and adapt quickly in a team-driven environment.</p>
          <div className='flex justify-center lg:justify-start gap-4 md:gap-8 mt-6'>
            <button className='flex-1 md:flex-none action-btn-outline btn-scale-anim'><a
             href={"https://github.com/RameesRaja-M"}
             target="_blank"
             rel="noopener noreferrer">View My Work</a></button>
            <a
              href={"https://drive.google.com/file/d/1bWIrcFEELxn3r8YR8KgqXwO2Z2lp2qrS/view?usp=drive_link"}
              target="_blank"
              rel="noopener noreferrer"
             className='flex-1 md:flex-none action-btn btn-scale-anim flex justify-center items-center'
            >
              View Resume
            </a>
          </div>
        </motion.div>

        <motion.div

          initial={{ opacity: 0, translateX: "+100%" }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 2 }}

          className='w-[300px] md:w-[370px] h-[350px] md:h-[428px] bg-orange-100/50 rounded-3xl relative order-1 lg:order-2'>
          <img src={PROFILE_PIC} alt="Profile Pic" className='profile-pic rounded-full' />

          <img
            src={icon1}
            alt="Icon1 "
            className='icon-img -left-8 md:-left-12 bottom-[88px] rotate-[1.75deg] rounded-md' />

          <img
            src={icon2}
            alt="Icon2 "
            className='icon-img left-4 md:left-10 bottom-6 md:bottom-2 rotate-[2.75deg] rounded-md ' />

          <img
            src={icon3}
            alt="Icon3 "
            className='icon-img left-[110px] md:left-[150px] -bottom-4 rotate-[3.75deg] rounded-md' />

          <img
            src={icon4}
            alt="Icon4 "
            className='icon-img left-[210px] md:left-[255px] -bottom-2 md:-bottom-2 rotate-[4.75deg] rounded-md ' />

        </motion.div>

      </div>
    </section>
  )
}


export default Hero
