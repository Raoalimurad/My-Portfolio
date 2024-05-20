"use client"
import React, { useState } from 'react'
import style from "@/app/componentsCss/about.module.css"
import user from "../../../public/user.jpeg"
import Image from 'next/image'
import 'animate.css/animate.min.css';

const About = () => {
    const [showMore,setShowMore] =  useState(false)
  const handleToggle = ()=>{
    setShowMore(!showMore)
  }
  return (
    <div className={style.aboutPage} id='About'>
        <h1 className={style.heading}>About <span>Me</span> </h1>
        <div  className={style.about}>
        <div className={`${style.userImg} animate__animated animate__bounceInDown`}>
         <Image src={user} alt='user img'/>
        </div>


          <div className={`${style.aboutContent} animate__animated  animate__bounceInUp`}>
          <h3>Mern Stack Developer</h3>
          <p>I'm a web Developer with extensive experience in building dynamic and user-friendly web applications. My expertise lies in utilizing the MERN (MongoDB, Express.js, React.js, Node.js) stack to develop robust and scalable solutions.As a MERN Stack Developer, I specialize in designing and implementing full-stack applications, from backend database architecture to frontend user interfaces.{showMore && (<span> I am proficient in leveraging MongoDB for flexible and efficient data storage, Express.js for creating RESTful APIs and middleware, React.js for building interactive and responsive user interfaces, and Node.js for server-side development.</span>)}</p>
          <button className={style.btn} onClick={handleToggle}>
          {showMore ? 'Read Less' : 'Read More'}
          </button>
          </div>
        
        </div>
    </div>
  )
}

export default About
