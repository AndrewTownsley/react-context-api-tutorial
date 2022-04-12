import React, { useEffect} from 'react'
import { Link } from 'react-router-dom';
import { CartState } from '../../Context/Context';
import { CartWrapper, ProductContainer, CartEmpty, CartHeader } from './CartStyle';
import Footer from '../../components/Footer';
import { Button } from '../../StyleProps';
import CheckoutItem from '../Checkout/CheckoutItem';

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
                <CartHeader>  
                    <div>
                        <h3>CART SUMMARY</h3>
                        <h4><span>ITEMS:</span> {cart.length}</h4>
                        <h4><span>TOTAL:</span> ${total}.00</h4>
                    </div>
                    <Link 
                        to="/checkout"
                        state={{ total: 'total' }}
                        >
                        <Button >
                            Continue to Checkout
                        </Button>
                    </Link>
                </CartHeader>
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
