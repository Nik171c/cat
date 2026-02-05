import Slider from "../slider";
import Stats from "../stat/stat";
import styles from "./example.module.scss";

export default function Example(props) {

    return (
        <section className={styles.example}>
            <h2 className={styles.title}>Живой пример</h2>
            <p className={styles.text}>Борис сбросил 5 кг за 2 месяца, просто заменив свой обычный корм на Cat Energy Slim. Отличный результат без изнуряющих тренировок! При этом он не менял своих привычек и по-прежнему спит по 16 часов в день. </p>
            <Stats />
            <div className={styles.sliderContainer}>
                <Slider />
            </div>
        </section>
    )
}