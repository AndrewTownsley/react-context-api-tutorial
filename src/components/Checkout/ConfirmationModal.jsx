import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { CartState } from '../../Context/Context';
import { Button, COLORS } from '../../StyleProps'

const ConfirmationWrapper = styled.section`
        height: calc(100vh - 95px);
        width: 100vw;
        display: flex;
        justify-content: center;
        margin: 2rem auto;
        div {
            margin: 0 auto;
            text-align: center;
            h1 {
                color ${COLORS.textDark}
            }
            a {
                display: flex;
                justify-content: center;
                align-items: center;
                button {
                    padding: 1rem;
                }
            }
        }
`

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
    <ConfirmationWrapper>
        <div>

            <h1>Order Confirmation</h1>
            <p>confirmation #{randomNumber}</p>
    
            <h4>Estimated delivery date:
            {
                groundShipping ? 
                groundDeliveryDate.toDateString()
                :
                shipDateString
            }
            </h4>
            <p><strong>Shipping to:</strong> {shipFormData.address}</p>
            <p>{shipFormData.city} {shipFormData.state} {shipFormData.zipCode}
            </p>   
                <Link to="/">
                    <Button>
                    Continue Shopping...
                    </Button>
                </Link>
        </div>
    </ConfirmationWrapper>
)
};

export default ConfirmationModal;