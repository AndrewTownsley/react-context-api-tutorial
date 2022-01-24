import React, { useState } from 'react'
import { CartState } from '../Context/Context';

const CheckoutItem = ({ product }) => {
    const { state: { cart },
        dispatch } = CartState();          
        
        return (
            <div className="cart-item checkout-item">
            <article className='product-card checkout-card'>
                {/* <img src={product.image} alt={product.item} /> */}
                <h5>{product.name}</h5>
                <p>${product.price}</p>
                {/* <p>in stock: {product.inStock - selectedQty}</p>
                {
                    product.nextDay ? <p><em>Next Day Shipping</em></p> : null
                }
                <p>Rating: {product.rating}/5</p> */}
            </article>
            <section>
                <div>
                </div>
                    <button onClick={() => {
                        dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: product
                        })
                    }}>
                        Remove Item
                    </button>
            </section>
        </div>
    )
}


export default CheckoutItem
