import React, {  useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartState } from '../../Context/Context';
import {HeaderWrapper, HeaderLogo, HeaderSearch, HeaderNav} from './HeaderStyle';
import { GiLindenLeaf } from 'react-icons/gi'
const Header = () => {
    const { state: {cart}, dispatch, productDispatch } = CartState();

    return (
        <HeaderWrapper>
            <HeaderLogo><GiLindenLeaf style={{color:'#14a76c'}}/>  fresh commerce</HeaderLogo>
            <label htmlFor="productSearch">
                <HeaderSearch
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
            <HeaderNav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li className={cart.length ? "cart-active" : null}><Link to="/cart">Cart{cart.length}</Link></li>  
                </ul>
            </HeaderNav>
        </HeaderWrapper>
    )
}

export default Header
