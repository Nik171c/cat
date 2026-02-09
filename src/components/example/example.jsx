import Slider from "../slider";
import Stats from "../stat/stat";
import styles from "./example.module.scss";

export default function Example(props) {

    return (
        <section className={styles.example}>
            <h2 className={styles.title}>Real-Life Example</h2>
            <p className={styles.text}>Boris lost 5 kg in 2 months simply by replacing his regular food with Cat Energy Slim. Excellent results without exhausting workouts! At the same time, he didn’t change his habits and still sleeps 16 hours a day.</p>
            <Stats />
            <div className={styles.sliderContainer}>
                <Slider />
            </div>
        </section>
    )
}