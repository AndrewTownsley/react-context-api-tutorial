import React, { useState } from 'react'
import ProductItem from './ProductItem';
import Pagination from './Pagination';
import { CartState } from '../Context/Context';

const ProductList = () => {
    const { state: {productsArray },
            productState: { sort, byStock, byNextDay, byRating, searchQuery }
        } = CartState();
    const PRODUCTS_PER_PAGE = 10;
    const [error, setError] = useState(false);
    const [totalPages, setTotalPages] = useState(Math.ceil(productsArray.length/PRODUCTS_PER_PAGE));
    const [pageNumber, setPageNumber] = useState(0);
    console.log(productsArray.length / PRODUCTS_PER_PAGE);



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
            sortedProducts = sortedProducts.filter(product => 
                product.name.toLowerCase().includes(searchQuery)
            )
        }
        return sortedProducts;
    }

    const handlePageNumberClick = (number) => {
        setPageNumber(number);
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
        <h3>Page: {pageNumber}</h3>
        <Pagination 
          totalPages={totalPages}
          pageNumber={pageNumber}  
          handlePageNumberClick={handlePageNumberClick}
        />
    </div>
    )
}

export default ProductList
