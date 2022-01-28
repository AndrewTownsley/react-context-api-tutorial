import React, { useState } from 'react'
import { CartState } from '../Context/Context';


const CheckoutForm = () => {
    let nextDay = 10
    let standard = 0
    const { state: { cart, setCart, states, } } = CartState();
    const [shipFormSubmit, setShipFormSubmit] = useState(false);
    const [shipMethod, setShipMethod] = useState(standard)
    const [shipFormData, setShipFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        address: "",
        apartment: "",
        city: "",
        state: "",
        zipCode: "",
    }) 

    const handleShipFormSubmit = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setShipFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const shipMethodChange = (e) => {
        console.log(e.target.value);
        setShipMethod(e.target.value)
    }

    return (
        <section 
            onSubmit={(e) => e.preventDefault}
            className='checkout-form' 
            action="submit"
        >
                            <section className="userInfo">
                {/* <h3>Ship To:</h3> */}
                <p>Contact: {shipFormData.firstName}{shipFormData.lastName}</p>
                <p>{shipFormData.email}</p>
                <p>Ship to: {shipFormData.address} 
                </p>
                <p>{shipFormData.city} {shipFormData.state} {shipFormData.zipCode}
                </p>
            </section>
                            <h3>Contact Information</h3>
                        <label htmlFor="email">
                            <input 
                                placeholder="Email" 
                                type="email"
                                name="email"
                                onChange={handleShipFormSubmit} 
                            />
                        </label>
                        <h3>Shipping Information</h3>
                        <label htmlFor="firstName">
                            <input 
                                placeholder="First name" 
                                id="firstName" 
                                type="text"
                                name="firstName"
                                onChange={handleShipFormSubmit} 
                            />
                        </label>
                        <label htmlFor="lastName">
                            <input 
                                placeholder="Last name" 
                                id="lastName" 
                                type="text"
                                name="lastName" 
                                onChange={handleShipFormSubmit}
                            />
                        </label>
                        <label htmlFor="address">
                            <input 
                                placeholder="Address" 
                                id="address" 
                                type="text"
                                name="address"
                                onChange={handleShipFormSubmit} 
                            />
                        </label>
                        <label htmlFor="apartment">
                            <input 
                                placeholder="Apartment" 
                                id="apartment" 
                                type="text"
                                name="apartment" 
                                onChange={handleShipFormSubmit}
                            />
                        </label>
                        <label htmlFor="city">
                            <input 
                                placeholder="City" 
                                id="city" 
                                type="text"
                                name="city"
                                onChange={handleShipFormSubmit} 
                            />
                        </label>
                        <label htmlFor="zipCode">
                            <input 
                                placeholder="Zip code" 
                                id="zipCode" 
                                type="text"
                                name="zipCode"
                                onChange={handleShipFormSubmit} 
                            />
                        </label>
                        {/* <select name="country" id="country">
                            <option value="usa">United States</option>
                            <option value="canada">Canada</option>
                            <option value="Mexico">Mexico</option>
                        </select> */}
                        <select 
                            id="state"
                            name="state"
                            onChange={handleShipFormSubmit} 
                        >
                            {
                                states.map((state) => (
                                    <option 
                                        key={state} 
                                        value={state}  
                                    >
                                        {state}
                                    </option>
                                ))
                            }
                        </select>
                        <button 
                            type="button"
                            onClick={() => setShipFormSubmit(true)}
                        >
                            Submit
                        </button>
                        {
                            shipFormSubmit && 
                        <section>
                            <h3>Shipping Options</h3>
                            <label htmlFor="nextDay">
                                Next Day Shipping
                                <input 
                                    onChange={shipMethodChange}
                                    value={nextDay}
                                    type="radio" 
                                    name="shipMethod" 
                                    id="nextDay" />
                            </label>
                            <label htmlFor="standardGround">
                                Standard Ground Shipping
                                <input 
                                    onChange={shipMethodChange}
                                    value={standard}
                                    type="radio" 
                                    name="shipMethod" 
                                    id="standard" />
                            </label>
                        </section>
                        }
                    </section>
    )
}

export default CheckoutForm
