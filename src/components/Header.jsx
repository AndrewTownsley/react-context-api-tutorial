import React, {  useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartState } from '../Context/Context';

const Header = () => {
    const { state: {cart}, dispatch, productDispatch } = CartState();
    return (
        <div className='header'>
            <h2>Header Component</h2>
            <label htmlFor="productSearch">
                <input
                    onChange={(e) => {
                        productDispatch({
                            type: "FILTER_BY_SEARCH",
                            payload: e.target.value 
                        })
                    }}
                    type="text" 
                    id="search"
                    placeholder="search products"
                />
            </label>
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
