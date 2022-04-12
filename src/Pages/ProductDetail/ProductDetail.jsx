import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../../StyleProps';
import { ProductDetailWrapper } from './ProductDetailStyle'

const ProductDetail = ({ product, state }) => {
    const location = useLocation();
    console.log(location)

  return (
    <ProductDetailWrapper>
        <Button>
            <Link to="/">Continue Shopping</Link>
        </Button>
        <h1>Product Detail</h1>
        <h2>{location.state.product.name}</h2>
        <h2>{location.state.product.price}</h2>
        <h2>{location.state.product.rating}</h2>
    </ProductDetailWrapper>
  )
}

export default ProductDetail