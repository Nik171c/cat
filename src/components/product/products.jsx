import { useState, useEffect } from 'react';
import ProductCard from './product-card';
import styles from './product.module.scss';
import MainTitle from '../main-title/main-title';
import { Link } from 'react-router-dom';
import More from '../more/more';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://6888f670adf0e59551bc0e6a.mockapi.io/api/products')
      .then(res => res.json())
      .then((data) => {
        setProducts(() => [...data])
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div>
        <p>Loading</p>
      </div>
    )
  }

  return (
    <div className={styles.details}>
      <ul className={styles.list}>
        {products.map((item) => <ProductCard product={item} />)}
        <More />
      </ul>
    </div>
  );
}

export default Products;