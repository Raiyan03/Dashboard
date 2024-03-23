import styles from './pagination.module.css';

const Pagination = () => {
    return (
        <div className={styles.lowerBar}>
            <button className={styles.prevBtn}>
                Previous
            </button>
            <button className={styles.nextBtn}>
                Next
            </button>
        </div>
    )
}

export default Pagination;