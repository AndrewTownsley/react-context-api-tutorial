import React, { useState} from 'react'
import { Link, useLocation } from 'react-router-dom';
import { CartState } from '../../Context/Context';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import ShippingForm from '../../components/Checkout/ShippingForm';
import PaymentForm from '../../components/Checkout/PaymentForm';
import ConfirmationModal from '../../components/Checkout/ConfirmationModal';
import { CheckoutWrapper } from './CheckoutStyle';

const Checkout = ({ total, setTotal, openEdit, openConfirmationModal, groundShipping, setGroundShipping }) => {
    const { state: { cart, setCart, states } } = CartState();
    const [paymentFormActive, setPaymentFormActive] = useState(false)
    // const [groundShipping, setGroundShipping] = useState(true);

    const [shipFormData, setShipFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        address: "",
        apartment: "",
        city: "",
        zipCode: "",
    }) 

    // const handleShipFormSubmit = (e) => {
    //     e.preventDefault();
    //     const { name, value } = e.target;
    //     setShipFormData((prevState) => ({
    //         ...prevState,
    //         [name]: value,
    //     }))
    // }
    // console.log(shipFormData);

    console.log("total: ", total);


    return (
        <div>
              {
                openEdit === (true) ?
                (<ConfirmationModal
                    shipFormData={shipFormData}
                    setShipFormData={setShipFormData}
                    groundShipping={groundShipping}
                    setGroundShipping={setGroundShipping}
                 />
                )
                :
        (    
        <>
            <Link to="/cart"><button>Back to Cart</button></Link>
            <h4>Cart Total: ${total}</h4>
            {/* <section className="userInfo">
                <h3>Ship To:</h3>
                <p>{shipFormData.email}</p>
                <p>{shipFormData.firstName}{shipFormData.lastName}</p>
                <p>{shipFormData.address}</p>
                <p>{shipFormData.city} {shipFormData.zipCode}</p>
            </section> */}
            <CheckoutWrapper>
                <section className='checkout-form-container'>
                    <ShippingForm
                        total={total}
                        setTotal={setTotal}
                        setPaymentFormActive={setPaymentFormActive}
                        shipFormData={shipFormData}
                        setShipFormData={setShipFormData}
                        groundShipping={groundShipping}
                        setGroundShipping={setGroundShipping}
                    />
                   {
                       paymentFormActive ? 
                   <PaymentForm 
                        paymentFormActive={paymentFormActive}
                        setPaymentFormActive={setPaymentFormActive}
                        openConfirmationModal={openConfirmationModal}
                    />
                    :
                    null
                    }
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
            </CheckoutWrapper>
            </>)  
}
        </div>
    )
}

export default Checkout




    // 1.  Submit the info from the address form
    // 2.  Choose shipping option, update total price, and submit payment info.
    // 3.  Pass it to a component that shows the address, the items ordered, the total price, and shipping info, just like in the Oregon Originals page. 
    // Then show a Submit Order button and display a modal saying the order is successfully placed, and has been shipped.   
    //
    // Fill out, Validate, and submit user personal info
    // OnSubmit, show shipping options
    // once shipping is seected, show payment form.  
    // Once again, use oregon originals as an example
