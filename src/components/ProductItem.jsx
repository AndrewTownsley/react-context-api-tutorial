import { CartState } from '../Context/Context';

const ProductDetail = ({ product }) => {
  const {cart, setCart} = CartState();
  console.log(product.inStock);

    return (
        <article className='product-card'>
        <h5>{product.name}</h5>
        <p>${product.price}</p>
        {
          product.nextDay ? <p>Next Day Shipping</p> : null
        }
        <p>Rating: {product.rating}/5</p>
        <p>inStock: {product.inStock}</p>
        {product.inStock !== 0 ?
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
