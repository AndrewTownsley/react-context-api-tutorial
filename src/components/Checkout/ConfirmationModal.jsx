import React from 'react';
import { Link } from 'react-router-dom';
import { CartState } from '../../Context/Context';

const ConfirmationModal = () => {
    const { state: {cart, setOpenEdit, modalRef}} = CartState();
    const randomNumber = Math.floor(Math.random() * 100000)

return (
    <div>
        <h1>Order Confirmation</h1>
        <p>confirmation #{randomNumber}</p>
        <Link to="/">Continue Shopping...</Link>
    </div>
)
};

export default ConfirmationModal;