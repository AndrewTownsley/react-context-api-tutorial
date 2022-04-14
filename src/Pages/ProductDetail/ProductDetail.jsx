import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../../StyleProps';
import Rating from '../../components/Rating';
import { ProductDetailWrapper, DetailContent, DetailContentImg, DetailContentInfo } from './ProductDetailStyle'

const ProductDetail = ({ product, state }) => {
    const location = useLocation();
    console.log(location)

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
            <Rating rating={location.state.product.rating} />
            <Button>
              Add to Cart
            </Button>
          </DetailContentInfo>
        </DetailContent>
    </ProductDetailWrapper>
  )
}

export default ProductDetail