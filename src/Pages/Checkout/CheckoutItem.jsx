import React, { useState } from 'react';
import { PriceClearanceAfter, PriceClearanceBefore, ProductCardImgCont } from '../../components/ProductItem/ProductItemStyle';
import RatingOnCard from '../../components/RatingOnCard';
import { CartState } from '../../Context/Context';
import { Button } from '../../StyleProps';
import { CheckoutItemList, CheckoutCard, CheckoutCardImgCont } from './CheckoutStyle';
import { AiOutlineClose } from 'react-icons/ai';
import { CartItemControls } from '../../components/CartItem/CartItemStyle';

const CheckoutItem = ({ product }) => {
    const [selectedQty, setSelectedQty] = useState(0);
    const { state: { cart, inStock }, 
        dispatch } = CartState();        
        
        return (
            <CheckoutCard>
            <CheckoutCardImgCont>
              <img src="https://picsum.photos/90" alt="product" />
            </CheckoutCardImgCont>
            <section>
                <div>

               <h5>
                   {
                    product.name.length > 17 
                    ?
                   product.name.substring(0,17) + "..."
                   :
                     product.name
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
                        value={product.productQty}
                        name="productQuantity"
                        id="productQuantity"
                        onChange={(e) => {
                            console.log(cart)
                            setSelectedQty(e.target.value)
                            dispatch({
                                type: "UPDATE_CART_QUANTITY",
                                payload: {
                                    id: product.id,
                                    qty: e.target.value
                                }
                            })
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
            </CheckoutCard>
    )
}


export default CheckoutItem
