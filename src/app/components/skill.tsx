import React from 'react'
import style from "@/app/componentsCss/skill.module.css"
import { FaHtml5, FaCss3, FaReact, FaNode } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiMongodb, SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa6";
import 'animate.css/animate.min.css';

const Skill = () => {
  return (
    <div className={style.skill} id='Skill'>
      <h1>My <span>Skills</span> </h1>
      <div className={style.skillContent}>

        <div className={`${style.technicalSkill} animate__animated animate__backInLeft `} >
          <h2 className={style.heading}>Technical Skill</h2>
          <div className={style.technicalSkilldiv}>
            <div>
              <div className={style.progessBar}>
                <div className={style.icons}>
                  <FaHtml5 className={style.tag1} />
                  <p>HTML</p>
                </div>
                <progress value='95' max='100'>95%</progress>
              </div>

              <div className={style.progessBar}>
                <div className={style.icons}>
                  <FaCss3 className={style.tag2} />
                  <p>Css</p>
                </div>
                <progress value='96' max='100'>96%</progress>
              </div>

              <div className={style.progessBar}>
                <div className={style.icons}>
                  <TbBrandJavascript className={style.tag3} />
                  <p>Javascript</p>
                </div>
                <progress value='80' max='100'>80%</progress>
              </div>

              <div className={style.progessBar}>
                <div className={style.icons}>
                  <FaReact className={style.tag4} />
                  <p>React</p>
                </div>
                <progress value='60' max='100'>60%</progress>
              </div>


            </div>

            <div>

              <div className={style.progessBar}>
                <div className={style.icons}>
                  <FaNode className={style.tag5} />
                  <p>Node.js</p>
                </div>
                <progress value='80' max='100'>80%</progress>
              </div>
              <div className={style.progessBar}>
                <div className={style.icons}>
                  <SiMongodb className={style.tag6} />
                  <p>Mongodb</p>
                </div>
                <progress value='85' max='100'>85%</progress>
              </div>
              <div className={style.progessBar}>
                <div className={style.icons}>
                  <SiTypescript className={style.tag7} />
                  <p>Typescript</p>
                </div>
                <progress value='70' max='100'>70%</progress>
              </div>
              <div className={style.progessBar}>
                <div className={style.icons}>
                  <FaPython className={style.tag8} />
                  <p>Python</p>
                </div>
                <progress value='60' max='100'>70%</progress>
              </div>
            </div>
          </div>
        </div>


        <div className={`${style.ProfessionalSkill}  animate__animated animate__bounceInRight`}>
          <h2 >Professional Skill</h2>
      
          <div className={style.row}>
  <div className={style.col}>
    <div className={style.skill}>
      <div className={style.content}>
        <span>90%</span>
      </div>
    </div>
    <h3>Team work</h3>
  </div>
  <div className={style.col}>
    <div className={style.skill}>
      <div className={style.content}>
        <span>80%</span>
      </div>
    </div>
    <h3>Problem Solving</h3>
  </div>
  <div className={style.col}>
    <div className={style.skill}>
      <div className={style.content}>
        <span>70%</span>
      </div>
    </div>
    <h3>Creativity</h3>
  </div>
  <div className={style.col}>
    <div className={style.skill}>
      <div className={style.content}>
        <span>85%</span>
      </div>
    </div>
    <h3>Communication</h3>
  </div>
</div>




        </div>
      </div>
    </div>
  )
}

export default Skill