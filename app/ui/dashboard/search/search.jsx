import { MdSearch } from 'react-icons/md';
import styles from './search.module.css';
import Link from 'next/link';
const Search = ({placeholder}) => {
    return (
    <div className={styles.searchBar}>
        <div className={styles.searchbox}>
            <MdSearch className={styles.searchIcon} />
            <input className={styles.search} type="text" placeholder={placeholder} />
        </div>
        <Link href="/dashboard/users/add">
            <button className={styles.addBtn}>
                Add new
            </button>
        </Link>
    </div>
    )
}

export default Search;