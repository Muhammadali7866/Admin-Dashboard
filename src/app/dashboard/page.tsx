import Card from "../ui/dashboard/card/card";
import Chart from "../ui/dashboard/chart/page";
import styles from "../ui/dashboard/dashboard.module.css";
import RightBar from "../ui/dashboard/rightbar/page";
import Transactions from "../ui/dashboard/transactions/page";
export default function Dashbaord() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <RightBar />
      </div>
    </div>
  );
}
