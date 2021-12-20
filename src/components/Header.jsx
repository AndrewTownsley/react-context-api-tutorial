import React, {  useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context';

const Header = () => {
    const { cart, setCart} = useContext(CartContext);

    return (
        <div className='header'>
            <h2>Header Component</h2>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/cart">Cart{cart.length}</Link></li>  
                </ul>
            </nav>
        </div>
    )
}

export default Header
