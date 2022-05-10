import { CartState } from '../../Context/Context';
import React, { useState } from 'react';
import { COLORS, Button } from '../../StyleProps';
import { ProductCard,ProductCardImgCont, ProductCardBtnCont, PriceClearanceBefore, PriceClearanceAfter } from './ProductItemStyle';
import RatingOnCard from '../RatingOnCard';
import { AiOutlineShoppingCart, AiOutlineClose } from 'react-icons/ai';
import { BsImage } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  const { 
      state: { cart },
      productQty,
      setProductQty,
      dispatch 
    } = CartState();
  const [inStock, setInStock] = useState(product.inStock)
  
// console.log(ProductItem.clearance);

    return (
        <ProductCard>
            <ProductCardImgCont>
              <div>
                <BsImage size={100} color={"#999"} />
              </div>
              <img src="https://picsum.photos/220" alt="product" />
            </ProductCardImgCont>
            <section>
                <h5>
                  <Link 
                    to="/productdetail"
                      state= {{from: "productitem", product: product}}
                  >
                    {product.name}
                  </Link>
                </h5>
               <RatingOnCard rating={product.rating} />
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
            <ProductCardBtnCont>

                { cart.some(p => p.id === product.id ) ?
                  (
                    <Button
                    // className={inStock !== 0 ? "" : "out-of-stock"}
                    onClick={() => {
                      setInStock(inStock + 1)
                      dispatch({  
                        type: "REMOVE_FROM_CART",
                        payload: product
                      })
                    }}
                    >
                       <AiOutlineClose 
                                style={{fontSize: '1rem', paddingRight: '5px'}} 
                       />
                      Remove
                    </Button>
                  )
                  : 
                  (
                    <>
                    <Button 
                      onClick={(e) => {
                        setInStock(inStock -1)
                        setProductQty(product.productQty + 1)
                        dispatch({
                          type: "ADD_TO_CART",
                          payload: product
                        })
                        dispatch({
                          type: "UPDATE_PRODUCT_QUANTITY",
                          payload: {
                              id: product.id,
                              qty: 1,
                      }})
                      }}
                    >
                        <AiOutlineShoppingCart 
                          style={{fontSize: '1rem', paddingRight: '5px'}} 
                        />
                      Add to Cart
                    </Button>
                  </>

                  ) 
                }
            </ProductCardBtnCont>

    </ProductCard>
    )
}

export default ProductItem;
