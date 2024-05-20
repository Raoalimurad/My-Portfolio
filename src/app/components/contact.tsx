import React from 'react'
import style from "@/app/componentsCss/contact.module.css"

const Contact = () => {

    const cols: number = parseInt('35', 10);
  return (
    <div className={style.contact} id='contact'>
       <div className={style.heading}>
          <h2><span>CONTACT</span> ME</h2>
         </div>
      <div className={style.contactdetails}>
            <h2>Get in Touch</h2>
        <form action="https://formspree.io/f/xvoebbrr" method='POST'>
            <div>

            <input type="text" placeholder='Your name' name="name"  required/>
            </div>
            <div>

            <input type="email" placeholder='Your Email' name="email"   required/>
            </div>
            <div>
              <input type="text" placeholder='Your message'     name="message" required />
 
    </div>
        <div>
          <button className={style.btn} type='submit'>Submit</button>
        </div>
        </form>
        </div>
    </div>
  )
}

export default Contact