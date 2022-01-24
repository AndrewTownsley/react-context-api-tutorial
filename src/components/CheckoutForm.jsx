import React from 'react'
import { CartState } from '../Context/Context';


const CheckoutForm = () => {
    const { state: { cart, setCart, states } } = CartState();

    return (
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
    )
}

export default CheckoutForm
