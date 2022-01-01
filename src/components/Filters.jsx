import React, { useState } from 'react'
import Rating from './Rating'
import { CartState } from '../Context/Context';


const Filters = () => {
    const [rating, setRating]  =useState(3);
    const [nextDay, setNextDay] = useState(false);
    const [outOfStock, setOutOfStock] = useState(false);

    return (
        <div className='Filters'>
            <h3>Filter Products</h3>
            <ul>
                <label htmlFor="priceAscend">
                    Price: low to high
                    <input type="radio" name="priceSort" />
                </label>
                <label htmlFor="priceDescend">
                    Price: high to low
                    <input type="radio" name="priceSort" />
                </label>
                <label htmlFor="nextDay">
                    Next Day Delivery
                    <input 
                        onChange={() => setNextDay(true)} 
                        type="checkbox"
                        name="nextDay" />
                </label>
                <label htmlFor="outOfStock">
                    Show out of stock items
                    <input 
                        onChange={() => setOutOfStock(true)} 
                        type="checkbox"
                        name="outOfStock" />
                </label>
                <Rating 
                    rating={rating} 
                    onClick={(i) => setRating(i + 1)}
                />
            </ul>
        </div>
    )
}

export default Filters
