import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ProductItem from '../ProductItem/ProductItem';
import Pagination from '../Pagination';
import { CartState } from '../../Context/Context';
import { ProductListWrapper } from './ProductListStyle';
import { cartReducer } from '../../Context/Reducers';
import { Button } from '../../StyleProps';

const ProductList = () => {
    const { state: { cart, productsArray },
            productState: { sort, byStock, byNextDay, byRating, searchQuery },
            isLoading, setIsLoading
        } = CartState();
    const PRODUCTS_PER_PAGE = 10;
    const [error, setError] = useState(false);
    const [totalPages, setTotalPages] = useState(Math.ceil(productsArray.length/PRODUCTS_PER_PAGE));
    const [pageNumber, setPageNumber] = useState(0);

        // console.log(productsArray.forEach(product => console.log(product.inStock)));

    useEffect(() => {
        productsArray.forEach((product) => {
            product.clearance = (product.inStock <= 5 ? true : false);
        })
    }, [productsArray]);


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

    console.log(cart)


    return (
        <ProductListWrapper>
        {
            transFormProducts().map((product) => (
               <ProductItem 
                id={product.id} 
                key={product.id} 
                product={product}
                // clearance={product.inStock <= 5 ? true : false}
                />
            ))
        }
        <h3>Page: {pageNumber}</h3>
        <Pagination 
          totalPages={totalPages}
          pageNumber={pageNumber}  
          handlePageNumberClick={handlePageNumberClick}
        />
    </ProductListWrapper>
    )
}

export default ProductList
