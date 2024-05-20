'use client'
import React from 'react'
import style from "@/app/componentsCss/hero.module.css"
import user from "../../../public/user.jpeg"
import Image from 'next/image'
import { FaLinkedin,FaGithub,FaYoutube,FaFacebookF } from "react-icons/fa";
import 'animate.css/animate.min.css';


const Hero = () => {
  const DownloadHandle = ()=>{
    const link = document.createElement('a');
    link.href="/RAOCV.pdf"
    link.download = 'cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return ( 
    <div  className={style.hero} id='home'>
        <div className={` ${style.info} animate__animated animate__backInLeft `}>
             <h3 >Hello It&apos;s Me</h3>
             <h1>Rao Ali Murad</h1>
            <h3>And I'm a <div className={style.typingAnimationcontainer}><span className={style.typingAnimation}>Mern Stack Developer</span></div></h3>

             <p>I'm a web Developer with extensive experience in building dynamic and user-friendly web applications. My expertise lies in utilizing the MERN (MongoDB, Express.js, React.js, Node.js) stack to develop robust and scalable solutions.</p>
             <div className={style.socialIcon}>

             <a href="https://pk.linkedin.com/in/rao-ali-murad-996a77257" target='blank'>
        <FaLinkedin /> 
      </a> 
      <a href="https://github.com/Raoalimurad?tab=repositories" target='blank'>
      <FaGithub />
      </a>
      <a href="https://www.youtube.com/@RaoAliMurad" target='blank'>
       <FaYoutube />
       </a>

        <FaFacebookF />
             </div>
             <button className={style.btn} onClick={DownloadHandle}>Download Cv</button>

        </div>
        <div className={`${style.userImg} animate__animated animate__backInRight`}>
         <Image src={user} alt='user img'/>
        </div>
        </div>
  )
}

export default Hero