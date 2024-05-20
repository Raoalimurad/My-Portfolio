import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skill from './components/skill'
import ProjectPage from './components/Images'
import Contact from './components/contact'





function page() {
  return (
    <div className='main'>
      <Hero/>
      <About/>
      <Skill/>
      <ProjectPage/>
      <Contact/>
     
    </div>
  )
}

export default page