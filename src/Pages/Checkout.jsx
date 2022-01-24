import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { CartState } from '../Context/Context';
import CheckoutItem from '../components/CheckoutItem';

const Checkout = ({ total, setTotal}) => {
    // const location = useLocation();
    // const { total } = location.state;
    const { state: { cart, setCart } } = CartState();

    return (
        <div>
            <Link to="/cart"><button>Back to Cart</button></Link>
            total: {total}
            <section className='checkout-main'>
                <section className='checkout-form-container'>
                    <form className='checkout-form' action="">
                        <label htmlFor="">
                            <input type="text" />
                        </label>
                        <label htmlFor="">
                            <input type="text" />
                        </label>
                        <label htmlFor="">
                            <input type="text" />
                        </label>
                        <label htmlFor="">
                            <input type="text" />
                        </label>
                        <label htmlFor="">
                            <input type="text" />
                        </label>
                        <label htmlFor="">
                            <input type="text" />
                        </label>
                        <label htmlFor="">
                            <input type="text" />
                        </label>
                    </form>
                </section>
                <section className='checkout-summary'>
                    {
                        cart.map((product, index) => (
                            <CheckoutItem
                                key={index}
                                product={product}
                                className="cart-item checkout-item"
                            />
                        ))
                    }
                </section>
            </section>
        </div>
    )
}

export default Checkout
