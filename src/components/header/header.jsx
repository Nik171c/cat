import { Link } from 'react-router-dom';
import styles from './header.module.scss';
import { useState } from 'react';
import ThemaToggler from '../thema-toggler/thema-toggler';

export default function Header() {
  const [isVisible, updateVisibility] = useState(false);

  const handlerToggle = () => {
    updateVisibility((current) => !current)
  }

  const handlerClose = () => {
    updateVisibility(false)
  }

  return (
    <header className={styles.header}>
      <ThemaToggler />
      <Link to={"/"} className={styles.logo}>
        <picture>
          <source media="(min-width: 768px)" srcSet="/images/logo/logo-tablet.svg"/>
          <img src="/images/logo/logo-mobile.svg" alt="" />
        </picture>
      </Link>
      <nav className={`${styles.menu} ${isVisible ? `${styles.opened}` : ''}`}>
        <button
          onClick={handlerToggle}
          className={styles.toggle}
        >
          <span className="visually-hidden">Toggle mobile menu</span>
        </button>
        <ul
          onClick={handlerClose}
          className={styles.list}
        >
          <li className={styles.item}>
            <Link to={"/"} className={styles.link}>Home</Link>
          </li>
          <li className={styles.item}>
            <Link to={"/catalog"} className={styles.link}>Product Catalog</Link>
          </li>
          <li className={styles.item}>
            <Link to={"/program"} className={styles.link}>Program Selection</Link>
          </li>
        </ul>
      </nav>
    </header>
  )



}