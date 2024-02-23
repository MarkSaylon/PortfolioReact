import styles from './SideBar.module.css'
import github from './github.svg'
import linkedin from './linkedin.svg'
import React, { useEffect, useState } from 'react';


function SideBar(){
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);


    return(
        <>
            <div className={isScrolled ? styles.container : styles.containerStart}>
                <div className={isScrolled ? styles.introduction : styles.introBS}>
                    <h1 className={isScrolled ? styles.name : styles.nameStart}>Mark Saylon</h1>
                    <h4 className={isScrolled ? styles.desc : styles.descStart}>Front End Developer | UI Designer</h4>
                    <p className={isScrolled ? '' : styles.beforeScroll}>I enjoy building interactive and beautiful websites.</p> 
                    <div  className={isScrolled ? styles.contactContainer : styles.beforeScroll}>
                        <button className={styles.contactButton}>Contact Me</button>
                        <button className={styles.resumeButton}>Resume</button>
                    </div>
                    <ul className={isScrolled ? styles.navButtons : styles.beforeScroll}>
                        <li><div className={styles.bullet}/>About Me</li>
                        <li><div className={styles.bullet}/>Skills</li>
                        <li><div className={styles.bullet}/>Projects</li>
                        <li><div className={styles.bullet}/>Contact Me</li>
                    </ul>
                </div>    
            </div>
        </>
    )
}

export default SideBar