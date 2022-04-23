import React, { useEffect, useState } from 'react'
import { CartState } from '../../Context/Context';
import Checkout from '../../Pages/Checkout/Checkout';
import TextInput from '../TextInput';
import { Button } from '../../StyleProps';
import { Formik, Form } from 'formik';
import { CheckoutFormWrapper, ShipFormInputCont, ShipingOptions, StateSelectLabel } from './CheckoutStyles/ShippingFormStyle';


const ShippingForm = ({ total, setTotal, setPaymentFormActive, shipFormData, setShipFormData }) => {
    const { state: { cart, setCart, states }} = CartState();
    const [shipFormSubmit, setShipFormSubmit] = useState(false);
    const [shipTotal, setShipTotal] = useState(0)
    const [groundShipping, setGroundShipping] = useState(true);
  

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

        if(e.target.value === "10" && shipTotal === 0) {
            console.log("Next Day");
            setTotal(total + 10)
            setShipTotal(10)
            setGroundShipping(false)
        } else if(e.target.value === "0" && shipTotal === 0) {
            console.log("Ground");
            setTotal(total)
            setShipTotal(0)
            setGroundShipping(true)
        } else if(e.target.value === "0" && shipTotal === 10) {
            console.log("Ground");
            setTotal(total - 10)
            setShipTotal(0)
            setGroundShipping(true)
        }
        setPaymentFormActive(true)
        console.log("total: ", total);
    }
    
    
    return (
        <CheckoutFormWrapper 
            onSubmit={(e) => e.preventDefault}
            // className='checkout-form' 
            action="submit"
            >
            <Formik
                initialValues={{
                    email: "",
                    firstName: "",
                    lastName: "",
                    address: "",
                    apartment: "",
                    city: "",
                    zipCode: "",
                }}
            >
                {formik => (

                    <ShipFormInputCont>
                        <Form>
                            <div>
                                <h3>Contact Information</h3>
                                <TextInput
                                    label="Email"
                                    name="email"
                                    type="email"
                                    id="email"
                                    placeholder="Email"
                                    onChange={handleShipFormSubmit}
                                    />
                            </div>
                                <TextInput
                                    label="First Name"
                                    name="firstName"
                                    type="text"
                                    id="firstName"
                                    placeholder="First Name"
                                    onChange={handleShipFormSubmit}
                                    />
                                <TextInput
                                    label="Last Name"
                                    name="lastName"
                                    type="text"
                                    id="lastName"
                                    placeholder="Last Name"
                                    onChange={handleShipFormSubmit}
                                    />
                                <h3>Shipping Information</h3>
                                <TextInput
                                    label="Address"
                                    name="address"
                                    type="text"
                                    placeholder="Address"
                                    id="address"
                                    onChange={handleShipFormSubmit}
                                    />
                                <TextInput
                                    label="Apartment"
                                    name="apartment"
                                    type="text"
                                    placeholder="Apt/Suite"
                                    id="apartment"
                                    onChange={handleShipFormSubmit}
                                    />
                                <TextInput
                                    label="City"
                                    name="city"
                                    type="text"
                                    placeholder="City"
                                    id="city"
                                    onChange={handleShipFormSubmit}
                                    />
                                <TextInput
                                    label="Zip Code"
                                    name="zipCode"
                                    type="text"
                                    placeholder="Zip Code"
                                    id="zipCode"
                                    onChange={handleShipFormSubmit}
                                    />
                                <StateSelectLabel htmlFor="state">
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
                                </StateSelectLabel>
                                    <Button 
                                        type="button"
                                        onClick={() => setShipFormSubmit(true)}
                                        >
                                        Submit
                                    </Button>
                        </Form>
                        </ShipFormInputCont>
            )}
            </Formik>
                        {
                            shipFormSubmit && 
                            <ShipingOptions>
                            <h3>Shipping Options</h3>
                            <label htmlFor="nextDay">
                            Next Day Shipping (additional $10)
                                <input 
                                    onChange={shipMethodChange}
                                    value="10"
                                    type="radio" 
                                    name="shipMethod" 
                                    id="nextDay" />
                            </label>
                            <label htmlFor="standard">
                                Standard Ground Shipping (5 days) Free
                                <input 
                                    onChange={shipMethodChange}
                                    value="0"
                                    type="radio" 
                                    name="shipMethod" 
                                    id="ground" />
                            </label>
                        </ShipingOptions>
                        }
                    </CheckoutFormWrapper>
    )
}

export default ShippingForm
