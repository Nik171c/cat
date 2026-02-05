import styles from './dealers.module.scss';

export default function Dealers(props) {

    return (
        <div className={styles.dealers}>
            <div className={styles.text}>
                <div className={styles.content}>приглашаем к сотрудничеству дилеров!</div>
                <div className={styles.address}>ул. Большая
                    Конюшенная, д. 19/8 Санкт-Петербург</div>
            </div>
            <div className={styles.map}></div>
        </div>
         )
}
