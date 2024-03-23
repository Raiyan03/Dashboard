import styles from './footer.module.css'
const Footer = () => 
{
    return (
    <div className={styles.container}>
        <span className={styles.rights}>
            &copy; All rights reserved
        </span>
    </div>
    )
}

export default Footer