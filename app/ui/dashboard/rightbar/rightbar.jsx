import {MdPlayCircleFilled, MdReadMore } from 'react-icons/md'
import styles from './rightbar.module.css'
import Image from 'next/image'
export default function Rightbar() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt="backgroundImg" fill/>
        </div>
        <span className={styles.available}>🔥 Available Now</span>
        <h3 className={styles.title}>How to use the new version of the admin dashboard?</h3>
        <span className={styles.time}> Takes 4 minutes </span>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dolorem 
        </p>
        <button className={styles.button}>
          <MdPlayCircleFilled />
          Watch
        </button>
      </div>

      <div className={styles.item}>
        <span className={styles.available}>🚀 Coming Soon</span>
        <span className={styles.title}> New server actions are available, partial pre-rendering is coming u! </span>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dolorem 
        </p>
        <button className={styles.button}>
          <MdReadMore />
          Learn
        </button>
      </div>
    </div>
  )
}
