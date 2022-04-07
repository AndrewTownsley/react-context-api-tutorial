import React from 'react';
import ProductList from '../../components/ProductList/ProductList';
import Filters from '../../components/Filters/Filters';
// import ConfirmationModal from '../components/Checkout/ConfirmationModal';
import { CartState } from '../../Context/Context';
import { HomeWrapper } from './HomeStyle';


export const Home = ({ openEdit }) => {
    const { state: {}} = CartState();

    return (
        <HomeWrapper className='Home'>
            <Filters/>
            <ProductList/>
        </HomeWrapper>
    )
}

export default Home;
