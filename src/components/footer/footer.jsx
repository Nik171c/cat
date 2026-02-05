import styles from "./footer.module.scss";

export default function Footer(){
    return(
        <section className={styles.footer}>
            <h2 className={styles.title}><span className={styles.cat}>CAT</span> ENERGY</h2>
            <div className={styles.social}>
                <ul className={styles.socialList}>
                    <li className={styles.item}>
                        <a href="#" className={styles.link}>VKontakte</a>
                        <img src="./public/footer/image/icon/i-1.svg" alt="" className={styles.icon} />
                    </li>
                    <li className={styles.item}>
                        <a href="#" className={styles.link}>YouTube</a>
                        <img src="#" alt="" className={styles.icon} />
                    </li>
                    <li className={styles.item}>
                        <a href="#" className={styles.link}>Telegram</a>
                        <img src="./" alt="" className={styles.icon} />
                    </li>
                </ul>
                <div className={styles.academy}>
                    <p className={styles.text}>HTML Academy</p>
                    <div className={styles.logotype}>
                        <a href="#" className={styles.logo}>
                            <img src="#" alt="" className={styles.image} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}