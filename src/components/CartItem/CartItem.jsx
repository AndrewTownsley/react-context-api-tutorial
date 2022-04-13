// import React, { useState, useEffect } from 'react'
// import { CartState } from '../../Context/Context';
// import { CartItemWrapper, CartItemControls } from './CartItemStyle';
// import { ProductCard, ProductCardImgCont, PriceClearanceBefore,PriceClearanceAfter } from '../ProductItem/ProductItemStyle';
// import RatingOnCard from '../RatingOnCard';
// import { Button } from '../../StyleProps';

// const CartItem = ({ product }) => {
//     const [selectedQty, setSelectedQty] = useState(0);
//     const { state: { cart, inStock }, 
//         dispatch } = CartState();


//     return (
//         <CartItemWrapper>
//             <ProductCard>
//             <ProductCardImgCont>
//               <img src="https://picsum.photos/220" alt="product" />
//             </ProductCardImgCont>
//             <section>
//                <h5>{product.name}</h5>
//                <RatingOnCard rating={product.rating} />
//                { product.nextDay ? <p>Next Day Shipping</p> : null}
//                {
//                 inStock <= 5 ? 
//                 <p>
//                   <PriceClearanceBefore>{product.price}</PriceClearanceBefore> <PriceClearanceAfter>{parseInt(product.price * .800)}.00</PriceClearanceAfter>
//                 </p>
//                 :
//                <p>${product.price}</p>            
//                }
//             </section>
//             <CartItemControls>
//                 <div>

//                     <select 
//                         value={product.productQty}
//                         name="productQuantity"
//                         id="productQuantity"
//                         onChange={(e) => {
//                             console.log(cart)
//                             setSelectedQty(e.target.value)
//                             dispatch({
//                                 type: "UPDATE_CART_QUANTITY",
//                                 payload: {
//                                     id: product.id,
//                                     qty: e.target.value
//                                 }
//                             })
//                         }}
//                         >
//                         {
//                             product.inStock > 0 ? 
//                             ([...Array(product.inStock).keys()].map((x) => (
//                                 <option key={x + 1}>{x + 1}</option>
//                                 )))
//                                 :
//                             <option>0</option>
//                         }
//                     </select> <span>Quantity</span>
//                 </div>
//                     <Button 
//                         onClick={() => {
//                         dispatch({
//                             type: "REMOVE_FROM_CART",
//                             payload: product
//                             })
//                         }}
//                         style={{ margin: '0 auto 0.5rem auto' }}
//                     >
//                         Remove Item
//                     </Button>
//             </CartItemControls>
//             </ProductCard>
//         </CartItemWrapper>
//     )
// }

// export default CartItem
