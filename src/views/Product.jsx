import {Link, useParams} from 'react-router-dom';

const products = {
    1: {name: "x11", brand: "iPhone"},
    2: {name: "S20", brand: "Samsung"}
}

const Product = ()=>{
    const params = useParams();
    const product = products[params.productId];
    return (<>
        <h1>{product.brand} {product.name} </h1>
        <h2>This is product is great</h2>
    </>)
};


export default Product;