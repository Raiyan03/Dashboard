import Card from "../ui/dashboard/card/card.jsx"
import Rightbar from "../ui/dashboard/rightbar/rightbar.jsx"
import Transactions from "../ui/dashboard/transactions/transactions.jsx"
import Charts from "../ui/dashboard/charts/charts.jsx"
import styles from "../ui/dashboard/dashboard.module.css"
export default function Dashboard() {
  return (
    <div className={styles.wrapper}>
        <div className={styles.main}>
            <div className={styles.cards}>
              <Card />
              <Card />
              <Card />
            </div>
            <Transactions />
            <Charts />
        </div>
        <div className={styles.side}>
              <Rightbar />
        </div>
    </div>
  )
}
