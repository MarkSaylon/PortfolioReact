import styles from './ContactMe.module.css'

function ContactMe(){
    return(
        <div className={styles.container}>
            <a href="https://www.linkedin.com/in/mark-vincent-andrei-saylon-782b61248/" className={styles.links}>Linked In</a>
            <a href="https://github.com/MarkSaylon" className={styles.links}>GitHub</a>
            <a href="marksaylon@gmail.com" className={styles.links}>Email</a>
        </div>
    )

}

export default ContactMe