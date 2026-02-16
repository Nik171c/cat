import React from "react";
import styles from "./catalog.module.scss";
import Products from "../../components/product/Products";


export default function Catalog(props) {
  return (
    <div className={styles.container}>Catalog Page
      <Products />
    </div>
  );
}
