import React from 'react';
import ProductList from '../../components/ProductList';
import Filters from '../../components/Filters';
// import ConfirmationModal from '../components/Checkout/ConfirmationModal';
import { CartState } from '../../Context/Context';
import { HomeWrapper } from './Home';


export const Home = ({ openEdit }) => {
    const { state: {}} = CartState();

    return (
        <HomeWrapper className='Home'>
            <Filters/>
            <ProductList/>
        </HomeWrapper>
        // <div className='Home'>
        //     <Filters/>
        //     <ProductList/>
        // </div>
    )
}

export default Home;
