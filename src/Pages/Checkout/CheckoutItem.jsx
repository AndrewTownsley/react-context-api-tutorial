import React, { useState } from 'react';
import { PriceClearanceAfter, PriceClearanceBefore, ProductCardImgCont } from '../../components/ProductItem/ProductItemStyle';
import RatingOnCard from '../../components/RatingOnCard';
import { CartState } from '../../Context/Context';
import { Button, FONTS, COLORS } from '../../StyleProps';
import { CheckoutItemList, CheckoutCard, CheckoutCardImgCont, CheckoutCardInfo } from './CheckoutStyle';
import { AiOutlineClose } from 'react-icons/ai';
import { CheckoutItemControls } from './CheckoutStyle'

const CheckoutItem = ({ product }) => {
    // const [selectedQty, setSelectedQty] = useState(0);
    const { state: { cart, inStock }, 
    productQty, setInStock, dispatch } = CartState();  
        
    console.log(product.productQty);
    console.log(cart);

       
        return (
            <CheckoutCard>
                        <div>
                        <h5>
                             {product.name}
                        </h5>
                            <Button 
                                onClick={() => {
                                    // setInStock(inStock + 1)
                                    dispatch({
                                        type: "REMOVE_FROM_CART",
                                        payload: product
                                    })
                                }}
                                style={{ margin: '0' }}
                            >
                                <AiOutlineClose 
                                        style={{fontSize: `${FONTS.sizeSmall}`, paddingRight: '5px', color: `${COLORS.accentRed}`}} 
                                />
                               Delete
                            </Button>
                        </div>
                    <CheckoutCardInfo>
                        <span><span>Quantity: </span>{product.productQty}</span>
                        {
                            inStock <= 5 ? 
                            <p>
                              <PriceClearanceBefore>{product.price}</PriceClearanceBefore> <PriceClearanceAfter>{parseInt(product.price * .800)}.00</PriceClearanceAfter>
                            </p>
                            :
                            <p>${product.price}</p>            
                        }
                    </CheckoutCardInfo>
            </CheckoutCard>
    )
}


export default CheckoutItem
