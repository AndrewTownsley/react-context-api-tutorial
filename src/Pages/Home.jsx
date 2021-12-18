import faker from 'faker';
import React, { useState } from 'react';
import ProductDetail from '../components/ProductDetail';

const Home = ({ cart, setCart }) => {

    faker.seed(100);

const productsArray =[...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    item: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
}));

const [products] = useState(productsArray) 

console.log(cart);
console.log(productsArray);

    return (
        <div>
            <h1>Home Component</h1>
            <div className="product-list" >
                {
                    productsArray.map((product) => (
                       <ProductDetail 
                        id={product.id} 
                        key={product.id} 
                        product={product}
                        cart={cart}
                        setCart={setCart}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Home
