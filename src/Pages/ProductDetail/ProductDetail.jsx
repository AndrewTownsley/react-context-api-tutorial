import React, { useState } from 'react'
import { CartState } from '../../Context/Context';
import { Link, useLocation } from 'react-router-dom';
import { Button, COLORS } from '../../StyleProps';
import RatingOnCard from '../../components/RatingOnCard';
import { AiOutlineShoppingCart, AiOutlineClose } from 'react-icons/ai';
import { ProductDetailWrapper, DetailContent, DetailContentImg, DetailContentInfo, DetailCartBtnCont } from './ProductDetailStyle'
// import { ProductCardBtnCont } from '../../components/ProductItem/ProductItemStyle';

const ProductDetail = ({ product }) => {
  const { 
    state: { cart },
    dispatch 
  } = CartState();
  const location = useLocation();
  const [inStock, setInStock] = useState(location.state.product.inStock)
  console.log(cart);

  return (
    <ProductDetailWrapper>
            <Link to="/">
              <Button>
              Continue Shopping
              </Button>
            </Link>
        <DetailContent>
          <DetailContentImg>
            <img src="https://picsum.photos/350" alt="product" />
          </DetailContentImg>
          <DetailContentInfo>
            <h1>{location.state.product.name}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus officiis dignissimos eaque tempore, recusandae commodi corrupti consectetur aliquid molestiae? Eius necessitatibus quisquam quos quidem cupiditate quo repellendus voluptate accusamus officiis nostrum similique, nulla eum ipsum amet, aperiam ea.</p>
            <h2>${location.state.product.price}</h2>
            <RatingOnCard rating={location.state.product.rating}/>
              <DetailCartBtnCont>

                      { cart.some(p => p.name === location.state.product.name ) ?
                        (
                          <Button
                          onClick={() => {
                            setInStock(inStock + 1)
                            dispatch({  
                              type: "REMOVE_FROM_CART",
                              payload: location.state.product
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
                            className={inStock !== 0 ? "" : "out-of-stock"} 
                            onClick={() => {
                              setInStock(inStock -1)
                              dispatch({
                                type: "ADD_TO_CART",
                                payload: location.state.product
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
                      <Link 
                        to="/checkout"
                        style={{ padding: '0px' }}  
                      >
                        <Button
                          style={{ background: `${COLORS.accentYellow}`, color: `${COLORS.textDark}` }}
                        >
                          Checkout
                        </Button>
                      </Link>
                </DetailCartBtnCont>
          
          </DetailContentInfo>
        </DetailContent>
    </ProductDetailWrapper>
  )
}

export default ProductDetail