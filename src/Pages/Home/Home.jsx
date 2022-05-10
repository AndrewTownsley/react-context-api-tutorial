import React from 'react';
import ProductList from '../../components/ProductList/ProductList';
import Filters from '../../components/Filters/Filters';
import { CartState } from '../../Context/Context';
import { HomeWrapper } from './HomeStyle';


export const Home = () => {
    // const { state: {}} = CartState();

    return (
        <HomeWrapper className='Home'>
            <Filters/>
            <ProductList/>
        </HomeWrapper>
    )
}

export default Home;
