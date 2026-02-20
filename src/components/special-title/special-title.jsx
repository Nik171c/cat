import styles from "./special-title.module.scss"

export default function SpecialTitle({ children }) {
  return (
    <h2 className={styles.title}>
      <span className={styles.wrapper}>
        <span className={styles.text}>{children}</span>
      </span>
    </h2>
  )
};
