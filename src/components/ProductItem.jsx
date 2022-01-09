import { CartState } from '../Context/Context';
import React, { useState } from 'react';

const ProductDetail = ({ product }) => {
  const {cart, setCart, decreaseCartQty } = CartState();
  const [inStock, setInStock] = useState(product.inStock)
  // console.log("default: ", inStock);
  
  const addItemToCart = (product) => {
    setCart([...cart, product])
    setInStock(inStock - 1);
  }

    return (
        <article className='product-card'>
        <h5>{product.name}</h5>
        <p>${product.price}</p>
        { product.nextDay ? <p>Next Day Shipping</p> : null}
        <p>Rating: {product.rating}/5</p>
        <p className={inStock === 1 ? "low-stock" : ""}>inStock: {inStock}</p>
        { cart.includes(product) ?
          (
            <button
              className={inStock !== 0 ? "" : "out-of-stock"}
              onClick={() => decreaseCartQty(product.id)}
            >
          Remove from cart
        </button>
          )
          : 
          (
            // <button className="add" onClick={() => setCart([...cart, product])}>
            <button 
              className={inStock !== 0 ? "" : "out-of-stock"} 
              onClick={() => addItemToCart(product)}>
              Add to Cart
            </button>
         
      ) 
    }
    </article>
    )
}

export default ProductDetail
