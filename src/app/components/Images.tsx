"use client"

// ProjectPage.js - Page component to display projects and filter buttons
import React, { useState } from 'react';
import projects from './portfolioImg';
import style from "@/app/componentsCss/portfolio.module.css"
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import 'animate.css/animate.min.css';

const ProjectPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [showAllProjects, setShowAllProjects] = useState(false);
  
  const handleCategoryClick = (category:any) => {
    setSelectedCategory(category);
  };

  const filteredProjects = selectedCategory === 'ALL' ? 
    projects : 
    projects.filter(project => project.tags.includes(selectedCategory));
    const projectsToShow = showAllProjects ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <div>
       <div className={style.main} id='Portfolio'>
        <h2>My <span>Projects</span></h2>
     
       </div>

      <div className={`${style.btn} animate__animated animate__pulse `}>
        <button onClick={() => handleCategoryClick('ALL')}>All</button>
        <button onClick={() => handleCategoryClick('HTML')}>HTML CSS</button>
        <button onClick={() => handleCategoryClick('JavaScript')}>JavaScript</button>
        <button onClick={() => handleCategoryClick('Next.js')}>Next.js</button>
        <button onClick={() => handleCategoryClick('TypeScript')}>TypeScript</button>
      </div>
      <div className={`${style.alldata} animate__animated animate__backInUp`}>
        {projectsToShow.map((project, index) => (
          <div key={index} className={style.display}>
            <img src={project.image} alt="image not found" />
            <div className={style.btndiv}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
            <button className={style.btn1}> Visit <span><FaExternalLinkAlt /></span> </button>
            </a>
            <a href="https://github.com/raoalimurad" target="_blank" rel="noopener noreferrer">
  <button className={style.btn1}>
  Repo link <span><FaGithub /></span>
  </button>
</a>


            </div>
          </div>
          
        ))}


      </div>
      <div className={style.disbtn}>
     
      {!showAllProjects && filteredProjects.length > 3 && (
  <button onClick={() => setShowAllProjects(true)} className={style.btn2}>
    Show More ...
  </button>
)}
{showAllProjects && (
  <button onClick={() => setShowAllProjects(false)} className={style.btn2}>
    Show Less..
  </button>
)}
 </div>

    </div>
  );
};

export default ProjectPage;
