import styles from './stat.module.scss';


export default function Stats() {
    return (
        <div className={styles.stats}>
            <div className={styles.item}>
                <div className={styles.value}>5 КГ</div>
                <div className={styles.title}>снижение веса</div>
            </div>
            <div className={styles.item}>
                <div className={styles.value}>60 ДНЕЙ</div>
                <div className={styles.title}>затрачено времени</div>
            </div>
            <div className={styles.text}>Затраты на питание: 15 000 РУБ.</div>
        </div>
    );
}

