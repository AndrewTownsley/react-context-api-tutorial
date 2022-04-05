import { CartState } from '../../Context/Context';
import React, { useState } from 'react';
import { ProductCard } from './ProductItemStyle';
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
        <h5>{product.name}</h5>
        <p>${product.price}</p>
        { product.nextDay ? <p>Next Day Shipping</p> : null}
        <RatingOnCard rating={product.rating} />
        <p className={inStock === 1 ? "low-stock" : ""}>inStock: {inStock}</p>

        { cart.some(p => p.id === product.id ) ?
          (
            <button
              className={inStock !== 0 ? "" : "out-of-stock"}
              onClick={() => {
                setInStock(inStock + 1)
                dispatch({  
                  type: "REMOVE_FROM_CART",
                  payload: product
                })
              }}
            >
              Remove from cart
            </button>
          )
          : 
          (
          <>
            <button 
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
            </button>
          </>
         
      ) 
    }

    </ProductCard>
    )
}

export default ProductDetail;
