import { Link } from "react-router-dom";
import styles from "./product-card.module.scss"

function ProductCard({ product }) {
  const { brand, currency, image, line, price, taste, weight } = product
  return (
    <li className={styles.card}>
      <div className={styles.wrapper}>
        <div className={styles.imageContainer}>

          <Link to={`/product/${product.id}`}>
            <picture>
              <img className={styles.products} src={`/public/images/catalog/${product.image}`} alt={product.image} />
            </picture>
          </Link>
        </div>
        <div className={styles.box}>
          <Link className={styles.title}>
            <span>{brand}</span>
            <span>{line} {weight}g</span>
          </Link>
          <div className={styles.productContent}>
            <dl className={styles.option}>
              <dt>Weight:</dt>
              <dd>{weight}g</dd>
            </dl>
            <dl className={styles.option}>
              <dt>Taste:</dt>
              <dd>{taste}</dd>
            </dl>
            <dl className={styles.option}>
              <dt>Price:</dt>
              <dd>{price} {currency}</dd>
            </dl>
          </div>
        </div>
      </div>
      <Link href="#" className={styles.productOrder}>Order</Link>
    </li>
  );
}

export default ProductCard;