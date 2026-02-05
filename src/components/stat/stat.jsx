import styles from './stat.module.scss';


export default function Stats() {
    return (
        <div className={styles.stats}>
            <div className={styles.statsContainer}>
                <div className={styles.item}>
                    <div className={styles.value}>5 КГ</div>
                    <div className={styles.title}>снижение веса</div>
                </div>
                <div className={styles.item}>
                    <div className={styles.value}>60 ДНЕЙ</div>
                    <div className={styles.title}>затрачено времени</div>
                </div>
            </div>
            <div className={styles.text}>
                <span>Затраты на питание:</span>
                <span>15 000 РУБ.</span>
            </div>
        </div>
    );
}

