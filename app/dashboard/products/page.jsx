import Image from 'next/image'
import Search from '../../ui/dashboard/search/search'
import Pagination from '../../ui/dashboard/pagination/pagination'
import styles from './page.module.css'
import Link from 'next/link'
import { fetchProducts } from "@/app/lib/data";

export default async function Products({ searchParams }) {
    const q = searchParams?.q || "";
    const page = searchParams?.page || 1;
    const {products, count} = await fetchProducts(q, page);
  return (
    <div className={styles.container}>
        <Search placeholder={"Search for products"} location={'products'} />
        <table className={styles.table}>
            <thead>
                <tr className={styles.row}>
                    <td className={styles.cell}>
                        Title
                    </td>
                    <td className={styles.cell}>
                        Description
                    </td>
                    <td className={styles.cell}>
                        Price
                    </td>
                    <td className={styles.cell}>
                        Created at
                    </td>
                    <td className={styles.cell}>
                        stock
                    </td>
                    <td className={styles.cell}>
                        Action
                    </td>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                    <tr key={product.id} className={styles.row}>
                        <td className={styles.cell}>
                            <div className={styles.user}>
                                <Image 
                                className={styles.image} 
                                src={product.img || "/noproduct.jpg"}
                                width={50}
                                height={50} 
                                alt='User'  
                                />
                                <span>{product.title}</span>
                            </div>
                        </td>
                        <td className={styles.cell}>
                            {product.description}
                        </td>
                        <td className={styles.cell}>
                            {product.price}
                        </td>
                        <td className={styles.cell}>
                            2021-01-01
                        </td>
                        <td className={styles.cell}>
                            {product.stock}
                        </td>
                        <td className={styles.cell}>
                            <div className={styles.actionBtn}>
                                <Link href= {`/dashboard/products/test${product.id}`} >
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
