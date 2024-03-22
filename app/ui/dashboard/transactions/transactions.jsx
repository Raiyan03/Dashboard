import styles from './transactions.module.css'
import Link from 'next/link'
import Image from 'next/image'
export default function Transactions() {
  return (
    <div className={styles.container}>
        <h2 className={styles.title}>
          Lates Transaction
        </h2>
        <table className={styles.table}>
          <thead className={styles.head}>
            <tr>
              <td className={styles.data}>
                Name
              </td>
              <td className={styles.data}>
                Status
              </td>
              <td className={styles.data}>
                Date
              </td>
              <td className={styles.data}>
                Amount
              </td>
            </tr>
          </thead>
          <tbody>
          <tr className={styles.row}>
            <td className={styles.data}>
              <div className={styles.User}>
              <Image className={styles.userImage} src="/noavatar.png" alt="logo" width="20" height="20" />
              John Doe
              </div>
            </td>
            <td className={styles.data}>
              <span className={`${styles.status} ${styles.done}`}>pending</span>
            </td>
            <td className={styles.data}>
              10/12/2021
            </td>
            <td className={styles.data}>
              $200.00
            </td>
          </tr>
          <tr className={styles.row}>
            <td className={styles.data}>
              
              <div className={styles.User}>
              <Image className={styles.userImage} src="/noavatar.png" alt="logo" width="20" height="20" />
              John Doe
              </div>

            </td>
            <td className={styles.data}>
              <span className={`${styles.status} ${styles.done}`}>done</span>
            </td>
            <td className={styles.data}>
              10/12/2021
            </td>
            <td className={styles.data}>
              $200.00
            </td>
          </tr>
          <tr className={styles.row}>
            <td className={styles.data}>
              <div className={styles.User}>
              <Image className={styles.userImage} src="/noavatar.png" alt="logo" width="20" height="20" />
              John Doe
              </div>
            </td>
            <td className={styles.data}>
              <span className={`${styles.status} ${styles.cancelled}`}>
                cancelled
              </span>
            </td>
            <td className={styles.data}>
              10/12/2021
            </td>
            <td className={styles.data}>
              $200.00
            </td>
          </tr>
          <tr className={styles.row}>
            <td className={styles.data}>
              <div className={styles.User}>
              <Image className={styles.userImage} src="/noavatar.png" alt="logo" width="20" height="20" />
              John Doe
              </div>
            </td>
            <td className={styles.data} >
              <span className={`${styles.status} ${styles.pending}`}>
                pending
              </span>
            </td>
            <td className={styles.data}>
              10/12/2021
            </td>
            <td className={styles.data}>
              $200.00
            </td>
          </tr>
          <tr className={styles.row}>
            <td className={styles.data}>
              <div className={styles.User}>
              <Image className={styles.userImage} src="/noavatar.png" alt="logo" width="20" height="20" />
              John Doe
              </div>
            </td>
            <td className={styles.data}>
              <span className={`${styles.status} ${styles.done}`}>
                done
              </span>
            </td >
            <td className={styles.data}>
              10/12/2021
            </td>
            <td className={styles.data}>
              $200.00
            </td>
          </tr>
          </tbody>
        </table>
    </div>
  )
}
