import React from 'react'
import { AiFillStar, AiOutlineStar } from "react-icons/ai";


const Rating = ({ rating, onClick}) => {
    return (
        <div className='rating'>
            {
                [...Array(5)].map((_, i) => (
                    <span key={i} onClick={() => onClick(i)}>
                        {
                            rating > i ?
                            (
                                <AiFillStar className='rating-star' />
                            )
                             :
                            (
                                <AiOutlineStar fontSize="15px" />
                            )
                        }
                    </span>
                ))
            }
        </div>
    )
}

export default Rating
