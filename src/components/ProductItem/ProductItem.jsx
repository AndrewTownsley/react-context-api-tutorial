import { CartState } from '../../Context/Context';
import React, { useState } from 'react';
import { Button } from '../../StyleProps';
import { ProductCard,ProductCardImgCont, ProductCardBtnCont } from './ProductItemStyle';
import RatingOnCard from '../RatingOnCard';

const ProductDetail = ({ product }) => {
  const { 
      state: { cart },
      dispatch 
    } = CartState();
  const [inStock, setInStock] = useState(product.inStock)
  
  // const addItemToCart = (product) => {
  //   setCart([...cart, product])
  //   setInStock(inStock - 1);
  // }

    return (
        <ProductCard>
            <ProductCardImgCont>
              <img src="https://picsum.photos/125" alt="product" />
            </ProductCardImgCont>
            {/* <section> */}
               <h5>{product.name}</h5>
               { product.nextDay ? <p>Next Day Shipping</p> : null}
               <RatingOnCard rating={product.rating} />
               {/* <p className={inStock === 1 ? "low-stock" : ""}>inStock: {inStock}</p> */}
               <p>${product.price}</p>            
            {/* </section> */}
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
                      Remove
                    </Button>
                  )
                  : 
                  (
                    <>
                    <Button 
                      className={inStock !== 0 ? "" : "out-of-stock"} 
                      onClick={() => {
                        setInStock(inStock -1)
                        dispatch({
                          type: "ADD_TO_CART",
                          payload: product
                        })
                      }}
                      >
                      Add to Cart
                    </Button>
                  </>

                  ) 
                }
            </ProductCardBtnCont>

    </ProductCard>
    )
}

export default ProductDetail;
