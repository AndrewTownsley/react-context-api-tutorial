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
        {cart.includes(product) ?
        (
        <button
          className="add remove"
          onClick={() => setCart(cart.filter((c) => c.id !== product.id))}
        >
          Remove from Cart
        </button>
      ) 
      : 
      (
        <button className="add" onClick={() => setCart([...cart, product])}>
          Add to Cart
        </button>
      )}
    </article>
    )
}

export default ProductDetail
