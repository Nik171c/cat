import { Link } from "react-router-dom";
import styles from "./product.module.scss"

function ProductCard({product}) {
    return (
        <li className={styles.card}>
            <div className={styles.imageContainer}>

                <Link to={`/product/${product.id}`}>
                    <picture>
                        <img className={styles.productImage} src={product.image} alt="{product.image}" />
                    </picture>
                </Link>
            </div>
            <div className={styles.box}>
                <Link>{product.title}</Link>
                <div className={styles.productContent}>
                    <p>{product.mass}</p>
                    <p>{product.taste}</p>
                    <p>{product.price}</p>
                </div>
            </div>
            <a href="#" className={styles.productOrder}>Order</a>
        </li>
    );
}

export default ProductCard;