import React, { useState, useEffect } from 'react'
import { CartState } from '../Context';


const CartItem = ({ product, cart, setCart }) => {


   console.log(cart);
    return (
        <div>
            <article className='product-card'>
                <img src={product.image} alt={product.item} />
                <h5>{product.name}</h5>
                <p>${product.price}</p>
                {
                    product.nextDay ? <p><em>Next Day Shipping</em></p> : null
                }
                <p>Rating: {product.rating}/5</p>
            </article>
            <section>
                <div>

                    Quantity: {cart.length}
                    <button onClick={() => setCart([...cart, product])}>+</button>
                    <button >-</button>
                </div>
                <button onClick={() => setCart(cart.filter((c) => c.id !== product.id))}>Remove Item</button>
            </section>
        </div>
    )
}

export default CartItem
