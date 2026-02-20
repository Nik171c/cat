import styles from "./main-title.module.scss";

export default function MainTitle({ children, className }) {
    return (
        <div className={className}>
            <h1 className={styles.title}>{children}</h1>
        </div>
    );
}