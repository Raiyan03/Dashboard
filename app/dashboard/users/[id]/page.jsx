import styles from '@/app/ui/dashboard/users/singleUser/singleUser.module.css'
import Image from 'next/image'

const SingleUser = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/noavatar.png" alt='profile image' width={200} height={200}/>
                <span>
                    Hello
                </span>
            </div>
            <form action="" className={styles.form}>
                <div className={styles.inputContainer}>
                    <label htmlFor="Username">
                        Username
                    </label>
                    <input type="text" id="Username" name="username" />
                    <label htmlFor="Email">
                        Email
                    </label>
                    <input type="text" name="Email" id="email" />
                    <label htmlFor="Password">
                        Password
                    </label>
                    <input type="password" name="Password" id="password" />
                    <label htmlFor="Phone">
                        Phone
                    </label>
                    <input type="text" name="Phone" id="phone" />
                    <label htmlFor="Address"> Address </label>
                    <textarea name="Address" id="address" cols="39" rows="5"></textarea>
                    <label htmlFor="IsAdmin">
                        Is Admin?
                    </label>
                    <select name="IsAdmin" id="isAdmin">
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                    <label htmlFor="isActive">
                        Is Active?
                    </label>
                    <select name="isActive" id="isActive">
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
                <button type="submit" className={styles.submitButton}>
                    Update
                </button>
            </form>
        </div>
    )
}

export default SingleUser