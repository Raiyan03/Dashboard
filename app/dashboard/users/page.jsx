import styles from './page.module.css';
import Image from 'next/image';
import Search from '../../ui/dashboard/search/search';
import Pagination from '../../ui/dashboard/pagination/pagination';

const Users = () => {
    return (
        <div className={styles.container}>
            <Search placeholder={"Search for user"} />
            <table className={styles.table}>
                <thead>
                    <tr className={styles.row}>
                        <td className={styles.cell}>
                            Name
                        </td>
                        <td className={styles.cell}>
                            Email
                        </td>
                        <td className={styles.cell}>
                            Created on
                        </td>
                        <td className={styles.cell}>
                            Role
                        </td>
                        <td className={styles.cell}>
                            Action
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr className={styles.row}>
                        <td className={styles.cell}>
                            <div className={styles.user}>
                                <Image className={styles.image} src="/noavatar.png" width={50} height={50} alt='User' />
                                <span>Hello</span>
                            </div>
                        </td>
                        <td className={styles.cell}>
                            hello@gmail.com
                        </td>
                        <td className={styles.cell}>
                            2021-01-01
                        </td>
                        <td className={styles.cell}>
                            client
                        </td>
                        <td className={styles.cell}>
                            passive
                        </td>
                        <td className={styles.cell}>
                            <div className={styles.actionBtn}>
                                <button className={`${styles.view} ${styles.button}`}>
                                    View
                                </button>
                                <button className={`${styles.delete} ${styles.button}`}>
                                    Delete
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr className={styles.row}>
                        <td className={styles.cell}>
                            <div className={styles.user}>
                                <Image className={styles.image} src="/noavatar.png" width={50} height={50} alt='User' />
                                <span>John</span>
                            </div>
                        </td>
                        <td className={styles.cell}>
                            John@gmail.com
                        </td>
                        <td className={styles.cell}>
                            2021-01-01
                        </td>
                        <td className={styles.cell}>
                            client
                        </td>
                        <td className={styles.cell}>
                            passive
                        </td>
                        <td className={styles.cell}>
                            <div className={styles.actionBtn}>
                                <button className={`${styles.view} ${styles.button}`}>
                                    View
                                </button>
                                <button className={`${styles.delete} ${styles.button}`}>
                                    Delete
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr className={styles.row}>
                        <td className={styles.cell}>
                            <div className={styles.user}>
                                <Image className={styles.image} src="/noavatar.png" width={50} height={50} alt='User' />
                                <span>Jane</span>
                            </div>
                        </td>
                        <td className={styles.cell}>
                            Jane@gmail.com
                        </td>
                        <td className={styles.cell}>
                            2021-01-01
                        </td>
                        <td className={styles.cell}>
                            client
                        </td>
                        <td className={styles.cell}>
                            active
                        </td>
                        <td className={styles.cell}>
                            <div className={styles.actionBtn}>
                                <button className={`${styles.view} ${styles.button}`}>
                                    View
                                </button>
                                <button className={`${styles.delete} ${styles.button}`}>
                                    Delete
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination />
        </div>

    )
}

export default Users;