import React from 'react';
import ProductList from '../components/ProductList';
import Filters from '../components/Filters';
import ConfirmationModal from '../components/ConfirmationModal';
import { CartState } from '../Context/Context';


const Home = ({ openEdit }) => {
    const { state: {}} = CartState();

    return (
        <div className='Home'>
            <Filters/>
            <ProductList/>
        </div>
    )
}

export default Home
