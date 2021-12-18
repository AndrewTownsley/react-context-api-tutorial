import React from 'react'
import ProductDetail from '../components/ProductDetail'

const Cart = ({ cart, setCart, product}) => {
    return (
        <div className='cart'>
            <h3>Cart</h3>
            <h5>Total: $0.00</h5>
            <div className="product-container">
                {
                    <ProductDetail />
                }
            </div>
        </div>
    )
}

export default Cart
