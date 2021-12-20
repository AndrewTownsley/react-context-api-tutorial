import faker from 'faker';
import React, { useState, useContext } from 'react';
import ProductDetail from '../components/ProductDetail';
import { CartContext } from '../Context';

faker.seed(100)

const Home = () => {

const productsArray =[...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    item: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
}));

const [products] = useState(productsArray) 

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
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Home
