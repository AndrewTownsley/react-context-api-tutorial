import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartState } from '../../Context/Context';
import { CheckoutItem } from '../Checkout/CheckoutItem';
import { CartWrapper, ProductContainer, CartEmpty, CartHeader } from './CartStyle';
import Footer from '../../components/Footer';
import { Button } from '../../StyleProps';

export const Cart = ({ total, setTotal}) => {
    const { state: { cart, setCart}} = CartState();

    useEffect(() => {
        setTotal(cart.reduce((a, b) => a + Number(b.price) * Number(b.qty), 0))
    }, [cart, setTotal, total])
      

    return (
        <>
        { 
        cart.length !== 0
             ?
            (<CartWrapper>
                <CartHeader>  
                    <div>
                        <h3>Cart</h3>
                        <h4>{cart.length} Items</h4>
                        <h5>Total: ${total}</h5>
                    </div>
                    <Link 
                        to="/checkout"
                        state={{ total: 'total' }}
                        >
                        <Button>
                            Checkout
                        </Button>
                    </Link>
                </CartHeader>
                <ProductContainer>
                    {
                        cart.map((product, index) => (
                            <CheckoutItem 
                                key={index} 
                                product={product} 
                                cart={cart} 
                                setCart={setCart}
                            />
                            
                            ))
                    }
                </ProductContainer>
            </CartWrapper>)
        : 
            (
                <CartEmpty>
                    <h3>Cart is Empty!</h3>
                    <Link to="/"><button>Continue Shopping</button></Link>
                </CartEmpty>
            )
        }
        <Footer/>
        </>

    )
}


export default Cart
