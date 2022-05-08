import React, { useEffect, useState} from 'react'
import { Link, useLocation } from 'react-router-dom';
import { CartState } from '../../Context/Context';
import CheckoutItem from './CheckoutItem';
import ShippingForm from '../../components/Checkout/ShippingForm';
import FormikForm from '../../components/Checkout/FormikForm';
import PaymentForm from '../../components/Checkout/PaymentForm';
import ConfirmationModal from '../../components/Checkout/ConfirmationModal';
import { CheckoutWrapper, CheckoutSummaryContainer } from './CheckoutStyle';
import { UserInfo, ShippingFormCont, CheckoutHeader, CheckoutSummaryTable, CheckoutSummaryTotals } from '../../components/Checkout/CheckoutStyles/ShippingFormStyle';
import { Button } from '../../StyleProps';

const Checkout = ({ total, setTotal, orderConfirmation, setOrderConfirmation, openConfirmationModal, groundShipping, setGroundShipping }) => {
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

    // check if shipFormData is in sessionStorage,
    // if it is, set shipFormData to sessionStorage
    // if not, set shipFormData to default values
    useEffect(() => {
        const checkSessionStorage = () => {
            if (sessionStorage.getItem("shipFormData")) {
                setShipFormData(JSON.parse(sessionStorage.getItem("shipFormData")))
            } else {
                setShipFormData({
                    email: "",
                    firstName: "",
                    lastName: "",
                    address: "",
                    apartment: "",
                    city: "",
                    zipCode: "",
                })
            }
        }
        checkSessionStorage();
    }, [])
        

    return (
        <div>
              {
                orderConfirmation === (true) ?
                (<ConfirmationModal
                    shipFormData={shipFormData}
                    setShipFormData={setShipFormData}
                    groundShipping={groundShipping}
                    setGroundShipping={setGroundShipping}
                    paymentFormActive={paymentFormActive}
                    setPaymentFormActive={setPaymentFormActive}
                    setOrderConfirmation={setOrderConfirmation}
                 />
                )
                :
        (    
        <>
            <CheckoutHeader>
            {/* <div> */}
                    <Link to="/cart">
                        <Button>
                            Back to Cart
                        </Button>
                    </Link>
                <h2>Complete Payment</h2>
            {/* </div> */}
            </CheckoutHeader>
        <CheckoutWrapper>
                <ShippingFormCont>
                    <FormikForm
                        total={total}
                        setTotal={setTotal}
                        setPaymentFormActive={setPaymentFormActive}
                        shipFormData={shipFormData}
                        setShipFormData={setShipFormData}
                        groundShipping={groundShipping}
                        setGroundShipping={setGroundShipping}
                    />
                    {/* <ShippingForm
                        total={total}
                        setTotal={setTotal}
                        setPaymentFormActive={setPaymentFormActive}
                        shipFormData={shipFormData}
                        setShipFormData={setShipFormData}
                        groundShipping={groundShipping}
                        setGroundShipping={setGroundShipping}
                    /> */}
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


