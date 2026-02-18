import {useState, useEffect} from 'react';
import ProductCard from './product-card';

function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://6888f670adf0e59551bc0e6a.mockapi.io/api/products')
        .then(res => res.json())
        .then((data)=>{
            setProducts(()=>[...data])
        })
        .finally(() => setLoading(false));
    }, []);

    if(loading){
        return (
            <div>
                <p>Loading</p>
            </div>
        )
        }
    
    return ( 
         <div className={"details"}>
            <h1 className={"title"}>Каталог продукции</h1>
            {products.map((item)=><ProductCard product={item} />)}
        </div>
     );
}

export default Products;