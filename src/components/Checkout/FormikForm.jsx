import React, { useEffect, useState } from 'react'
import { CartState } from '../../Context/Context';
import Checkout from '../../Pages/Checkout/Checkout';
import TextInput from '../TextInput';
import { Button } from '../../StyleProps';
import { CheckoutFormWrapper, ShipFormInputCont, ShipingOptions, StateSelectLabel } from './CheckoutStyles/ShippingFormStyle';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';


const ShippingForm = ({ total, setTotal, setPaymentFormActive, shipFormData, setShipFormData }) => {
    const { state: { cart, setCart, states }} = CartState();
    const [shipFormSubmit, setShipFormSubmit] = useState(false);
    const [shipTotal, setShipTotal] = useState(0)
    const [groundShipping, setGroundShipping] = useState(true);

    const validate = Yup.object({
        email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
        firstName: Yup.string()
            .required('Required'),
        lastName: Yup.string()
            .required('Required'),
        address: Yup.string()
            .required('Required'),
        apartment: Yup.string()
            .required('Required'),
        city: Yup.string()
            .required('Required'),
        zipCode: Yup.string()
            .required('Required'),
        // state: Yup.string()
            // .required('Required')
            // .oneOf(states, 'State is required'),
    })
  

    const handleShipFormSubmit = (e) => {
        // e.preventDefault();
        const { name, value } = e.target;
        setShipFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const shipMethodChange = (e) => {
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
            // onSubmit={(e) => e.preventDefault}
            // action="submit"
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
                validationSchema={validate}
                // onSubmit={(e) => {e.preventDefault(); Formik.handleSubmit(e)}}
                // handleChange={(e) => {
                //     const { name, value } = e.target;
                //     setShipFormData((prevState) => ({
                //         ...prevState,
                //         [name]: value,
                //     }
                //     )
                //     )
                // }
                // }
            >
                {formik => (
                    <ShipFormInputCont 
                    // onChange={((values, e) => {
                    //     setShipFormSubmit(true);
                    //     setShipFormData(values);
                    //     setPaymentFormActive(true);
                    //     console.log("shipFormData",shipFormData);
                    // })}
                    
                        onSubmit={(e) => e.preventDefault()}
                    >
                        {console.log("formik.errors", formik.errors)}
                            <div>
                                <h3>Contact Information</h3>
                                <TextInput
                                    label="Email"
                                    name="email"
                                    // type="email"
                                    id="email"
                                    placeholder="Email"
                                    value={shipFormData.email}
                                    // value={e.target.value}
                                    // onChange={formik.handleChange}
                                    onChange={handleShipFormSubmit}
                                    onBlur={formik.handleBlur}
                                    />
                            </div>
                                <TextInput
                                    label="First Name"
                                    name="firstName"
                                    type="text"
                                    id="firstName"
                                    placeholder="First Name"
                                    value={shipFormData.firstName}
                                    // onChange={handleShipFormSubmit}
                                    // onChange={formik.handleChange}
                                    onChange={handleShipFormSubmit}
                                    // onBlur={formik.handleBlur}
                                    onBlur={(e) => console.log(e.target.value)}

                                />
                                <TextInput
                                    label="Last Name"
                                    name="lastName"
                                    type="text"
                                    id="lastName"
                                    placeholder="Last Name"
                                    value={shipFormData.lastName}
                                    // onChange={handleShipFormSubmit}
                                    // onChange={formik.handleChange}
                                    onChange={handleShipFormSubmit}
                                    // onBlur={formik.handleBlur}  
                                    onBlur={(e) => console.log(e.target.value)}
                              
                                />
                                <h3>Shipping Information</h3>
                                <TextInput
                                    label="Address"
                                    name="address"
                                    type="text"
                                    placeholder="Address"
                                    id="address"
                                    value={shipFormData.address}
                                    // onChange={handleShipFormSubmit}
                                    // onChange={formik.handleChange}
                                    onChange={handleShipFormSubmit}
                                    // onBlur={formik.handleBlur}  
                                    onBlur={(e) => console.log(e.target.value)}
                              
                                />
                                <TextInput
                                    label="Apartment"
                                    name="apartment"
                                    type="text"
                                    placeholder="Apt/Suite"
                                    id="apartment"
                                    value={shipFormData.apartment}
                                    // onChange={handleShipFormSubmit}
                                    // onChange={formik.handleChange}
                                    onChange={handleShipFormSubmit}
                                    // onBlur={formik.handleBlur}
                                    onBlur={(e) => console.log(e.target.value)}
                                
                                />
                                <TextInput
                                    label="City"
                                    name="city"
                                    type="text"
                                    placeholder="City"
                                    id="city"
                                    value={shipFormData.city}
                                    // onChange={handleShipFormSubmit}
                                    // onChange={formik.handleChange}
                                    onChange={handleShipFormSubmit}
                                    // onBlur={formik.handleBlur}    
                                    onBlur={(e) => console.log(e.target.value)}
                            
                                />
                                <TextInput
                                    label="Zip Code"
                                    name="zipCode"
                                    type="text"
                                    placeholder="Zip Code"
                                    id="zipCode"
                                    value={shipFormData.zipCode}
                                    // onChange={handleShipFormSubmit}
                                    // onChange={formik.handleChange}

                                    onChange={handleShipFormSubmit}
                                    // onBlur={formik.handleBlur}
                                    onBlur={(e) => console.log(e.target.value)}
                                
                                />
                                <StateSelectLabel htmlFor="state">
                                    <select 
                                        id="state"
                                        name="state"
                                        // onChange={handleShipFormSubmit} 
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
                                        // type="submit"
                                        onClick={() => setShipFormSubmit(true)}
                                        >
                                        Submit
                                    </Button>
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
