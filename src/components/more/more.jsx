import { Link } from "react-router-dom";
import styles from "./more.module.scss"

export default function More(params) {
  return (
    <li className={styles.more}>
      <h3 className={styles.title}>Показать еще 100500 товаров</h3>
      <p className={styles.text}>На самом деле вкусов гораздо больше!</p>
      <Link href="#" className={styles.productOrder}>показать все</Link>
    </li>
  )
};

