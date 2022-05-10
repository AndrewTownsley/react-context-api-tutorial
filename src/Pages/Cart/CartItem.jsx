import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartState } from '../../Context/Context';
import { PriceClearanceAfter, PriceClearanceBefore, ProductCardImgCont } from '../../components/ProductItem/ProductItemStyle';
import RatingOnCard from '../../components/RatingOnCard';
import { Button } from '../../StyleProps';
import { CheckoutItemList, CheckoutCard } from '../Checkout/CheckoutStyle';
import { CartItemCard, CartItemCardImgCont, CartItemControls } from './CartStyle';
import { AiOutlineClose } from 'react-icons/ai';
import { BsImage } from 'react-icons/bs';

const CartItem = ({ product }) => {
    // const [selectedQty, setSelectedQty] = useState(1);
    const { state: { cart, inStock },
    productQty, setProductQty, 
        dispatch } = CartState();        
        
        return (
            <CartItemCard>
                    <CartItemCardImgCont>
                        <img src="https://picsum.photos/80" alt="product" />
                    </CartItemCardImgCont>
                    <section>
                        <div>
                
                       <h5>
                           {
                            product.name.length > 17 
                            ?
                            <Link 
                                to="/productdetail"
                                state= {{from: "productitem", product: product}}
                            >
                           {product.name.substring(0,17) + "..."}
                            </Link>
                           :
                            <Link 
                                to="/productdetail"
                                state= {{from: "productitem", product: product}}
                            >
                             {product.name}
                            </Link>
                           }
                           </h5>
                       <RatingOnCard rating={product.rating} />
                        </div>
                       { product.nextDay ? <p>Next Day Shipping</p> : null}
                       {
                        inStock <= 5 ? 
                        <p>
                          <PriceClearanceBefore>{product.price}</PriceClearanceBefore> <PriceClearanceAfter>{parseInt(product.price * .800)}.00</PriceClearanceAfter>
                        </p>
                        :
                       <p>${product.price}</p>            
                       }
                    </section>
                    <CartItemControls>
                        <div>

                            <select 
                                // value={productQty}
                                name="productQuantity"
                                id="productQuantity"
                                onChange={(e) => {
                                    console.log(cart)
                                    console.log("e.value:", e.target.value)
                                    setProductQty(e.target.value)
                                    dispatch({
                                        type: "UPDATE_CART_QUANTITY",
                                        payload: {
                                            id: product.id,
                                            qty: e.target.value,
                                            productQty: e.target.value
                                        }
                                    })
                                    dispatch({
                                        type: "UPDATE_PRODUCT_QUANTITY",
                                        payload: {
                                            id: product.id,
                                            qty: e.target.value
                                    }})
                                }}
                                >
                                {
                                    product.inStock > 0 ? 
                                    ([...Array(product.inStock).keys()].map((x) => (
                                        <option key={x + 1}>{x + 1}</option>
                                        )))
                                        :
                                    <option>0</option>
                                }
                            </select> <span> Quantity</span>
                        </div>
                            <Button 
                                onClick={() => {
                                dispatch({
                                    type: "REMOVE_FROM_CART",
                                    payload: product
                                    })
                                }}
                                style={{ margin: '0 auto 0.5rem auto' }}
                            >
                                <AiOutlineClose 
                                        style={{fontSize: '1rem', paddingRight: '5px'}} 
                                />
                               Remove
                            </Button>
                    </CartItemControls>
            </CartItemCard>
    )
}


export default CartItem
