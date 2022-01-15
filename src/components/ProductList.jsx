import React from 'react'
import ProductItem from './ProductItem';
import { CartState } from '../Context/Context';

const ProductList = () => {
    const { state: {productsArray },
            productState: { sort, byStock, byNextDay, byRating, searchQuery }
            } = CartState();

    const transFormProducts = () => {
        let sortedProducts = productsArray;

        //  sort by price, high to low

        if(sort) {
            sortedProducts = sortedProducts.sort((a,b) => 
                sort === "lowToHigh" ? a.price - b.price : b.price - a.price
            )
        }

        //  filter by in stock / out of stock
        if(!byStock) {
            sortedProducts = sortedProducts.filter((product) => product.inStock)
        }

        //  filter by next day delivery
        if(byNextDay) {
            sortedProducts = sortedProducts.filter(product => product.nextDay)
        }

        //  filter by rating
        if(byRating) {
            sortedProducts = sortedProducts.filter(product => product.rating === byRating)
        }
        //  filter by search query 
        if(searchQuery) {
            sortedProducts = sortedProducts.fitler(product => 
                product.name.toLowerCase().includes(searchQuery)
            )
        }
        return sortedProducts;
    }




    return (
        <div className="product-list" >
        {
            transFormProducts().map((product) => (
               <ProductItem 
                id={product.id} 
                key={product.id} 
                product={product}
                />
            ))
        }
    </div>
    )
}

export default ProductList
