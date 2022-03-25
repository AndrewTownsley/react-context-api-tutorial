import React, {  useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartState } from '../../Context/Context';
import HeaderContainer from './HeaderContainer';

const Header = () => {
    const { state: {cart}, dispatch, productDispatch } = CartState();

    return (
        <HeaderContainer>
            <h2>Header</h2>
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
                    <li className={cart.length ? "cart-active" : null}><Link to="/cart">Cart{cart.length}</Link></li>  
                </ul>
            </nav>
        </HeaderContainer>
    )
}

export default Header
