import { CartState } from '../Context/Context';
import React, { useState } from 'react';

const ProductDetail = ({ product }) => {
  const {cart, setCart} = CartState();
  const [inStock, setInStock] = useState(product.inStock)
  console.log("default: ", inStock);
  
  const addItemToCart = (product) => {
    setCart([...cart, product])
    setInStock(inStock - 1);
    console.log("after add item: ", inStock);
  }

    return (
        <article className='product-card'>
        <h5>{product.name}</h5>
        <p>${product.price}</p>
        {
          product.nextDay ? <p>Next Day Shipping</p> : null
        }
        <p>Rating: {product.rating}/5</p>
        <p className={inStock === 1 ? "low-stock" : ""}>inStock: {inStock}</p>
        {inStock !== 0 ?
          (
            // <button className="add" onClick={() => setCart([...cart, product])}>
            <button className="add" onClick={() => addItemToCart(product)}>
              Add to Cart
            </button>
          )
          : 
          (
            <button
            className="out-of-stock"
            disabled="true"
            >
          Out of Stock
        </button>
      ) 
    }
    </article>
    )
}

export default ProductDetail
