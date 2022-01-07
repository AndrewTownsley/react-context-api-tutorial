import React, { useState, useEffect, useContext } from 'react'
import CartItem from '../components/CartItem';
import { CartState } from '../Context/Context';

const Cart = () => {
    const [total, setTotal] = useState(0.00);
    const {cart, setCart,} = CartState();
    const [prodId, setProdId] = useState([]);

    useEffect(() => {
        setTotal(cart.reduce((a, b) => a + Number(b.price), 0))
    }, [cart])

    // useEffect(() => {
    //     const productItemId = () => {
    //         cart.map((product, index) => (
    //             product.id[index] !== product.id[index + 1]
    //             ?
    //             setProdId(product)
    //             :
    //             null
    //             ))
    //         } 
    //         productItemId()
    //     }, [cart, setCart])

    // console.log(prodId);

    
    return (
        <div className='cart'>
            <h3>Cart</h3>
            <h4>{cart.length} Items</h4>
            <h5>Total: ${total}</h5>
            <div className="product-container">
                {
                    cart.map((product, id) => {
                        return (
                            product.id.map((prodId, index) => (
                                <CartItem
                                key={index} 
                                product={product} 
                                cart={cart} 
                                setCart={setCart}
                                />
                            ))
                        )
                    })
                    }
            </div>
        </div>
    )
}


export default Cart
