import React from 'react'
import ProductItem from './ProductItem';
import { CartState } from '../Context/Context';

const ProductList = () => {
    const { state: {productsArray, cart, setCart} } = CartState();
    console.log(productsArray);
    return (
        <div className="product-list" >
        {
            productsArray.map((product) => (
               <ProductItem 
                id={product.id} 
                key={product.id} 
                product={product}
                />
            ))
        }
    </div>
    )
}

export default ProductList
