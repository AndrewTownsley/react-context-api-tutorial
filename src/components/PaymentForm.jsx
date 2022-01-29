import React from 'react'

const PaymentForm = () => {
    return (
        <div className='payment-form'>
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
                        placeholder="CVV"
                    />
                </label>
                <label htmlFor="creditCardNumber">
                    <input 
                        id="creditCardNumber" 
                        type="text" 
                        placeholder="Card Number"
                    />
                </label>
                <label htmlFor="exp-select">
                    Expiration Date
                <select name="credit-card-exp-month" id="creditCardExpMonth">
                    <option value="Month"></option>
                </select>
                <select name="credit-card-exp-year" id="creditCardExpYear">
                    <option value="Year"></option>
                </select>
                </label>
            </form>
        </div>
    )
}

export default PaymentForm
