import faker from 'faker';
import React, { useState, useContext } from 'react';
import ProductList from '../components/ProductList';

faker.seed(100)

const Home = () => {

    return (
        <div>
            <ProductList/>
        </div>
    )
}

export default Home
