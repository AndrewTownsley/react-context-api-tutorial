import faker from 'faker';
import React, { useState, useContext } from 'react';
import ProductList from '../components/ProductList';

faker.seed(100)

const Home = () => {

    return (
        <div>
            <h1>Home Component</h1>
            <ProductList/>
        </div>
    )
}

export default Home
