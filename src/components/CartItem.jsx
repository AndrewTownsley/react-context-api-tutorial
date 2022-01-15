import React, { useState, useEffect } from 'react'
import { CartState } from '../Context/Context';


const CartItem = ({ product }) => {
    const {dispatch, cart, setCart, productQty, setProductQty, decreaseCartQty} = CartState();


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

                    <select 
                        value={product.productQty}
                        name="productQuantity"
                        id="productQuantity"
                        onChange={(e) => {
                            dispatch({
                            type: "UPDATE_CART_QUANTITY",
                            payload: {
                                id: product.id,
                                qty: e.target.value
                            }
                        })
                    }}
                    >
                        {
                            product.inStock > 0 ? 
                            ([...Array(product.inStock).keys()].map((x) => (
                                <option key={x + 1}>{x + 1}</option>
                            )))
                            :
                            <option>0</option>
                        }
                    </select>
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

export default CartItem
