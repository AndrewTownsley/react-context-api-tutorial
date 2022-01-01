import React from 'react';
import ProductList from '../components/ProductList';
import Filters from '../components/Filters';


const Home = () => {

    return (
        <div className='Home'>
            <Filters/>
            <ProductList/>
        </div>
    )
}

export default Home
