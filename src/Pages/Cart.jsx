import React, { useState, useEffect, useContext } from 'react'
import CartItem from '../components/CartItem';
import { CartState } from '../Context/Context';

const Cart = () => {
    const [total, setTotal] = useState(0.00);
    const {cart, setCart} = CartState();

    // const removeSingleCartItem = (cart, id) => {
    //     return cart.filter(function(item) {
    //         return item.id !== id;
    //     })
    // }
    
    const decreaseCartQty = (id) => {
        let cartCopy = [...cart]
        let productQty = cartCopy.filter(item => item.id === id);
        console.log(cart);
        productQty.pop();
        let newCart = cart.filter(item => item.id !== id);
        setCart([...newCart, ...productQty])
        console.log("ProductQty: ", productQty);
        console.log("newCart: ", newCart);
        // console.log("Cart: ", cart);
    }


    useEffect(() => {
        setTotal(cart.reduce((a, b) => a + Number(b.price), 0))
    }, [cart])


    return (
        <div className='cart'>
            <h3>Cart</h3>
            <h4>{cart.length} Items</h4>
            <h5>Total: ${total}</h5>
            <div className="product-container">
                {
                    cart.map((product, index) => (
                        <CartItem 
                            key={index} 
                            product={product} 
                            cart={cart} 
                            setCart={setCart}
                            decreaseCartQty={decreaseCartQty}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Cart
