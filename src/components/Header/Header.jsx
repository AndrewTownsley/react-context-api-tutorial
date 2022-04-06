import React, {  useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartState } from '../../Context/Context';
import { GiLindenLeaf } from 'react-icons/gi';
import { AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai';
import {
    HeaderWrapper, 
    HeaderLogo, 
    HeaderSearchContianer,
    HeaderSearch,
    HeaderSearchButton, 
    HeaderNav, 
    CartNavItemsLi,
    CartQuantityIcon
} from './HeaderStyle';

const Header = () => {
    const { state: {cart}, dispatch, productDispatch } = CartState();

    return (
        <HeaderWrapper>
            <HeaderLogo><GiLindenLeaf style={{color:'#14a76c'}}/>  fresh commerce</HeaderLogo>
            <HeaderSearchContianer>
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
                        <HeaderSearchButton>
                            <AiOutlineSearch/>
                        </HeaderSearchButton>
                </label>
            </HeaderSearchContianer>
            <HeaderNav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <CartNavItemsLi className={cart.length ? "cart-active" : null}>
                        <Link to="/cart">
                            Cart
                            <AiOutlineShoppingCart 
                                style={{position: 'relative', fontSize: '1.5rem'}} 
                            />
                            <CartQuantityIcon>{cart.length}</CartQuantityIcon>
                        </Link>
                    </CartNavItemsLi>  
                </ul>
            </HeaderNav>
        </HeaderWrapper>
    )
}

export default Header
