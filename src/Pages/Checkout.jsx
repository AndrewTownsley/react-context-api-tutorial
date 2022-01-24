import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { CartState } from '../Context/Context';
import CheckoutItem from '../components/CheckoutItem';
import CheckoutForm from '../components/CheckoutForm';

const Checkout = ({ total, setTotal}) => {
    // const location = useLocation();
    // const { total } = location.state;
    const { state: { cart, setCart, states } } = CartState();

    // 1.  Submit the info from the address form
    // 2.  Choose shipping option, update total price, and submit payment info.
    // 3.  Pass it to a component that shows the address, the items ordered, the total price, and shipping info.  Then show a Submit Order button and display a modal saying the order is successfully placed, and has been shipped.   
    //

    return (
        <div>
            <Link to="/cart"><button>Back to Cart</button></Link>
            total: ${total}
            <section className='checkout-main'>
                <section className='checkout-form-container'>
                    <CheckoutForm/>
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
            </section>
        </div>
    )
}

export default Checkout
