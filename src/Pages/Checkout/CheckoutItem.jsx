import React, { useState } from 'react';
import { PriceClearanceAfter, PriceClearanceBefore, ProductCardImgCont } from '../../components/ProductItem/ProductItemStyle';
import RatingOnCard from '../../components/RatingOnCard';
import { CartState } from '../../Context/Context';
import { Button } from '../../StyleProps';
import { CheckoutItemList, CheckoutCard, CheckoutCardImgCont } from './CheckoutStyle';
import { AiOutlineClose } from 'react-icons/ai';
import { CheckoutItemControls } from './CheckoutStyle'

const CheckoutItem = ({ product }) => {
    // const [selectedQty, setSelectedQty] = useState(0);
    const { state: { cart, inStock }, 
    productQty, dispatch } = CartState();  
        
    console.log(productQty);
    console.log(cart);

       
        return (
            <CheckoutCard>
                    {/* <section> */}
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
                           <p><span>Qty: </span>{product.productQty}</p>
                       </div>

                       {/* <RatingOnCard rating={product.rating} /> */}
                    
                    {/* </section> */}
                    {/* <CheckoutItemControls> */}
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
                               Delete
                            </Button>
                    {
                        inStock <= 5 ? 
                        <p>
                          <PriceClearanceBefore>{product.price}</PriceClearanceBefore> <PriceClearanceAfter>{parseInt(product.price * .800)}.00</PriceClearanceAfter>
                        </p>
                        :
                        <p>${product.price}</p>            
                    }
                    {/* </CheckoutItemControls> */}
            </CheckoutCard>
    )
}


export default CheckoutItem
