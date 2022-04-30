import React, { useState} from 'react'
import { Link, useLocation } from 'react-router-dom';
import { CartState } from '../../Context/Context';
import CheckoutItem from './CheckoutItem';
import ShippingForm from '../../components/Checkout/ShippingForm';
import PaymentForm from '../../components/Checkout/PaymentForm';
import ConfirmationModal from '../../components/Checkout/ConfirmationModal';
import { CheckoutWrapper, CheckoutSummaryContainer } from './CheckoutStyle';
import { UserInfo, ShippingFormCont, CheckoutSummaryTable, CheckoutSummaryTotals } from '../../components/Checkout/CheckoutStyles/ShippingFormStyle';
import { Button } from '../../StyleProps';

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
        <CheckoutWrapper>
            <div>
                <Link to="/cart">
                    <Button >
                        Back to Cart
                    </Button>
                </Link>
            </div>
            <header>
                <h2>Complete Payment</h2>
                {/* <h4>-- USER INFO!! --</h4> */}
            </header>
            {/* <section className="userInfo">
                <h3>Ship To:</h3>
                <p>{shipFormData.email}</p>
                <p>{shipFormData.firstName}{shipFormData.lastName}</p>
                <p>{shipFormData.address}</p>
                <p>{shipFormData.city} {shipFormData.zipCode}</p>
            </section> */}
                <ShippingFormCont>
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
                </ShippingFormCont>
                <CheckoutSummaryContainer>
                {
                shipFormData.email 
                    ? 
                <UserInfo>
                    {/* <h3>Ship To:</h3> */}
                    <div>
                        <p>
                            <strong>Contact: </strong>
                                {shipFormData.firstName} {shipFormData.lastName}
                        </p>
                        <p>{shipFormData.email}</p>
                        </div>
                    <div>
                        <p>
                            <strong>Ship to: </strong> 
                            <br/>
                                {shipFormData.address}
                            <br/> 
                               Apt. {shipFormData.apartment ? ` ${shipFormData.apartment}` : null}
                        </p>
                        <p>{shipFormData.city} {shipFormData.state} {shipFormData.zipCode}
                        </p>
                    </div>
                </UserInfo>
                :
                <></>
            }
                <CheckoutSummaryTable>
                    {
                        cart.map((product, index) => (
                            <CheckoutItem
                            key={index}
                            product={product}
                            className="cart-item checkout-item"
                            />
                            ))
                    }
                    <p></p>
                    <CheckoutSummaryTotals>
                        <div>
                            Shipping:
                                {
                                    groundShipping ?
                                    <span>$0.00</span>
                                    :
                                    <span>$10.00</span>
                                }
                        </div>
                        <div>
                            <span><h4>Total:</h4></span>
                            <span><h4>${total}.00</h4></span>
                        </div>
                    </CheckoutSummaryTotals>
                </CheckoutSummaryTable>
                </CheckoutSummaryContainer>
        </CheckoutWrapper>
            </>)  
}
        </div>
    )
}

export default Checkout


