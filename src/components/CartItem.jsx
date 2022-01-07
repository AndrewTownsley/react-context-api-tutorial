import React, { useState, useEffect } from 'react'
import { CartState } from '../Context/Context';


const CartItem = ({ product }) => {
    const {cart, setCart, productQty, setProductQty, decreaseCartQty} = CartState();


    return (
        <div className="cart-item">
            <article className='product-card'>
                {/* <img src={product.image} alt={product.item} /> */}
                <h5>{product.name}</h5>
                <p>${product.price}</p>
                <p>${product.inStock}</p>
                {
                    product.nextDay ? <p><em>Next Day Shipping</em></p> : null
                }
                <p>Rating: {product.rating}/5</p>
            </article>
            <section>
                <div>

                    <label name="product-quantity" htmlFor="cartItemQty">
                    <button onClick={() => setCart([...cart, product])}>+</button>
                        {/* <input onChange={(e) => setProductQty(e.target.value)} type="number" id="cartItemQty" name="product-quantity" /> */}
                    <button onClick={() => decreaseCartQty(product.id)} >-</button>
                    </label>
                </div>
                <button onClick={() => setCart(cart.filter((c) => c.id !== product.id))}>Remove Item</button>
            </section>
        </div>
    )
}

export default CartItem
