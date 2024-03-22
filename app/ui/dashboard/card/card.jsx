import { MdSupervisedUserCircle } from 'react-icons/md';
import styles from './card.module.css';

export default function Card() {
  return (
    <div className={styles.container}>
        <MdSupervisedUserCircle size={24}/>
        <div className={styles.text}>
          <span className={styles.title}>Total Users</span>
          <span className={styles.number}>1000</span>
          <span className={styles.details}><span className={styles.positive}>12%</span>More than the previous week</span>
        </div>
    </div>                      
  )
}
