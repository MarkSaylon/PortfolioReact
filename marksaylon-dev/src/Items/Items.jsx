import styles from './Items.module.css'
import SkillsList from './Skills/SkillsList';
import profile from './profile.jpg'

function Items(){
    console.log("hello")
    const skillList =[{id:1, name:'HTML', prof: 'Intermediate', desc: 'Markup Language used to place elements.'},
                    {id:2 ,name :'CSS',prof :'Intermediate', desc: 'Used to style and position elements.'},
                    {id:3 ,name :'Figma',prof :'Intermediate', desc: 'Used to prototype and design user experiences.'},
                    {id:4 ,name :'Adobe Illustrator',prof :'Advanced', desc: 'Used to create and modify svg files.'},
                    {id:5 ,name :'Adobe Photoshop',prof :'Advanced', desc:'Used to edit photos.'},
                    {id:6 ,name :'JavaScript',prof :'Intermediate', desc:'Used for the interactivity and functionality of the site.'},
                    {id:7 ,name :'ReactJS',prof :'Beginner', desc:'A commonly used JS library for creating web apps.'},
                    {id:8 ,name :'php',prof :'Learning', desc:'Used for server-side scripting.'},
                    {id:9 ,name :'MySQL',prof :'Learning', desc:'Used for database management.'}];
    
    
    return(
        <div className={styles.container}>
            <div className={styles.imagecontainer}>
                <div className={styles.circle}>
                    <img className={styles.photo} src={profile} alt="" />
                </div>
            </div>
            <section className={styles.section}>
                <h1>About me</h1>
                <p>Back in 2021, I worked as a free lance ghost writer and while I was already studying computer engineering I only really got interested in programming when I got to work with front end developers. I only provided SEO for the sites that they were building but seeing them have fun made me see the near endless possibilities programming can offer<br/><br/>Around 2022, I dabbled in game development using Pygame, which taught me a lot of OOP concepts. Then in 2023, I worked on a college level thesis that involved programming. Neither really had anything to do with UI but they taught me how to think like a programmer. Mid 2023 was when I found my first experience related to web development, I was an UI/UX intern for LEENtech and during my stay there I learned different technologies used to design and deploy front end websites. Now, my main focus is to continuously improve on my current front end skills and learn even more new technologies. <br/><br/>Whenever, I am not on my computer my hobbies mostly include hanging out with friends, random walks, and reading books.</p>
            </section>
            <section className={styles.section}>
                <h1>Skills</h1>
                <SkillsList skillList={skillList}/>
            </section>
            <section className={styles.section}>
                <h1>Projects</h1>
                
            </section>
            <section className={styles.section}>
                <h1>Contact me</h1>
            </section>
        </div>
    )

}

export default Items