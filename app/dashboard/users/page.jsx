import { fetchUsers } from "@/app/lib/data";
import styles from './page.module.css';
import Image from 'next/image';
import Search from '../../ui/dashboard/search/search';
import Pagination from '../../ui/dashboard/pagination/pagination';
import Link from 'next/link';
const Users = async ({ searchParams }) => {
    const q = searchParams?.q || "";
    const page = searchParams?.page || 1;
    const {users, count} = await fetchUsers(q, page);
    console.log(users);
    return (
        <div className={styles.container}>
            <Search placeholder={"Search for user"} location={'users'} />
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
                    {users.map((user) => (
                        <tr className={styles.row} key={user.id}>
                            <td className={styles.cell}>
                                <div className={styles.user}>
                                    <Image 
                                    className={styles.image} 
                                    src={ user.img || "/noavatar.png"} 
                                    width={50}
                                    height={50} 
                                    alt='User' 
                                    />
                                    <span>{user.username}</span>
                                </div>
                            </td>
                            <td className={styles.cell}>
                                {user.email}
                            </td>
                            <td className={styles.cell}>
                                {user.createdAt}
                            </td>
                            <td className={styles.cell}>
                                {user.isAdmin ? "Admin" : "Client"}
                            </td>
                            <td className={styles.cell}>
                                {user.isActive ? "Acitve" : "Passive"}
                            </td>
                            <td className={styles.cell}>
                                <div className={styles.actionBtn}>
                                    <Link href={`/dashboard/users/${user.id}`}>
                                        <button className={`${styles.view} ${styles.button}`}>
                                            View
                                        </button>
                                    </Link>
                                    <button className={`${styles.delete} ${styles.button}`}>
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination total = {count}/>
        </div>

    )
}

export default Users;