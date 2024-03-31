"use client";

import { MdSearch } from 'react-icons/md';
import styles from './search.module.css';
import Link from 'next/link';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
const Search = (props) => {
    const searchParams = useSearchParams();
    const {replace} = useRouter();
    const pathName = usePathname();
    const params = new URLSearchParams(searchParams);
    
    const handleSearch = useDebouncedCallback((e) => {
        params.set("page", 1);
        if (e.target.value ){

            e.target.value.length > 2 && params.set("q", e.target.value);
        }
        else{
            params.delete("q");
        }
        replace(`${pathName}?${params.toString()}`)
    }, 300)

    console.log(searchParams);
    console.log(pathName);

    return (
    <div className={styles.searchBar}>
        <div className={styles.searchbox}>
            <MdSearch className={styles.searchIcon} />
            <input className={styles.search} type="text" placeholder={props.placeholder} onChange={handleSearch}/>
        </div>
        <Link href={`/dashboard/${props.location}/add`}>
            <button className={styles.addBtn}>
                Add new
            </button>
        </Link>
    </div>
    )
}

export default Search;