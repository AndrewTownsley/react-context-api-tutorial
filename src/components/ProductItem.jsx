import { CartState } from '../Context/Context';

const ProductDetail = ({ product }) => {
  const {cart, setCart} = CartState();

    return (
        <article className='product-card'>
        <h5>{product.name}</h5>
        <p>${product.price}</p>
        {
          product.nextDay ? <p>Next Day Shipping</p> : null
        }
        <p>Rating: {product.rating}/5</p>
        <p>inStock: {product.instock}</p>
        {product.instock !== 0 ?
          (
            <button className="add" onClick={() => setCart([...cart, product])}>
              Add to Cart
            </button>
          )
          : 
          (
            <button
            className="out-of-stock"
            >
          Out of Stock
        </button>
      ) 
    }
    </article>
    )
}

export default ProductDetail
