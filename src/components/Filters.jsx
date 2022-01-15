import React, { useState } from 'react'
import Rating from './Rating'
import { CartState } from '../Context/Context';


const Filters = () => {
    const { productState: {
        sort,
        byNextDay,
        byStock
    }, productDispatch} = CartState();
    const [ rating ]  =useState(3);

    return (
        <div className='Filters'>
            <h3>Filter Products</h3>
            <ul>
                <label htmlFor="priceAscend">
                    Price: low to high
                    <input 
                        onChange={() => {
                            productDispatch({
                                type: "SORT_BY_PRICE",
                                payload: "lowToHigh"
                            })
                        }}
                        type="radio" 
                        name="priceSort" 
                        checked={sort === "highToLow" ? true : false}
                    />
                </label>
                <label htmlFor="priceDescend">
                    Price: high to low
                    <input 
                        onChange={() => {
                            productDispatch({
                                type: "SORT_BY_PRICE",
                                payload: "highToLow"
                            })
                        }}
                        type="radio" 
                        name="priceSort" 
                        checked={sort === "highToLow" ? true : false}
                    />
                </label>
                <label htmlFor="nextDay">
                    Next Day Delivery
                    <input 
                        onChange={() => {
                            productDispatch({
                                type: "FILTER_BY_DELIVERY",
                            })
                        }}
                        type="checkbox"
                        name="nextDay"
                        checked={byNextDay} 
                    />
                </label>
                <label htmlFor="outOfStock">
                    Show out of stock items
                    <input 
                        onChange={() => {
                            productDispatch({
                                type: "FILTER_BY_STOCK"
                            })
                        }}
                        type="checkbox"
                        name="outOfStock" 
                        checked={byStock}
                    />
                </label>
                <Rating 
                    rating={rating} 
                    onClick={(i) => {
                        productDispatch({
                            type: "FILTER_BY_RATING",
                            payload: i + 1,
                        })
                    }}
                />
                <button 
                    onClick={() => 
                        productDispatch({
                            type: "CLEAR_FILTERS",
                        })
                    }
                >
                    Clear Filters
                </button>
            </ul>
        </div>
    )
}

export default Filters
