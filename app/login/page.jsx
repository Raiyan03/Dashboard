import styles from '@/app/ui/login/login.module.css'


export default function Login() {
  return (
    <div className={styles.container}>
        <form action="" className={styles.form}>
            <h1>Login</h1>
            <input type="text" placeholder='username' />
            <input type="password" placeholder='password' />
            <button className={styles.button} type='submit'>Login</button>
        </form>
    </div>
  )
}
