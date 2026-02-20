import React from "react";
import styles from "./catalog.module.scss";
import Products from "../../components/product/Products";
import { products } from "../../components/product/data/products";
import MainTitle from "../../components/main-title/main-title";
import ExtraGoods from "../../components/extra-goods/extra-goods";



export default function Catalog(props) {
  return (
    <div className={styles.container}>
      <MainTitle className={styles.title}>Каталог продукции</MainTitle>
      <Products />
      <ExtraGoods />
    </div>
  );
}
