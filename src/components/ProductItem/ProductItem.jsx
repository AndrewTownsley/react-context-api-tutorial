import { CartState } from '../../Context/Context';
import React, { useState } from 'react';
import { Button } from '../../StyleProps';
import { ProductCard,ProductCardImgCont, ProductCardBtnCont, PriceClearanceBefore, PriceClearanceAfter } from './ProductItemStyle';
import RatingOnCard from '../RatingOnCard';
import { AiOutlineShoppingCart, AiOutlineClose } from 'react-icons/ai';
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
                      onClick={() => {
                        setInStock(inStock -1)
                        setProductQty(product.productQty + 1)
                        dispatch({
                          type: "ADD_TO_CART",
                          payload: product
                        })
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
