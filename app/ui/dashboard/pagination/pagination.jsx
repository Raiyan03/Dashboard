"use client";

import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import styles from './pagination.module.css';

const Pagination = (props) => {
    const searchParams = useSearchParams();
    const {replace} = useRouter();
    const pathName = usePathname();

    const page = searchParams.get("page") || 1;

    const params = new URLSearchParams(searchParams);
    const ITEM_PER_PAGE = 2;

    const hasPrev  = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
    const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < props.total;
    
    const handleChangePage = (type) => {
        type === "prev" 
        ? params.set("page", parseInt(page) - 1)
        : params.set("page", parseInt(page) + 1);
        replace(`${pathName}?${params.toString()}`);
    };

    return (
        <div className={styles.lowerBar}>
            <button className={styles.prevBtn} disabled={!hasPrev} onClick={()=> {handleChangePage("prev")}}>
                Previous
            </button>
            <button className={styles.nextBtn} disabled={!hasNext} onClick={()=> {handleChangePage("next")}}>
                Next
            </button>
        </div>
    )
}

export default Pagination;