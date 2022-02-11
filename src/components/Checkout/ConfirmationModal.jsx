import React from 'react';
import { Link } from 'react-router-dom';
import { CartState } from '../../Context/Context';

const ConfirmationModal = ({ shipFormData, setShipFormData}) => {
    const { groundShipping} = CartState();
    const randomNumber = Math.floor(Math.random() * 100000)
    console.log("Confirmation ship data:", shipFormData);
    
    const date = Date.now()
    const shipDate = new Date(date);
    const shipDateString = shipDate.toDateString();
    const groundDeliveryDate = new Date(shipDate.setDate(shipDate.getDate() + 35));
    console.log("shipDate: ", shipDateString);
    console.log("ground Date: ", groundDeliveryDate);
    console.log("groundShipping: ", groundShipping);
return (
    <div>
        <h1>Order Confirmation</h1>
        <p>confirmation #{randomNumber}</p>
   
        <h4>Estimated delivery date: {
            groundShipping ? 
            groundDeliveryDate.toDateString()
            :
            shipDateString
        }</h4>
        <p><strong>Shipping to:</strong> {shipFormData.address}</p>
        <p>{shipFormData.city} {shipFormData.state} {shipFormData.zipCode}
        </p>        <Link to="/">Continue Shopping...</Link>
    </div>
)
};

export default ConfirmationModal;