import React from 'react'
import { CartState } from '../../Context/Context';
import { PriceClearanceAfter, PriceClearanceBefore, ProductCardBtnCont, ProductCardImgCont } from '../../components/ProductItem/ProductItemStyle'
import { CheckoutCard } from './CheckoutStyle';
import RatingOnCard from '../../components/RatingOnCard'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Button } from '../../StyleProps';

const CheckoutItem = ({ product, cart, setCart }) => {
    const { 
        state: { inStock, setInStock },
        dispatch 
      } = CartState();

  return (
    <CheckoutCard>
        <ProductCardImgCont>
          <img src="https://picsum.photos/220" alt="product" />
        </ProductCardImgCont>
        <section>
           <h5>{product.name}</h5>
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
                   <AiOutlineShoppingCart 
                            style={{fontSize: '1rem', paddingRight: '5px'}} 
                   />
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
                    <AiOutlineShoppingCart 
                            style={{fontSize: '1rem', paddingRight: '5px'}} 
                        />
                  Add to Cart
                </Button>
              </>

              ) 
            }
        </ProductCardBtnCont>

    </CheckoutCard>
  )
}

export default CheckoutItem