import React, { useEffect} from 'react'
import { Link } from 'react-router-dom';
import { CartState } from '../../Context/Context';
import { CartWrapper, CartContent, ProductContainer, CartEmpty, CartHeader, CartSummary, ClearCartBtn } from './CartStyle';
import Footer from '../../components/Footer';
import { Button, COLORS } from '../../StyleProps';
import CartItem from './CartItem';

export const Cart = ({ total, setTotal}) => {
    const { state: { cart, setCart, groundShipping, setCartTotal, setCartQuantity },  productQty,
    setProductQty,
    dispatch  } = CartState();
    // useEffect(() => {
    //     setTotal(cart.reduce((a, b) => a + Number(b.price) * Number(b.qty), 0))
    // }, [cart, setTotal, total])
      

    return (
        <>
        { 
        cart.length !== 0
             ?
            (<CartWrapper>
                <CartHeader>
                    <Link to="/">
                        <Button>
                            Continue Shopping
                        </Button>
                    </Link>
                </CartHeader>
                    <h2>Review your Order</h2>
                <CartContent>
                <div>
                <ProductContainer>

                    {
                        cart.map((product, index) => (
                            <CartItem 
                            key={index} 
                                product={product} 
                                cart={cart} 
                                setCart={setCart}
                            />
                            
                            ))
                    }
                </ProductContainer>
                </div>
                <div>
                    <CartSummary>  
                        <div>
                            <h3>CART SUMMARY</h3>
                            <h4><span>ITEMS:</span> {cart.length}</h4>
                            <h4><span>TOTAL:</span> ${total}.00</h4>
                        </div>
                        <Link 
                            to="/checkout"
                            state={{ total: 'total' }}
                            >
                            <Button
                              style={{ background: `${COLORS.accentYellow}`, color: `${COLORS.textDark}` }}
                              >
                                Continue to Checkout
                            </Button>
                        </Link>
                    </CartSummary>
                    <ClearCartBtn
                       onClick={() => {
                        dispatch({
                            type: "CLEAR_CART",
                            payload: []
                        })
                    }
                    }  
                    >
                        Clear Cart
                    </ClearCartBtn>
                </div>
                </CartContent>
            </CartWrapper>)
        : 
            (
                <CartEmpty>
                    <h3>Cart is Empty!</h3>
                        <Link to="/">
                            <Button>
                                Continue Shopping
                            </Button>
                        </Link>
                </CartEmpty>
            )
        }
        <Footer/>
        </>

    )
}


export default Cart
