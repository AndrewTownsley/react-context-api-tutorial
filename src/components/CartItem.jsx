import React, { useState, useEffect } from 'react'
import { CartState } from '../Context';


const CartItem = ({ product, cart, setCart }) => {
    const [itemTotal, setItemTotal] = useState([]);

    useEffect(() => {
        const productQuantity = () => {
            let itemTotal = cart.filter((p) => p.id !== product.id)
            setItemTotal(itemTotal - cart.length);
        }
        productQuantity()
    })

   console.log(itemTotal.length);
    return (
        <div>
            <article className='product-card'>
                <img src={product.image} alt={product.item} />
                <h5>{product.name}</h5>
                <p>${product.price}</p>
            </article>
            <section>
                <div>

                    Quantity: {itemTotal}
                    <button onClick={() => setCart([...cart, product])}>+</button>
                    <button>-</button>
                </div>
                <button onClick={() => setCart(cart.filter((c) => c.id !== product.id))}>Remove Item</button>
            </section>
        </div>
    )
}

export default CartItem
