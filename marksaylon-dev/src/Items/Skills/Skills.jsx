import styles from './Skills.module.css'

function Skills({skillName, prof, desc}){


    return(

        <div className={styles.container}>
            <h1>{skillName}</h1>
            <h4>{prof}</h4>
            <p>{desc}</p>
        </div>
    )

}

export default Skills