import React from 'react';
import coding from "../../assets/logo.png";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <div>
      <img src = {coding} alt="" className={styles.aboutImg}/>
      </div>
      <div className={styles.aboutHead}>
        <h1 className={styles.aboutH1}>About Software Developer <div className={styles.aboutSpan}>TARIK CEYHAN</div></h1>
      </div>
      <div className={styles.aboutText}>
        <h3>Hi, I'am Tarık</h3>
        <h3>I’m Full-Stack Developer</h3>
        <h3>I know JS,ReactJS, Django, SQL, Python</h3>
        <h3><a className={styles.aboutEmail} href="mailto:55tc155@gmail.com">Send E-mail</a> : 55tc155@gmail.com</h3>
      </div>
    </div>
  )
}

export default About