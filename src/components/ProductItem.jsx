import { CartState } from '../Context/Context';
import React, { useState } from 'react';

const ProductDetail = ({ product }) => {
  const { state: 
    {cart, setCart, decreaseCartQty},
      dispatch 
    } = CartState();
  const [inStock, setInStock] = useState(product.inStock)
  // console.log("default: ", inStock);
  
  const addItemToCart = (product) => {
    setCart([...cart, product])
    setInStock(inStock - 1);
  }

    return (
        <article className='product-card'>
        <h5>{product.name}</h5>
        <p>${product.price}</p>
        { product.nextDay ? <p>Next Day Shipping</p> : null}
        <p>Rating: {product.rating}/5</p>
        <p className={inStock === 1 ? "low-stock" : ""}>inStock: {inStock}</p>
        { cart.includes(product) ?
          (
            <button
              className={inStock !== 0 ? "" : "out-of-stock"}
              onClick={() => {
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
                dispatch({
                  type: "ADD_TO_CART",
                  payload: product
                })
              }}
              >
             
              Add to Cart
            </button>
             <label name="productQty">
             qty:
             <input 
             // onChange={(e) => setProductQuantity(e.target.value)}
             type="number" 
             id="productQty"/>
           </label>
          </>
         
      ) 
    }
    </article>
    )
}

export default ProductDetail
