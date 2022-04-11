import React, { useState } from 'react'
import Rating from '../Rating'
import { CartState } from '../../Context/Context';
import { FilterWrapper, FilterButton } from './FilterStyle';
import { BORDERS, Button } from '../../StyleProps';


const Filters = () => {
    const { productState: {
        sort,
        byNextDay,
        byStock,
        byRating
    }, productDispatch} = CartState();
    const [ rating ] = useState(3);
    const [sortActiveLow, setSortActiveLow] = useState(false);
    const [sortActiveHigh, setSortActiveHigh] = useState(false);
    const [sortClearance, setSortClearance] = useState(false);

    return (
        <FilterWrapper>
            <h3>Filter Products</h3>
            <ul>
                <li><h4>Price:</h4></li>
                <FilterButton 
                        onClick={() => {
                            productDispatch({
                                type: "SORT_BY_PRICE",
                                payload: "lowToHigh"
                            })
                            setSortActiveHigh(false)
                        }}
                        // onMouseDown={() => setSortActiveLow(true)}
                        onMouseDown={() => setSortActiveLow(prevState => !prevState)}
                        type="radio" 
                        name="priceSort" 
                        value="sortLow" 
                        border={
                            (sortActiveLow && !sortActiveHigh) ? `${BORDERS.borderActive}` : `${BORDERS.borderPrimary}`}
                        checked={sort === "lowToHigh" ? true : false}
                >
                    low to high
                </FilterButton>
                {/* <label htmlFor="priceAscend">
                     low to high
                    <input 
                        onChange={() => {
                            productDispatch({
                                type: "SORT_BY_PRICE",
                                payload: "lowToHigh"
                            })
                        }}
                        type="radio" 
                        name="priceSort" 
                        checked={sort === "lowToHigh" ? true : false}
                    />
                </label> */}
                <FilterButton 
                        onClick={() => {
                            productDispatch({
                                type: "SORT_BY_PRICE",
                                payload: "highToLow"
                            })
                            setSortActiveHigh(true)
                        }}
                        // onMouseDown={() => setSortActiveLow(false)}
                        onMouseDown={() => setSortActiveLow(prevState => !prevState)}
                        type="radio" 
                        name="priceSort" 
                        value="sortHigh"
                        border={
                            (sortActiveHigh && !sortActiveLow) ? `${BORDERS.borderActive}` : `${BORDERS.borderPrimary}`}
                        checked={sort === "highToLow" ? true : false}
                >
                    high to low
                </FilterButton>
                {/* <label htmlFor="priceDescend">
                    high to low
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
                </label> */}
                <FilterButton 
                        onClick={() => {
                            productDispatch({
                                type: "FILTER_BY_STOCK"
                            })
                            console.log('CLEARANCE!!!')
                        }}
                        onMouseDown={() => setSortClearance(prevState => !prevState)}
                        type="checkbox"
                        name="outOfStock" 
                        border={sortClearance ? `${BORDERS.borderActive}` : `${BORDERS.borderPrimary}`}
                        checked={byStock}
                        >
                    Clearance
                </FilterButton>
                </ul>
                <ul>
                {/* <label htmlFor="outOfStock">
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
                </label> */}
                <li><h4>By Rating:</h4></li>
                <Rating 
                    rating={byRating} 
                    onClick={(i) => {
                        productDispatch({
                            type: "FILTER_BY_RATING",
                            payload: i + 1,
                        })
                    }}
                />
                <Button 
                    onClick={() => 
                        productDispatch({
                            type: "CLEAR_FILTERS",
                        })
                    }
                >
                    Clear Filters
                </Button>
                <p>Render a category for each item based on the first word in the name.  Then render a selector for each category here.</p>
            </ul>
        </FilterWrapper>
    )
}

export default Filters
