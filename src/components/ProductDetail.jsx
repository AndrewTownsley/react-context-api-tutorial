import React, { useState, useContext } from 'react';
import { CartContext } from '../Context';

const ProductDetail = ({ product }) => {
  const {cart, setCart} = useContext(CartContext)

    return (
        <article className='product-card'>
        <img src={product.image} alt={product.item} />
        <h5>{product.item}</h5>
        <p>${product.price}</p>
        {cart.includes(product) ?
        (
        <button
          className="add remove"
          onClick={() => setCart(cart.filter((c) => c.id !== product.id))}
        >
          Remove from Cart
        </button>
      ) 
      : 
      (
        <button className="add" onClick={() => setCart([...cart, product])}>
          Add to Cart
        </button>
      )}
    </article>
    )
}

export default ProductDetail
