import { CartState } from '../../Context/Context';
import { CheckoutItemList, CheckoutCard } from './CheckoutItemStyle';

const CheckoutItem = ({ product }) => {
    const { state: { cart },
        dispatch } = CartState();          
        
        return (
            // <div className="cart-item checkout-item">
        <CheckoutItemList>
            {/* <article className='product-card checkout-card'> */}
            <CheckoutCard>
                {/* <img src={product.image} alt={product.item} /> */}
                <h5>{product.name}</h5>
                <p>${product.price}</p>
                {/* <p>in stock: {product.inStock - selectedQty}</p>
                {
                    product.nextDay ? <p><em>Next Day Shipping</em></p> : null
                }
                <p>Rating: {product.rating}/5</p> */}
            </CheckoutCard>
            <section>
                <div>
                </div>
                    <button onClick={() => {
                        dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: product
                        })
                    }}>
                        Remove Item
                    </button>
            </section>
        </CheckoutItemList>
    )
}


export default CheckoutItem
