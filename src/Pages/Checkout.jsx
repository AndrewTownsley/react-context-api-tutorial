import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { CartState } from '../Context/Context';
import CheckoutItem from '../components/CheckoutItem';

const Checkout = ({ total, setTotal}) => {
    // const location = useLocation();
    // const { total } = location.state;
    const { state: { cart, setCart, states } } = CartState();

    return (
        <div>
            <Link to="/cart"><button>Back to Cart</button></Link>
            total: ${total}
            <section className='checkout-main'>
                <section className='checkout-form-container'>
                    <form className='checkout-form' action="submit">
                            <h3>Contact Information</h3>
                        <label htmlFor="email">
                            <input placeholder="Email" type="email" />
                        </label>
                        <h3>Shipping Information</h3>
                        <label htmlFor="firstName">
                            <input placeholder="First name" id="firstName" type="text" />
                        </label>
                        <label htmlFor="lastName">
                            <input placeholder="Last name" id="lastName" type="text" />
                        </label>
                        <label htmlFor="address">
                            <input placeholder="Address" id="address" type="text" />
                        </label>
                        <label htmlFor="apartment">
                            <input placeholder="Apartment" id="apartment" type="text" />
                        </label>
                        <label htmlFor="city">
                            <input placeholder="City" id="city" type="text" />
                        </label>
                        <label htmlFor="zipCode">
                            <input placeholder="Zip code" id="zipCode" type="text" />
                        </label>
                        <select name="country" id="country">
                            <option value="usa">United States</option>
                            <option value="canada">Canada</option>
                            <option value="Mexico">Mexico</option>
                        </select>
                        <select name="state" id="state">
                            {
                                states.map((state) => (
                                    <option key={state} value={state} >{state}</option>
                                ))
                            }
                        </select>
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
