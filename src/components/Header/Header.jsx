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

    return (
        <HeaderWrapper>
            <HeaderLogo>
                <Link to="/">
                 ShopFresh
                </Link>
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
            {/* {
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
            <HeaderCheckoutButtonCont>
                
            </HeaderCheckoutButtonCont>
        } */}
                <ul>
                    <CartNavItemsLi 
                    >
                        <Link  to="/">
                            Shop
                        </Link>
                    </CartNavItemsLi>
                    {
                        cart.length ?
                        <CartNavItemsLi>
                            <Link 
                                to="/cart"
                                state={{ total: 'total' }}
                                style={{ margin: '0', padding: '0'}}
                                // style={{ color: 'white'}}
                            >
                                <Button style={{background: `${COLORS.accentPurpleGrad}`, margin: '0'}}>
                                <AiOutlineShoppingCart 
                                    style={{color: `${COLORS.textWhite}`, position: 'relative', fontSize: '1.5rem'}} 
                                />
                                    <CartQuantityIcon
                                        top='15px'
                                        right='25px'
                                    >
                                        {cart.length}
                                    </CartQuantityIcon>
                                </Button>
                            </Link>
                        </CartNavItemsLi>
                        :
                        <CartNavItemsLi 
                            className={cart.length ? "cart-active" : null}
                        >
                            <Link to="/cart">
                            <AiOutlineShoppingCart 
                                style={{color: '#fff', position: 'relative', fontSize: '1.5rem'}} 
                            />
                            </Link>
                        </CartNavItemsLi>  
                    }
                </ul>
            </HeaderNav>
        </HeaderWrapper>
    )
}

export default Header
