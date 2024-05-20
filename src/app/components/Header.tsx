'use client'
import React, { useState } from 'react'
import style from "@/app/componentsCss/header.module.css"
import { FaAlignJustify } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx"
import 'animate.css/animate.min.css';



function Header() {
const [isNavOpen,setIsNavOpen] = useState(false)
const toggleNav = ()=>{
  setIsNavOpen(!isNavOpen)
}


  return (
    <div className={style.header}>
      <div className={`${style.logo} animate__animated animate__bounceInDown  `}>
        <h2>Portfolio</h2>
      </div>
      
        <ul className={`${style.navbar} ${isNavOpen ? style.showNavbar : ''}  animate__animated animate__bounceInDown `}>
            <li><a href="#home">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Skill">Skill</a></li>
            <li><a href="#Portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
            
        </ul>
        {isNavOpen ? (
          <RxCross1    className={style.icon}  onClick={toggleNav}/>):(
        <FaAlignJustify   className={style.icon}  onClick={toggleNav}/>)}
    </div>
  )
}

export default Header