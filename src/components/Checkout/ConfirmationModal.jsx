import React from 'react';
import { Link } from 'react-router-dom';
import { CartState } from '../../Context/Context';

const ConfirmationModal = ({ shipFormData, setShipFormData}) => {
    const { state: {cart, setOpenEdit, modalRef}} = CartState();
    const randomNumber = Math.floor(Math.random() * 100000)
    console.log("Confirmation ship data:", shipFormData);
    
    const shipDate = new Date();
return (
    <div>
        <h1>Order Confirmation</h1>
        <p>confirmation #{randomNumber}</p>
   
        <h4>{shipDate}</h4>
        <p><strong>Shipping to:</strong> {shipFormData.address}</p>
        <p>{shipFormData.city} {shipFormData.state} {shipFormData.zipCode}
        </p>        <Link to="/">Continue Shopping...</Link>
    </div>
)
};

export default ConfirmationModal;