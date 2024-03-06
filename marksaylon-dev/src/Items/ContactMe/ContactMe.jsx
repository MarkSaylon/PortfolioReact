import styles from './ContactMe.module.css'

function ContactMe(){
    return(
        <div className={styles.container}>
            <a href="https://www.linkedin.com/in/mark-vincent-andrei-saylon-782b61248/" target='blank' className={styles.links}>Linked In</a>
            <a href="https://github.com/MarkSaylon" target='blank' className={styles.links}>GitHub</a>
            <a  href={`mailto:marksaylon@gmail.com?subject=Inquiry from Your Website`} target='blank' className={styles.links}>Email me: marksaylon@gmail.com</a>
        </div>
    )

}

export default ContactMe