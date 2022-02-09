import React, { useState } from 'react';

const CheckoutContext = React.createContext();



const CheckoutProvider = ({children}) => {
const [shipFormData, setShipFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
}) 


}