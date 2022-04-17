import React, { useEffect, useState } from 'react'
import { CartState } from '../../Context/Context';
import { PaymentFormWrapper } from '../../Pages/Checkout/CheckoutStyle';
import { Button } from '../../StyleProps';

const PaymentForm = ({ openConfirmationModal }) => {
    const { state: { cart, inStock },
    productQty, setProductQty, 
        dispatch } = CartState();

        console.log(cart)


    const [month, setMonth] = useState("")
    const [days, setDays] = useState("")
    const months = [
        "January",
        "February",
        "March", 
        "April",
        "May", 
        "June", 
        "July", 
        "August", 
        "September", 
        "October", 
        "November", 
        "December"
    ]
   
    const createYears = () => {
        let yearsArray = []
        for(let i = 0; i < 20; i++) {
            yearsArray.push(new Date().getFullYear() + i)
        }
        return yearsArray
    }
    createYears()

    return (
        <PaymentFormWrapper>
            <h3>Payment Form</h3>
            <form action="submit">
                <label htmlFor="creditCardName">
                    <input 
                        id="creditCardName" 
                        type="text" 
                        placeholder="Name on card"
                    />
                </label>
                <label htmlFor="creditCardCvv">
                    <input 
                        id="creditCardCvv" 
                        type="text" 
                        min="3"
                        maxLength="3"
                        placeholder="CVV"
                    />
                </label>
                <label htmlFor="creditCardNumber">
                    <input 
                        id="creditCardNumber" 
                        type="text" 
                        min="16"
                        maxLength="16"
                        placeholder="Card Number"
                    />
                </label>
                <label htmlFor="exp-select">
                    <p>Expiration Date</p>
                <select 
                    name="credit-card-exp-month" 
                    id="creditCardExpMonth"
                    onChange={(e) => setMonth(e.target.value)}
                >
                    {
                        months.map((month) => (
                            <option key={month} value={month}>{month}</option>
                        ))
                    }
                </select>
                <select name="credit-card-exp-year" id="creditCardExpYear">
                    {
                        createYears().map((year) => (
                            <option key={year} value={year}>{year}</option>
                        ))
                    }
                </select>
                </label>
            </form>
            {/* // onClick={ () => openConfirmationModal() } */}
                <Button 
                    onClick={() => {
                        openConfirmationModal()
                        dispatch({
                            type: "CLEAR_CART",
                            payload: {}
                        })
                    }}
                >
                    Confirm Card
                </Button>
        </PaymentFormWrapper>
    )
}

export default PaymentForm
