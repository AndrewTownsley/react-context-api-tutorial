import React from 'react'
import ProductDetail from './ProductDetail';
import { CartState } from '../Context/Context';

const ProductList = () => {
    const { state: {productsArray, cart, setCart} } = CartState();

    return (
        <div className="product-list" >
        {
            productsArray.map((product) => (
               <ProductDetail 
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
