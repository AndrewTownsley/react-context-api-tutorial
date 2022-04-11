import React, {  useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CartState } from '../../Context/Context';
import { GiLindenLeaf } from 'react-icons/gi';
import { AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai';
import { Button, COLORS } from '../../StyleProps';
import {
    HeaderWrapper, 
    HeaderLogo, 
    HeaderSearchContianer,
    HeaderSearch,
    HeaderSearchButton, 
    HeaderNav, 
    CartNavItemsLi,
    CartQuantityIcon,
    HeaderCheckoutButtonCont
} from './HeaderStyle';

const Header = () => {
    const { state: {cart}, dispatch, productDispatch } = CartState();
    const location = useLocation();
    console.log(location.pathname);

    return (
        <HeaderWrapper>
            <HeaderLogo>
                <GiLindenLeaf style={{color: `${COLORS.accentPurple}`, paddingRight: '10px' }}/>  fresh commerce
            </HeaderLogo>
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
                        <HeaderSearchButton aria-label='search-for-products'>
                            <AiOutlineSearch/>
                        </HeaderSearchButton>
                </label>
            </HeaderSearchContianer>
            <HeaderNav>
            {
                cart.length ? 
            <HeaderCheckoutButtonCont>
                    <Link 
                        to="/cart"
                        state={{ total: 'total' }}
                        style={{ color: 'white'}}
                        >
                        <Button>
                        View Cart
                </Button>
                    </Link>
            </HeaderCheckoutButtonCont>
                    
            :
            <></>
        }
                <ul>
                    <CartNavItemsLi 
                        color={location.pathname === '/' ? `${COLORS.accentPurple}` : "#444"}
                        display={location.pathname === '/' ? 'block' : 'none'}
                    >
                        <Link  to="/">
                            Shop
                        </Link>
                    </CartNavItemsLi>
                    <CartNavItemsLi 
                        color={location.pathname === '/' ? "#444" : `${COLORS.accentPurple}`}
                        display={location.pathname === '/' ? 'none' : 'block'}
                        className={cart.length ? "cart-active" : null}
                    >
                        <Link to="/cart">
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
